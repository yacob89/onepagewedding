import { Divider, List, Typography } from "antd";
import React from "react";
import styled from "styled-components";

import { TypeNote } from "src/types/TypeNote";

const ListStyled = styled(List)`
  max-height: 40%;
`;

interface TypeProps {
  title?: string;
  datasource: TypeNote[];
}

const App: React.FC<TypeProps> = ({ title, datasource }) => (
  <>
    <Divider orientation="left">Messages</Divider>
    <List
      size="small"
      bordered
      dataSource={datasource}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[{item.sender}]</Typography.Text>
          {" " + item.description}
        </List.Item>
      )}
    />
  </>
);

export default App;
