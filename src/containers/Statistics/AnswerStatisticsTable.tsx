import React from "react";
import { GenericTable } from "../../components";
import "./common.scss";

interface AnswerStatisticsTableProps {
  data: Array<any>;
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
