import React from "react";
import { GenericTable } from "components";
import "./common.scss";

interface PlayerStatisticsTableProps {
  data: Array<any>;
  columns: Array<any>;
}

const PlayerStatisticsTable = ({
  data,
  columns,
}: PlayerStatisticsTableProps) => {
  return (
    <GenericTable
      tableData={data}
      columns={columns}
      className={"table-style"}
    />
  );
};

export default PlayerStatisticsTable;
