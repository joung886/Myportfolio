import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import ProfileImg from "@/assets/profile.jpg";

const HeroWrapper = styled.section`
  padding: 6rem 2rem 5rem;
  background: #0f2027;
  text-align: center;
  color: #fff;
`;

const Profile = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.2rem;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.3rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 191, 255, 0.2);

  &:hover {
    background-color: #009cdc;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <Profile src={ProfileImg} alt="정강철 프로필 사진" />
      <Name>
        <span>정강철</span> | Full-Stack Developer
      </Name>
      <Title>
        프론트 80% + 백엔드 협업 경험 | 실시간 인터랙션 개발 역량 보유
      </Title>
      <Tagline>
        Canvas 기반 드로잉, JWT 인증, WebSocket 채팅 등 사용자 중심 기능
        설계/구현 경험 보유
      </Tagline>

      <ButtonGroup>
        <CTAButton href="#projects">
          <FaFolderOpen /> 프로젝트 보기
        </CTAButton>
        <CTAButton href="https://github.com/joung886" target="_blank">
          <FaGithub /> GitHub
        </CTAButton>
        <CTAButton href="mailto:rkdcjf311@naver.com">
          <FaEnvelope /> 이메일
        </CTAButton>
      </ButtonGroup>
    </HeroWrapper>
  );
};

export default Hero;
