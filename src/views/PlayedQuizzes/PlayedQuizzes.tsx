import React, { useEffect, useState } from "react";
import { PlayedQuizzesTable } from "containers";
import { Affix, Col, Row, Space, Spin, Tooltip } from "antd";
import { Icon, SearchBar } from "components";
import { Chart, Download, Remove, Users } from "assets/images";
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
  const { isLoading, data } = useQuery("getAuthorQuizzes", getPlayedQuizzes, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const data: PlayedQuizzesData[] = result.data.map((quiz, index) => {
        quiz.key = index++;
        quiz.startDateTime = Date.parse(quiz.startedAt);
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
      sorter: (a: PlayedQuizzesData, b: PlayedQuizzesData) =>
        a.quizName.localeCompare(b.quizName),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
      sorter: (a: PlayedQuizzesData, b: PlayedQuizzesData) =>
        a.roomName.localeCompare(b.roomName),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Time",
      dataIndex: "startedAt",
      key: "startedAt",
      sorter: (a: PlayedQuizzesData, b: PlayedQuizzesData) =>
        a.startDateTime - b.startDateTime,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "",
      key: "action",
      render: function renderIcons(record: PlayedQuizzesData) {
        return (
          <Space size="middle">
            <Tooltip
              key={"questionStatistics"}
              title="Show question statistics"
            >
              <div onClick={() => handleShowQuizStatistics(record)}>
                <Icon
                  src={Chart}
                  size={"smaller"}
                  style={"general-table-icon__clickable"}
                />
              </div>
            </Tooltip>
            <Tooltip key={"playerStatistics"} title="Show player statistics">
              <div onClick={() => handleShowPlayerStatistics(record)}>
                <Icon
                  src={Users}
                  size={"smaller"}
                  style={"general-table-icon__clickable"}
                />
              </div>
            </Tooltip>
            <Tooltip key={"downloadStatistics"} title="Download statistics">
              <div>
                <Icon
                  src={Download}
                  size={"smaller"}
                  style={"general-table-icon__clickable"}
                />
              </div>
            </Tooltip>
            <Tooltip key={"deleteRoom"} title="Delete room">
              <div onClick={() => handleDeleteRoom(record)}>
                <Icon
                  src={Remove}
                  size={"smaller"}
                  style={"general-table-icon__clickable"}
                />
              </div>
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <div className={"main-container"}>
      <Row>
        <Col className={"mt-5"} span={18} offset={3}>
          <div className="search-bar-wrapper">
            <Affix>
              <SearchBar
                onSearchClick={filterAndSortRooms}
                placeholder={"Filter by Room name..."}
              />
            </Affix>
          </div>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={18} className={"mt-3"}>
          {isLoading ? (
            <Row justify={"center"}>
              <Spin size="large" />
            </Row>
          ) : (
            <PlayedQuizzesTable data={rooms} columns={columns} />
          )}
        </Col>
      </Row>
    </div>
  );
};
export default PlayedQuizzes;
