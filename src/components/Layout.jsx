import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const MainContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent role="main">{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;
