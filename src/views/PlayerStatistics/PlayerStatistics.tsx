import React, { useState } from "react";
import { Col, Pagination, Row } from "antd";
import { PlayerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images";
import "./PlayerStatistics.scss";
import { RouteComponentProps } from "react-router-dom";
import { PlayerStatisticsData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getPlayersStatistics } from "../../common/client/BackOfficeApplicationClient";

interface PlayerStatisticsRouterProps {
  roomId: string;
  quizName: string;
}

type PlayerStatisticsProps = RouteComponentProps<PlayerStatisticsRouterProps>;

const PlayerStatistics = (props: PlayerStatisticsProps) => {
  const roomId = props.match.params.roomId;
  const quizName = props.match.params.quizName;
  const [playerData, setPlayerData] = useState<PlayerStatisticsData[]>([]);
  useQuery(
    ["getPlayersStatisticsData", roomId],
    () => getPlayersStatistics({ roomId: roomId }),
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
        console.log(data);
      },
    }
  );

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
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3 col-container"}>
        <Row className={"p-3"}>
          <Col sm={16} md={10} className={"col-text p-3"}>
            {quizName}
            <hr />
          </Col>
        </Row>
        <PlayerStatisticsTable data={playerData} columns={columns} />
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          total={playerData.length}
          className={"p-3"}
        />
      </Col>
    </Row>
  );
};

export default PlayerStatistics;
