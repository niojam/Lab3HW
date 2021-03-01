import React from "react";
import { GenericTable } from "components";
import "./StatisticsOverviewTable.scss";
import { AuthorQuizzes } from "../../common/type/Types";

interface StatisticsOverviewTableProps {
  data: AuthorQuizzes[];
  columns: Array<any>;
}

const StatisticsOverviewTable = ({
  data,
  columns,
}: StatisticsOverviewTableProps) => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default StatisticsOverviewTable;
