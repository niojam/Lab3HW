import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { PlayerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images/index";
import "./PlayerStatistics.scss";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { PlayerStatisticsData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getPlayersStatistics } from "../../common/client/BackOfficeApplicationClient";

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
  const { data } = useQuery(
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
    },
    {
      title: function renderIcon() {
        return <Icon src={Check} size={"extra-small"} />;
      },
      dataIndex: "correctAnswers",
      key: "correctAnswers",
    },
    {
      title: function renderIcon() {
        return <Icon src={Close} size={"extra-small"} />;
      },
      dataIndex: "wrongAnswers",
      key: "wrongAnswers",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <div className={"div-container"}>
      <Row justify={"center"} align={"middle"}>
        <Col md={24} lg={18} className={"m-3 col-container"}>
          <Row className={"p-3"}>
            <Col className={"col-text"}>
              <h1>{quizName}</h1>
            </Col>
          </Row>
          <PlayerStatisticsTable data={playerData} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default PlayerStatistics;
