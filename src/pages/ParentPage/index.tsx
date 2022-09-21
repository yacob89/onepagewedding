import { FC, useState } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
import FirstPage from "src/pages/FirstPage";
import SecondPage from "src/pages/SecondPage";
import ThirdPage from "src/pages/ThirdPage";
import FourthPage from "src/pages/FourthPage";
import FifthPage from "src/pages/FifthPage";

const LayoutStyled = styled(Layout)`
  height: 100%;
  background-color: red;
`;

interface TypeProps {
  title?: string;
}

const ParentPage: FC<TypeProps> = ({ title }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <ReactPageScroller
      pageOnChange={handlePageChange}
      customPageNumber={currentPage}
    >
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </ReactPageScroller>
  );
};

export default ParentPage;
