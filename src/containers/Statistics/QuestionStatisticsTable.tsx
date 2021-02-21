import React from "react";
import { GenericTable } from "../../components";

interface QuestionStatisticsTableProps {
  data: Array<any>;
  columns: Array<any>;
}

const QuestionStatisticsTable = ({
  data,
  columns,
}: QuestionStatisticsTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default QuestionStatisticsTable;
