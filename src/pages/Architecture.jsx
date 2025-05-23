import React from "react";
import styled from "styled-components";
import architectureImage from "@/assets/architecture.png";

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #00bfff;
  border-bottom: 3px solid #00bfff;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
`;

const Diagram = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 191, 255, 0.15);
  margin: 2.5rem 0 3rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.85;
  color: #e0e0e0;
  margin-bottom: 1.8rem;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const Architecture = () => {
  return (
    <Section id="architecture">
      <Title>System Architecture</Title>
      <Diagram src={architectureImage} alt="FE-BE 아키텍처 구조 다이어그램" />
      <Paragraph>
        본 프로젝트는 <Highlight>React</Highlight> 기반 프론트엔드와{" "}
        <Highlight>Spring Boot</Highlight> 기반 백엔드로 구성되어 있으며,{" "}
        <Highlight>Nginx</Highlight>를 통한 리버스 프록시,{" "}
        <Highlight>Tomcat</Highlight>, <Highlight>MySQL</Highlight> 연동을
        포함한 <Highlight>분산 아키텍처</Highlight>를 따릅니다.
      </Paragraph>
      <Paragraph>
        상태 관리는 <strong>Zustand</strong>, API 통신은 <strong>Axios</strong>,
        정적 파일은 <strong>Nginx</strong>에서 서빙되며, 실제 운영 환경과
        유사하게 구성하였습니다.
      </Paragraph>
    </Section>
  );
};

export default Architecture;
