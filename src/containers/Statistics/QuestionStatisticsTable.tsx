import React from "react";
import { GenericTable } from "components";
import { QuestionStatisticsData } from "../../common/type/Types";

interface QuestionStatisticsTableProps {
  data: QuestionStatisticsData[];
  columns: Array<any>;
}

const QuestionStatisticsTable = ({
  data,
  columns,
}: QuestionStatisticsTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default QuestionStatisticsTable;
