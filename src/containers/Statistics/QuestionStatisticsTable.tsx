import React from "react";
import { GenericTable } from "components";
import { QuestionStatisticsData } from "../../common/type/Types";
interface QuestionStatisticsTableProps {
  data: QuestionStatisticsData[];
  columns: Array<any>;
  style?: string;
}

const QuestionStatisticsTable = ({
  data,
  columns,
  style,
}: QuestionStatisticsTableProps) => {
  return <GenericTable tableData={data} columns={columns} className={style} />;
};

export default QuestionStatisticsTable;
