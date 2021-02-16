import React from "react";
import { Table } from "antd";

interface TableProps {
  tableData: Array<any>;
  columns: Array<any>;
}

const GenericTable = ({ tableData, columns }: TableProps) => (
  <Table dataSource={tableData} columns={columns} />
);

export default GenericTable;
