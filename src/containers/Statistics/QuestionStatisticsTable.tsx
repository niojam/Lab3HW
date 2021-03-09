import React from "react";
import { GenericTable } from "components";
import "./common.scss";
import { QuestionStatisticsData } from "../../common/type/Types";

interface QuestionStatisticsTableProps {
  data: QuestionStatisticsData[];
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
