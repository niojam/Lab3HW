import React from "react";
import { GenericTable } from "components";
import { PlayerStatisticsData } from "../../common/type/Types";

interface PlayerStatisticsTableProps {
  data: PlayerStatisticsData[];
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
