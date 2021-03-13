import React from "react";
import { Table } from "antd";
import "./Table.scss";

interface TableProps {
  tableData: Array<any>;
  columns: Array<any>;
  className?: string;
}

const GenericTable = ({ tableData, columns, className }: TableProps) => {
  if (tableData.length === 0) {
    return (
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={false}
        className={className}
      />
    );
  } else {
    return (
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={false}
        scroll={{ x: 400 }}
        className={className}
      />
    );
  }
};

export default GenericTable;
