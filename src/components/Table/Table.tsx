import React from "react";
import { Table } from "antd";
import "./Table.scss";

interface TableProps {
  tableData: Array<any>;
  columns: Array<any>;
}

const GenericTable = ({ tableData, columns }: TableProps) => (
  <Table
    dataSource={tableData}
    columns={columns}
    pagination={false}
    scroll={{ x: 400 }}
  />
);

export default GenericTable;
