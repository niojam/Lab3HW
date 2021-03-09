import React from "react";
import { GenericTable } from "components";
import "./StatisticsOverviewTable.scss";
import { PlayedQuizzesData } from "../../common/type/Types";

interface StatisticsOverviewTableProps {
  data: PlayedQuizzesData[];
  columns: Array<any>;
}

const StatisticsOverviewTable = ({
  data,
  columns,
}: StatisticsOverviewTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default StatisticsOverviewTable;
