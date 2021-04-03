import React from "react";
import { Table } from "antd";
import "./Table.scss";

interface TableProps {
  tableData: Array<any>;
  columns: Array<any>;
  className?: string;
}

const GenericTable = ({ tableData, columns, className }: TableProps) => {
  return tableData.length ? (
    <Table
      dataSource={tableData}
      columns={columns}
      pagination={false}
      scroll={{ x: 800, y: 400 }}
      className={className}
    />
  ) : (
    <Table
      dataSource={tableData}
      columns={columns}
      pagination={false}
      className={className}
    />
  );
};

export default GenericTable;
