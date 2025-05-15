import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRegUser, FaLaptopCode } from "react-icons/fa";

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #fff;
`;

const Card = styled(motion.div)`
  background: linear-gradient(to right, #1a1a1a, #1e1e1e);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 25px rgba(0, 191, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 191, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  border-bottom: 4px solid #00bfff;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.85;
  margin-bottom: 1rem;
  color: #e0e0e0;
`;

const Highlight = styled.span`
  color: #00bfff;
  font-weight: 600;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;

  svg {
    font-size: 1.4rem;
    color: #00bfff;
  }

  strong {
    color: #fff;
    margin-right: 4px;
  }
`;

const About = () => {
  const info = [
    { icon: FaRegUser, label: "이름", text: "정강철" },
    { icon: FaLaptopCode, label: "직업", text: "Web Developer / Full-Stack" },
  ];

  const paragraphs = [
    <>
      <Highlight>프로젝트명:</Highlight> Atelier – 예술 커뮤니티 플랫폼
    </>,
    <>
      <Highlight>기간:</Highlight> 2025.03 ~ 2025.05 (2개월)
    </>,
    <>
      <Highlight>Atelier</Highlight>는 예술가와 사용자들이 자유롭게 소통하며
      감상・창작・판매가 가능한 <strong>통합 예술 커뮤니티</strong>를 지향하는
      팀 프로젝트입니다.
    </>,
    <>
      저는 본 프로젝트에서 <Highlight>프론트엔드 전반을 담당</Highlight>하여,
      <Highlight>
        UI/UX 설계부터 실제 구현까지 클라이언트 사이드 기능을 개발
      </Highlight>
      했습니다.
    </>,
    <>
      특히, <Highlight>드로잉 캔버스</Highlight>,{" "}
      <Highlight>실시간 채팅(WebSocket)</Highlight>,{" "}
      <Highlight>로그인/회원가입</Highlight> 등 복잡한 상태 관리와 비동기처리가
      필요한 컴포넌트를 직접 설계하고 구현했습니다.
    </>,
    <>
      <Highlight>기획→디자인→개발</Highlight>까지 사용자 경험을 중심으로 반복
      개선하였고, 모든 페이지는 반응형 UI와 UX 패턴을 고려하여 구현했습니다.
    </>,
    <>
      결과적으로 사용자 친화적이며 기능적으로 안정적인{" "}
      <Highlight>SPA 기반의 프론트엔드 아키텍처</Highlight>를 완성해냈습니다.
    </>,
  ];

  return (
    <Section id="about">
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Title>About Me</Title>

        <InfoRow>
          {info.map(({ icon: Icon, label, text }) => (
            <InfoItem key={label}>
              <Icon />
              <strong>{label}:</strong> {text}
            </InfoItem>
          ))}
        </InfoRow>

        {paragraphs.map((p, idx) => (
          <Paragraph key={idx}>{p}</Paragraph>
        ))}
      </Card>
    </Section>
  );
};

export default About;
