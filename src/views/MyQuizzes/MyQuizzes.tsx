import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./MyQuizzes.scss";
import { SearchBar } from "../../components";
import { Affix, Button, Col, Row, Spin, Tooltip } from "antd";
import { QuizCardList, StartQuizModal } from "../../containers";
import { useMutation, useQuery } from "react-query";
import {
  createQuiz,
  deleteQuiz,
  getQuizzesDetails,
  startRoom,
} from "../../common/client/BackOfficeApplicationClient";
import { Quiz, QuizDetails, QuizQuestion } from "../../common/type/Types";
import { useHistory } from "react-router-dom";
import { EDIT_QUIZ_PAGE_PATH } from "../../router/config";
import { PlusOutlined } from "@ant-design/icons";

const MyQuizzes = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [quizzes, setQuizzes] = useState<QuizDetails[]>([]);
  const [quizIdToStart, setQuizIdToStart] = useState<number | undefined>(
    undefined
  );
  const history = useHistory();

  const deleteQuizMutation = useMutation(deleteQuiz);
  const createQuizMutation = useMutation(createQuiz);

  const { isLoading, data } = useQuery("getAllQuizzes", getQuizzesDetails, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      setQuizzes(result.data);
    },
  });

  const handleModifyQuiz = (quizId: number) => {
    history.push(`${EDIT_QUIZ_PAGE_PATH}/${quizId}`);
  };

  useEffect(() => {
    if (data?.data) {
      setQuizzes(data.data);
    }
  }, []);

  const filterAndSortQuizzes = (keyWord: string) => {
    if (data?.data && keyWord && keyWord.trim()) {
      const keyWordLowerCase = keyWord.toLocaleLowerCase();
      const filteredData = data.data
        .filter((quiz) =>
          quiz.quizName?.toLocaleLowerCase()?.includes(keyWordLowerCase)
        )
        .sort((quiz1, quiz2) => {
          const quiz1NameStartsWithKeyWord: boolean = quiz1.quizName
            ?.toLocaleLowerCase()
            ?.startsWith(keyWordLowerCase);
          const quiz2NameStartsWithKeyWord: boolean = quiz2.quizName
            ?.toLocaleLowerCase()
            ?.startsWith(keyWordLowerCase);
          if (quiz1NameStartsWithKeyWord && !quiz2NameStartsWithKeyWord) {
            return -1;
          }
          if (quiz2NameStartsWithKeyWord && !quiz1NameStartsWithKeyWord) {
            return 1;
          }
          return 0;
        });
      setQuizzes(filteredData);
    } else {
      setQuizzes(data?.data ?? []);
    }
  };

  const handleAddNewQuiz = () => {
    createQuizMutation.mutate({ questions: [] as QuizQuestion[] } as Quiz, {
      onSuccess: (result) => {
        console.log(result);
        handleModifyQuiz(result.data.id);
      },
    });
  };

  const handleDeleteQuiz = (quizId: number) => {
    deleteQuizMutation.mutate(quizId, {
      onSuccess: () => {
        setQuizzes((prevState) =>
          prevState.filter((quiz) => quiz.quizId !== quizId)
        );
      },
    });
  };

  const handleRegisterRoom = (quizId: number) => {
    setQuizIdToStart(quizId);
  };

  const handlePlayQuiz = (roomName: string) => {
    if (quizIdToStart) {
      startRoom({ quizId: quizIdToStart, roomName: roomName }).then((res) => {
        const win = window.open(res.data.relocationUrl, "_blank");
        if (win != null) {
          win.focus();
        }
        setQuizIdToStart(undefined);
      });
    }
  };

  return (
    <div className={"scrollY"} ref={setContainer}>
      <Row className={"my-5"} justify="center">
        <Col span={3} style={{ textAlign: "right" }} className={"mt-5 mr-2"}>
          <Tooltip title="Add new Quiz">
            <Button
              className={"my-quizzes--add-button"}
              onClick={() => handleAddNewQuiz()}
              icon={<PlusOutlined />}
            />
          </Tooltip>
        </Col>
        <Col className={"mt-5"} span={18}>
          <div className="search-bar-wrapper">
            <Affix offsetTop={-40} target={() => container}>
              <SearchBar onSearchClick={filterAndSortQuizzes} />
            </Affix>
          </div>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={18}>
          {isLoading ? (
            <Row justify={"center"}>
              <Spin size="large" />
            </Row>
          ) : (
            <QuizCardList
              handleRegisterRoom={handleRegisterRoom}
              handleModifyQuiz={handleModifyQuiz}
              handleDeleteQuiz={handleDeleteQuiz}
              quizzes={quizzes}
            />
          )}
        </Col>
      </Row>
      <StartQuizModal
        quizIdToStart={quizIdToStart}
        onModalOk={handlePlayQuiz}
        onModalCancel={() => setQuizIdToStart(undefined)}
      />
    </div>
  );
};

export default MyQuizzes;
