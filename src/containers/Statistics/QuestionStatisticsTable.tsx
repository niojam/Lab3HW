import React from "react";
import { GenericTable } from "components";
import { QuestionStatisticsData } from "../../common/type/Types";
interface QuestionStatisticsTableProps {
  data: QuestionStatisticsData[];
  columns: Array<any>;
  className?: string;
}

const QuestionStatisticsTable = ({
  data,
  columns,
  className,
}: QuestionStatisticsTableProps) => {
  return (
    <GenericTable tableData={data} columns={columns} className={className} />
  );
};

export default QuestionStatisticsTable;
