import React from "react";
import { GenericTable } from "components";
import { AnswerStatisticsData } from "../../common/type/Types";
interface AnswerStatisticsTableProps {
  data: AnswerStatisticsData[];
  columns: Array<any>;
  className?: string;
}

const AnswerStatisticsTable = ({
  data,
  columns,
  className,
}: AnswerStatisticsTableProps) => {
  return (
    <GenericTable tableData={data} columns={columns} className={className} />
  );
};

export default AnswerStatisticsTable;
