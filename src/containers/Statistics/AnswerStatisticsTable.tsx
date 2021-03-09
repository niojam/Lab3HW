import React from "react";
import { GenericTable } from "components";
import "./common.scss";
import { AnswerStatisticsData } from "../../common/type/Types";

interface AnswerStatisticsTableProps {
  data: AnswerStatisticsData[];
  columns: Array<any>;
}

const AnswerStatisticsTable = ({
  data,
  columns,
}: AnswerStatisticsTableProps) => {
  return (
    <GenericTable
      tableData={data}
      columns={columns}
      className={"table-style"}
    />
  );
};

export default AnswerStatisticsTable;
