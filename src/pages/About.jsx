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
      <Highlight>기간:</Highlight> 2025.03 ~ 2025.05 (2개월) / 팀 프로젝트 (4인)
    </>,
    <>
      <Highlight>Atelier</Highlight>는 예술가와 사용자가 자유롭게{" "}
      <strong>작품 감상・창작・판매・소통</strong>할 수 있는 예술 커뮤니티
      플랫폼입니다.
    </>,
    <>
      저는 본 프로젝트에서{" "}
      <Highlight>프론트엔드 전체 구조 설계 및 개발</Highlight>을 담당했습니다.
      요구사항 정의, 와이어프레임, UI/UX 설계부터 상태관리 구조 설계 및 페이지
      컴포넌트 개발까지 전반을 주도했습니다.
    </>,
    <>
      <strong>주요 구현 기능:</strong>
      <br />• <Highlight>드로잉 캔버스</Highlight>: Canvas API로 자유 그리기,
      저장, 확대/이동, 도구 변경, 임시 저장 기능 구현
      <br />• <Highlight>실시간 채팅</Highlight>: WebSocket 기반 유저-아티스트
      간 메시지 송수신 + 실시간 알림
      <br />• <Highlight>JWT 인증 시스템</Highlight>: 로그인/회원가입/자동
      로그인, 인증 기반 보호 라우팅 적용
      <br />• <Highlight>반응형 인터페이스</Highlight>: 모바일~PC 대응, 폼
      유효성 검증, 사용자 피드백 중심 UX 강화
    </>,
    <>
      <strong>기술적 도전 & 해결:</strong>
      <br />- <Highlight>Canvas 렌더링 성능</Highlight>: 고해상도 드로잉 시
      프레임 저하를 context 분리 + requestAnimationFrame 최적화로 해결
      <br />- <Highlight>WebSocket 끊김 대응</Highlight>: useRef를 통한 소켓
      유지 및 자동 재연결 전략 도입
      <br />- <Highlight>구조 확장성 고려</Highlight>: 페이지/컴포넌트/모듈 분리
      설계로 유지보수성과 협업 효율 향상
    </>,
    <>
      <strong>사용 기술:</strong>
      <br />• <Highlight>Frontend:</Highlight> React, Styled-Components,
      React-Router, Canvas API, WebSocket
      <br />• <Highlight>Backend:</Highlight> Spring Boot, MySQL
      <br />• <Highlight>CI/CD:</Highlight> GitHub → Jenkins 연동으로 Spring
      Boot 자동 빌드/배포
    </>,
    <>
      <Highlight>성과:</Highlight>
      <br />
      - GitHub Star 30+, 데모 200회 이상 공유 → 실사용자 피드백 수렴
      <br />
      - 코드 리팩터링 3회 반복 주도 → 유지보수성 + 컴포넌트 재사용성 향상
      <br />- JWT 인증 + WebSocket + Canvas API 등 실전 기능을 직접 구현하여{" "}
      <strong>SPA 기반 사용자 인터페이스 완성도</strong>를 크게 향상시켰습니다.
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
