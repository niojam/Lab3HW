import React from "react";
import { GenericTable } from "../../components";
import "./common.scss";

interface QuestionStatisticsTableProps {
  data: Array<any>;
  columns: Array<any>;
}

const QuestionStatisticsTable = ({
  data,
  columns,
}: QuestionStatisticsTableProps) => {
  return (
    <GenericTable
      tableData={data}
      columns={columns}
      className={"table-style"}
    />
  );
};

export default QuestionStatisticsTable;
