import { FC } from "react";
import styled from "styled-components";
import Space from "antd/lib/space";
import Layout from "antd/lib/layout";
import Image from "antd/lib/image";

const { Content } = Layout;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: LavenderBlush;
  background-image: url("https://yacob-assets.s3.us-east-2.amazonaws.com/bg.jpg");
`;

const ContentStyled = styled(Content)`
  flex: 1 0 auto;
`;

const DivHeaderStyled = styled.div`
  position: relative;
  top: 20px;
  margin-left: 20px;
`;

const HeaderContainerStyled = styled.div`
  margin-bottom: 100px;
`;

const HeadeTextStyled = styled.span`
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

const DivTitleStyled = styled.div`
  margin-left: 20px;
`;

const TitleStyled = styled.p`
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px #aaa;
  font-size: 9em;
  line-height: 0.8em;
  color: #000;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  @media only screen and (max-width: 992px) {
    font-size: 4em;
  }
`;

const FooterStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

interface TypeProps {
  title?: string;
}

const FirstPage: FC<TypeProps> = ({ title }) => {
  return (
    <LayoutStyled>
      <HeaderContainerStyled>
        <DivHeaderStyled>
          <Space align="center">
            <HeadeTextStyled>IRENE &#38; YACOB</HeadeTextStyled>
          </Space>
        </DivHeaderStyled>
      </HeaderContainerStyled>
      <ContentStyled>
        <DivTitleStyled>
          <TitleStyled>WE</TitleStyled>
          <TitleStyled>ARE</TitleStyled>
          <TitleStyled>GETTING</TitleStyled>
          <TitleStyled>MARRIED</TitleStyled>
        </DivTitleStyled>
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

export default FirstPage;
