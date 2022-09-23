import React, { FC } from "react";
//import styled from "styled-components";
import Table from "antd/lib/table";
import Typography from "antd/lib/typography";

import { TypeNote } from "src/types/TypeNote";

const { Text } = Typography;

interface TypeProps {
  title?: string;
  datasource: TypeNote[];
}

const getRowId = (row: TypeNote): string => row.id || "";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <Text>{text}</Text>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text: string) => <Text>{text}</Text>,
  },
];

const TableContent: FC<TypeProps> = ({ title, datasource }) => {
  return <Table columns={columns} dataSource={datasource} rowKey={getRowId} />;
};

export default TableContent;
