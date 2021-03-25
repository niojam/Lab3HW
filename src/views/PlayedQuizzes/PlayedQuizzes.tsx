import React, { useEffect, useState } from "react";
import { PlayedQuizzesTable } from "containers";
import { Affix, Col, Row, Space } from "antd";
import { Icon, SearchBar } from "components";
import { Chart, Download, Remove, Users } from "assets/images";
import "./PlayedQuizzes.scss";
import { PlayedQuizzesData } from "../../common/type/Types";
import { useMutation, useQuery } from "react-query";
import {
  deleteRoom,
  getPlayedQuizzes,
} from "../../common/client/BackOfficeApplicationClient";
import { useHistory } from "react-router-dom";
import {
  PLAYERS_STATISTICS_PAGE_PATH,
  QUIZ_STATISTICS_PAGE_PATH,
  STATISTICS_PAGE_PATH,
} from "../../router/config";

const PlayedQuizzes = () => {
  const history = useHistory();
  const [rooms, setRoomStatistics] = useState<PlayedQuizzesData[]>([]);
  const deleteRoomMutation = useMutation(deleteRoom);
  const { data } = useQuery("getAuthorQuizzes", getPlayedQuizzes, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const data: PlayedQuizzesData[] = result.data.map((quiz, index) => {
        quiz.key = index++;
        const [date, time] = quiz.startedAt.split("T");
        const [year, month, day] = date.split("-");
        const [hour, minute] = time.split(":");
        quiz.startedAt = `${day}.${month}.${year} ${hour}:${minute}`;
        return quiz;
      });
      setRoomStatistics(data);
    },
  });

  useEffect(() => {
    if (data?.data) {
      setRoomStatistics(data.data);
    }
  }, []);
  const handleShowQuizStatistics = (record: PlayedQuizzesData) => {
    history.push(
      `${STATISTICS_PAGE_PATH}/${record.roomName}${QUIZ_STATISTICS_PAGE_PATH}`,
      {
        quizId: record.quizId,
        quizName: record.quizName,
        roomId: record.id,
        roomName: record.roomName,
      }
    );
  };

  const handleShowPlayerStatistics = (record: PlayedQuizzesData) => {
    history.push(
      `${STATISTICS_PAGE_PATH}/${record.id}${PLAYERS_STATISTICS_PAGE_PATH}`,
      { quizName: record.quizName }
    );
  };

  const handleDeleteRoom = (record: PlayedQuizzesData) => {
    deleteRoomMutation.mutate(record.id, {
      onSuccess: () => {
        const filteredRooms: PlayedQuizzesData[] = rooms.filter(
          (room) => room.id !== record.id
        );
        setRoomStatistics(filteredRooms);
      },
    });
  };
  const filterAndSortRooms = (keyWord: string) => {
    if (data?.data && keyWord && keyWord.trim()) {
      const keyWordLower = keyWord.toLowerCase();
      const filteredData = data.data
        .filter((room) => room.roomName.toLowerCase().includes(keyWordLower))
        .sort((room1, room2) => {
          const room1NameStartsWithKeyWord: boolean = room1.roomName
            .toLowerCase()
            .startsWith(keyWordLower);
          const room2NameStartsWithKeyWord: boolean = room2.roomName
            .toLowerCase()
            .startsWith(keyWordLower);
          if (room1NameStartsWithKeyWord && !room2NameStartsWithKeyWord) {
            return -1;
          } else if (
            !room1NameStartsWithKeyWord &&
            room2NameStartsWithKeyWord
          ) {
            return 1;
          }
          return 0;
        });
      setRoomStatistics(filteredData);
    } else {
      setRoomStatistics(data?.data ?? []);
    }
  };
  const columns = [
    {
      title: "Quiz Name",
      dataIndex: "quizName",
      key: "quizName",
    },
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
    },
    {
      title: "Time",
      dataIndex: "startedAt",
      key: "startedAt",
    },
    {
      title: "",
      key: "action",
      render: function renderIcons(record: PlayedQuizzesData) {
        return (
          <Space size="middle">
            <div onClick={() => handleShowQuizStatistics(record)}>
              <Icon src={Chart} size={"smaller"} style={"icon__clickable"} />
            </div>
            <div onClick={() => handleShowPlayerStatistics(record)}>
              <Icon src={Users} size={"smaller"} style={"icon__clickable"} />
            </div>
            <Icon src={Download} size={"smaller"} style={"icon__clickable"} />
            <div onClick={() => handleDeleteRoom(record)}>
              <Icon src={Remove} size={"smaller"} style={"icon__clickable"} />
            </div>
          </Space>
        );
      },
    },
  ];

  return (
    <div className={"div-container"}>
      <Col className={"mt-5"} span={18} offset={3}>
        <div className="search-bar-wrapper">
          <Affix>
            <SearchBar onSearchClick={filterAndSortRooms} />
          </Affix>
        </div>
      </Col>
      <Row justify={"center"} align={"middle"}>
        <Col md={24} lg={18} className={"m-3"}>
          <PlayedQuizzesTable data={rooms} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};
export default PlayedQuizzes;
