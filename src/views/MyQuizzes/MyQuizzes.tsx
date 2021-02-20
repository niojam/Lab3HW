import React, { useState } from "react";
import "antd/dist/antd.css";
import { SearchBar } from "../../components";
import { Affix, Col, Row } from "antd";
import { QuizCardList } from "../../containers";
import { useQuery } from "react-query";
import { getQuizzes } from "../../common/client/BackOfficeApplicationClient";
import { QuizDetails } from "../../common/type/Types";

const MyQuizzes = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [quizzes, setQuizzes] = useState<QuizDetails[]>([]);

  const { isLoading, data } = useQuery("getAllQuizzes", getQuizzes, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      setQuizzes(result.data);
    },
  });

  const filterAndSortQuizzes = (keyWord: string) => {
    if (data?.data && keyWord) {
      const keyWordLowerCase = keyWord.toLocaleLowerCase();
      const filteredData = data.data
        .filter((quiz) =>
          quiz.quizName.toLocaleLowerCase().includes(keyWordLowerCase)
        )
        .sort((quiz1, quiz2) => {
          const quiz1NameStartsWithKeyWord: boolean = quiz1.quizName
            .toLocaleLowerCase()
            .startsWith(keyWordLowerCase);
          const quiz2NameStartsWithKeyWord: boolean = quiz2.quizName
            .toLocaleLowerCase()
            .startsWith(keyWordLowerCase);
          if (quiz1NameStartsWithKeyWord && !quiz2NameStartsWithKeyWord) {
            return -1;
          }
          if (quiz2NameStartsWithKeyWord && !quiz1NameStartsWithKeyWord) {
            return 1;
          }
          return 0;
        });
      setQuizzes(filteredData);
    }
  };

  return (
    <div style={{ overflowY: "scroll" }} ref={setContainer}>
      <Row className={"my-5"} justify="space-around">
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
          <QuizCardList quizzes={quizzes} />
        </Col>
      </Row>
    </div>
  );
};

export default MyQuizzes;
