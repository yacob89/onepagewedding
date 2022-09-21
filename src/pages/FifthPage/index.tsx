import { FC } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { images, CustomImage } from "./images";
import Image from "antd/lib/image";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const { Content } = Layout;

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const LayoutStyled = styled(Layout)`
  display: flex;
  height: 100%;
  background-image: url("https://yacob-assets.s3.us-east-2.amazonaws.com/bg.jpg");
`;

const ContentStyled = styled.div`
  /* ----------- Non-Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    flex: 1 0 auto;
  }

  /* ----------- Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    flex: 1 0 auto;
  }
  @media only screen and (max-width: 992px) {
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

const RowStyled = styled(Row)`
  margin-top: 20px;
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

const FifthPage: FC<TypeProps> = ({ title }) => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <LayoutStyled>
      <ContentStyled>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
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

export default FifthPage;
