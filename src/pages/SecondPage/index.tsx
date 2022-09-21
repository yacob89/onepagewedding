import { FC } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Image from "antd/lib/image";

const { Content } = Layout;

const LayoutStyled = styled(Layout)`
  display: flex;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("https://yacob-assets.s3.us-east-2.amazonaws.com/yacob_irene_bg.jpg");
  background-size: cover;
  background-position: center 30%;
`;

const ContentStyled = styled(Content)`
  align-items: center;
  justify-content: center;
`;

const RowStyled = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ColIreneStyled = styled(Col)`
  text-align: right;
`;

const FooterStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DivTitleStyled = styled.div`
  margin-left: 20px;
`;

const YacobTextStyled = styled.p`
  font-family: "Lato", sans-serif;
  text-shadow: 2px 2px 2px #000;
  font-size: 2em;
  line-height: 0.8em;
  color: #ffffff;
  margin: 0;
  text-align: left;
  font-weight: 900;
  @media only screen and (max-width: 992px) {
    font-size: 1.5em;
  }
`;

const IreneTextStyled = styled.p`
  font-family: "Lato", sans-serif;
  text-shadow: 2px 2px 2px #000;
  font-size: 2em;
  line-height: 0.8em;
  color: #ffffff;
  margin: 0;
  text-align: right;
  font-weight: 900;
  margin-right: 40px;
  @media only screen and (max-width: 992px) {
    font-size: 1.5em;
  }
`;

interface TypeProps {
  title?: string;
}

const SecondPage: FC<TypeProps> = ({ title }) => {
  return (
    <LayoutStyled>
      <ContentStyled>
        <RowStyled>
          <Col flex={2}>
            <DivTitleStyled>
              <YacobTextStyled>Yacob Madiana</YacobTextStyled>
              <YacobTextStyled>Software Engineer</YacobTextStyled>
              <YacobTextStyled>Bandung</YacobTextStyled>
              <YacobTextStyled></YacobTextStyled>
              <YacobTextStyled></YacobTextStyled>
            </DivTitleStyled>
          </Col>
          <Col flex={1}></Col>
          <ColIreneStyled flex={2}>
            <DivTitleStyled>
              <IreneTextStyled>Irene Febriani</IreneTextStyled>
              <IreneTextStyled>Pharmacist</IreneTextStyled>
              <IreneTextStyled>Semarang</IreneTextStyled>
            </DivTitleStyled>
          </ColIreneStyled>
        </RowStyled>
      </ContentStyled>
      <FooterStyled style={{ textAlign: "center" }}>
        <Image
          height={"50px"}
          width={"50px"}
          preview={false}
          src="http://twostates.in/images/scroll.png"
        />
      </FooterStyled>
    </LayoutStyled>
  );
};

export default SecondPage;
