import React from "react";
import { GenericTable } from "components";
import { AnswerStatisticsData } from "../../common/type/Types";
interface AnswerStatisticsTableProps {
  data: AnswerStatisticsData[];
  columns: Array<any>;
  style?: string;
}

const AnswerStatisticsTable = ({
  data,
  columns,
  style,
}: AnswerStatisticsTableProps) => {
  return <GenericTable tableData={data} columns={columns} className={style} />;
};

export default AnswerStatisticsTable;
