import React from "react";
import { Table } from "antd";
import "./Table.scss";

interface TableProps {
  tableData: Array<any>;
  columns: Array<any>;
  className?: string;
}

const GenericTable = ({ tableData, columns, className }: TableProps) => (
  <Table
    dataSource={tableData}
    columns={columns}
    pagination={false}
    scroll={{ x: 400 }}
    className={className}
  />
);

export default GenericTable;
