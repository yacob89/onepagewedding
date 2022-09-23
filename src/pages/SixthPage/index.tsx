import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import Space from "antd/lib/space";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Form from "antd/lib/form";
import message from "antd/lib/message";

import { TypeNote } from "src/types/TypeNote";

import TableContent from "src/common/TableContent";
import MessageList from "src/common/MessageList";
import { API } from "aws-amplify";
import * as mutations from "src/graphql/mutations";
import { useContextTodo } from "src/contexts/Todo";

const { Content } = Layout;
const { TextArea } = Input;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: LavenderBlush;
  background-image: url("https://yacob-assets.s3.us-east-2.amazonaws.com/bg.jpg");
`;

const HeaderContainerStyled = styled.div`
  margin-bottom: 50px;
`;

const HeaderTextStyled = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 3em;
  line-height: 0.8em;
  color: LightPink;
  margin: 0;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

const DivHeaderStyled = styled.div`
  position: relative;
  top: 20px;
  margin-left: 20px;
`;

const ContentStyled = styled(Content)`
  flex: 1 0 auto;
  margin-left: 20px;
  margin-right: 20px;
`;

const TextAreaStyled = styled(TextArea)`
  width: 100%;
`;

const FormItemStyled = styled(Form.Item)`
  width: 100%;
`;

const DivFormContainerStyled = styled.div``;

const DivTableContainerStyled = styled.div`
  overflow: auto;
  max-width: 100%;
  max-height: 40%;
`;

const FormItemButtonStyled = styled(Form.Item)`
  margin-right: 20px;
`;

interface TypeNotesFormValues {
  sender: string;
  description?: string;
}

interface TypeProps {
  title?: string;
}

const SixthPage: FC<TypeProps> = ({ title }) => {
  const [notesData, setNotesData] = useState<TypeNote[]>([]);
  const todoList = useContextTodo();
  const [form] = Form.useForm();

  useEffect(() => {
    todoList.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createResponseBeforeSubmit = (
    formValues: TypeNotesFormValues,
    originData?: TypeNote
  ): TypeNote => {
    console.log(
      "sender: ",
      formValues.sender,
      " description: ",
      formValues.description
    );
    return {
      name: "unauthorized",
      sender: formValues.sender || originData?.sender || "",
      description: formValues.description || originData?.description || "",
    };
  };

  const onFinish = async (values: TypeNotesFormValues): Promise<void> => {
    let tempNotesData = [...notesData];
    try {
      console.log(
        "createResponseBeforeSubmit: ",
        createResponseBeforeSubmit(values)
      );
      await API.graphql({
        query: mutations.createTodo,
        variables: { input: createResponseBeforeSubmit(values) },
      });
      console.log("Post saved successfully!");
      tempNotesData.push(createResponseBeforeSubmit(values));
      setNotesData(tempNotesData);
      form.resetFields();
      message.success("Submit success!");
      todoList.refetch();
    } catch (error) {
      message.error("Submit failed!");
      console.log("Error saving post", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutStyled>
      <HeaderContainerStyled>
        <DivHeaderStyled>
          <Space align="center">
            <HeaderTextStyled>IRENE &#38; YACOB</HeaderTextStyled>
          </Space>
        </DivHeaderStyled>
      </HeaderContainerStyled>
      <ContentStyled>
        <DivFormContainerStyled>
          <Form<TypeNotesFormValues>
            form={form}
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <FormItemStyled
                label="Name"
                name="sender"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </FormItemStyled>
            </Row>
            <Row wrap={false}>
              <FormItemStyled
                label="Message for Irene and Yacob"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your message for Irene and Yacob!",
                  },
                ]}
              >
                <TextAreaStyled rows={4} />
              </FormItemStyled>
            </Row>
            <Row>
              <FormItemButtonStyled wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItemButtonStyled>
            </Row>
          </Form>
        </DivFormContainerStyled>
        <DivTableContainerStyled>
          {/* <TableContent datasource={todoList.items} /> */}
          <MessageList datasource={todoList.items} />
        </DivTableContainerStyled>
      </ContentStyled>
    </LayoutStyled>
  );
};

export default SixthPage;
