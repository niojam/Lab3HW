import React from "react";
import { GenericTable } from "components";
import { AnswerStatisticsData } from "../../common/type/Types";

interface AnswerStatisticsTableProps {
  data: AnswerStatisticsData[];
  columns: Array<any>;
}

const AnswerStatisticsTable = ({
  data,
  columns,
}: AnswerStatisticsTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default AnswerStatisticsTable;
