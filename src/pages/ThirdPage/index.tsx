import { FC } from "react";
import styled from "styled-components";
import Space from "antd/lib/space";
import Layout from "antd/lib/layout";
import Image from "antd/lib/image";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import { YoutubeFilled, VideoCameraFilled } from "@ant-design/icons";

const { Content } = Layout;
const { Link } = Typography;

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
  font-size: 4em;
  line-height: 0.8em;
  color: #000080;
  margin: 0;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media only screen and (max-width: 992px) {
    font-size: 1.5em;
  }
`;

const TextContentStyled = styled.p`
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px #aaa;
  font-size: 2em;
  line-height: 0.8em;
  color: #000000;
  margin: 0;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

const YoutubeLinkStyled = styled(Link)`
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px #aaa;
  font-size: 2em;
  line-height: 0.8em;
  a.ant-typography,
  & .ant-typography a {
    color: #ff0000;
  }
  margin: 0;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

const ZoomLinkStyled = styled(Link)`
  font-family: "Lato", sans-serif;
  text-shadow: 4px 4px 4px #aaa;
  font-size: 2em;
  line-height: 0.8em;
  color: #4682b4;
  margin: 0;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

const FooterStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DivMapStyled = styled.div`
  flex-shrink: 0;
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

const YoutubeFilledStyled = styled(YoutubeFilled)`
  font-size: 2em;
  line-height: 0.8em;
  color: #ff0000;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

const ZoomFilledStyled = styled(VideoCameraFilled)`
  font-size: 2em;
  line-height: 0.8em;
  color: #4169e1;
  @media only screen and (max-width: 992px) {
    font-size: 1em;
  }
`;

interface TypeProps {
  title?: string;
}

const ThirdPage: FC<TypeProps> = ({ title }) => {
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
          <TitleStyled>Save The Date</TitleStyled>
          <TextContentStyled>October 1st, 2022</TextContentStyled>
          <TextContentStyled>16:30</TextContentStyled>
          <TextContentStyled>Church In Bandung</TextContentStyled>
          <TextContentStyled>
            JL. Ketapang No.11, Malabar, Kec. Lengkong
          </TextContentStyled>
          <TextContentStyled>Kota Bandung, Jawa Barat 40262</TextContentStyled>
          <Row>
            <Space>
              <ZoomLinkStyled
                href="https://us02web.zoom.us/j/83893341983?pwd=QU9jeCtuTzVCVExSelRvZGptbllXQT09"
                target="_blank"
              >
                Zoom
              </ZoomLinkStyled>
              <ZoomFilledStyled />
            </Space>
          </Row>
          <Row>
            <Space>
              <YoutubeLinkStyled
                href="https://youtu.be/7nHYg6jQw-Q"
                target="_blank"
              >
                Youtube live stream
              </YoutubeLinkStyled>
              <YoutubeFilledStyled />
            </Space>
          </Row>
        </DivTitleStyled>
        <DivMapStyled>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.9979905895816!2d107.61917183979874!3d-6.9219730651794675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea37a8e7d716e9f1!2sChurch%20In%20Bandung!5e0!3m2!1sen!2sid!4v1660435333180!5m2!1sen!2sid"></iframe>
        </DivMapStyled>
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

export default ThirdPage;
