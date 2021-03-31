import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import { PlayerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images/index";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { PlayerStatisticsData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getPlayersStatistics } from "../../common/client/BackOfficeApplicationClient";
import "./PlayerStatistics.scss";

interface PlayerStatisticsRouterProps {
  roomId: string;
}

interface PlayerStatisticsHistoryProps {
  quizName: string;
}

type PlayerStatisticsProps = RouteComponentProps<PlayerStatisticsRouterProps>;

const PlayerStatistics = (props: PlayerStatisticsProps) => {
  const history = useHistory<PlayerStatisticsHistoryProps>();
  const roomId = props.match.params.roomId;
  const quizName = history.location.state.quizName;
  const [playerData, setPlayerData] = useState<PlayerStatisticsData[]>([]);
  const { isLoading, data } = useQuery(
    ["getPlayersStatisticsData", roomId],
    () => getPlayersStatistics(String(roomId)),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (result) => {
        const data: PlayerStatisticsData[] = result.data.map(
          (player, index) => {
            player.key = index++;
            return player;
          }
        );
        setPlayerData(data);
      },
    }
  );
  useEffect(() => {
    if (data?.data) {
      setPlayerData(data.data);
    }
  }, []);
  const columns = [
    {
      title: "Player",
      dataIndex: "username",
      key: "username",
      sorter: (a: PlayerStatisticsData, b: PlayerStatisticsData) =>
        a.username.localeCompare(b.username),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: function renderIcon() {
        return <Icon src={Check} size={"extra-small"} style={"icon__table"} />;
      },
      dataIndex: "correctAnswers",
      key: "correctAnswers",
      sorter: (a: PlayerStatisticsData, b: PlayerStatisticsData) =>
        a.correctAnswers - b.correctAnswers,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: function renderIcon() {
        return <Icon src={Close} size={"extra-small"} style={"icon__table"} />;
      },
      dataIndex: "wrongAnswers",
      key: "wrongAnswers",
      sorter: (a: PlayerStatisticsData, b: PlayerStatisticsData) =>
        a.wrongAnswers - b.wrongAnswers,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      sorter: (a: PlayerStatisticsData, b: PlayerStatisticsData) =>
        a.score - b.score,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <div>
      <Row justify={"center"} align={"middle"}>
        <Col span={18} className={"m-3 col-container"}>
          <Row className={"p-3"}>
            <Col className={"col-text"} span={24}>
              <h1>{quizName}</h1>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={18}>
          {isLoading ? (
            <Row justify={"center"}>
              <Spin size="large" />
            </Row>
          ) : (
            <PlayerStatisticsTable data={playerData} columns={columns} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default PlayerStatistics;
