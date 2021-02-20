import React from "react";
import { GenericTable } from "../../components";
import "./StatisticsOverviewTable.scss";

interface StatisticsOverviewTableProps {
  data: Array<any>;
  columns: Array<any>;
}

const StatisticsOverviewTable = ({
  data,
  columns,
}: StatisticsOverviewTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default StatisticsOverviewTable;
