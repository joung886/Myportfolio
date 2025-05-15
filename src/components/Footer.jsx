import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #121212;
  color: #aaa;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  border-top: 1px solid #2e2e2e;

  span {
    color: #00bfff;
    font-weight: 600;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      © {year} <span>정강철</span>. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
