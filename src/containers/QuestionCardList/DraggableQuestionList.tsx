import React from "react";
import { QuizQuestion } from "../../common/type/Types";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, Tooltip } from "antd";
import { QuizCard } from "../../components";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import "./QuestionCardList.scss";

interface DraggableQuestionListProps {
  initialQuestions: QuizQuestion[];
  handleDeleteQuestion: (questionId: number) => void;
  handleModifyQuestion: (question: QuizQuestion) => void;
  handleDragAndDropQuestionOrder: (result: any) => void;
}

interface DraggableQuestionProps {
  question: QuizQuestion;
  index: number;
  handleDeleteQuestion: (questionId: number) => void;
  handleModifyQuestion: (question: QuizQuestion) => void;
}

const DraggableQuestion = ({
  question,
  index,
  handleDeleteQuestion,
  handleModifyQuestion,
}: DraggableQuestionProps) => {
  return (
    <Draggable draggableId={`id-${question.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Col className={"question-card-wrapper"} span={24}>
            <QuizCard
              className={"question-card"}
              title={
                <ul className={"no-bullets"}>
                  <li>{`Question: ${question.text}`}</li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Time limit: ${question.timer}`}</span>
                  </li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Points: ${question.reward}`}</span>
                  </li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Type: ${question.questionType}`}</span>
                  </li>
                </ul>
              }
              coverSrc={
                question.imageId
                  ? `/api/image?id=${question.imageId}`
                  : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
              actions={[
                <Tooltip key={"editQuestion"} title="Edit question">
                  <EditFilled
                    onClick={() => {
                      handleModifyQuestion(question);
                    }}
                    className={"quiz-card--button"}
                    key="editQuestion"
                  />
                </Tooltip>,
                <Tooltip key="deleteQuestion" title="Delete question">
                  <DeleteFilled
                    onClick={() => {
                      handleDeleteQuestion(question.id);
                    }}
                    className={"quiz-card--button"}
                    key="deleteQuestion"
                  />
                </Tooltip>,
              ]}
            />
          </Col>
        </div>
      )}
    </Draggable>
  );
};

const DraggableQuestionList = ({
  initialQuestions,
  handleDeleteQuestion,
  handleModifyQuestion,
  handleDragAndDropQuestionOrder,
}: DraggableQuestionListProps) => (
  <DragDropContext onDragEnd={handleDragAndDropQuestionOrder}>
    <Droppable droppableId="list">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {initialQuestions.map((question: any, index: number) => (
            <DraggableQuestion
              handleDeleteQuestion={handleDeleteQuestion}
              handleModifyQuestion={handleModifyQuestion}
              key={question.id}
              question={question}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default DraggableQuestionList;
