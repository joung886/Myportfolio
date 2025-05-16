import React from "react";
import styled from "styled-components";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import ProfileImg from "@/assets/profile.jpg";

const HeroWrapper = styled.section`
  padding: 6rem 2rem 5rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  text-align: center;
  color: #fff;
`;

const Profile = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.8rem;
  border: 4px solid #00bfff;
  box-shadow: 0 8px 18px rgba(0, 191, 255, 0.15);
`;

const Name = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  span {
    display: block;
    color: #00bfff;
    font-weight: 700;
    font-size: 2.8rem;
  }
`;

const Role = styled.p`
  font-size: 1.15rem;
  color: #ccc;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CTAButton = styled.a`
  background-color: #00bfff;
  color: #fff;
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 191, 255, 0.2);

  &:hover {
    background-color: #009cdc;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 191, 255, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(0, 191, 255, 0.2);
  }
`;

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <Profile src={ProfileImg} alt="정강철 프로필 사진" />
      <Name>
        배움을 결과로 만들어가는 개발자 <span>정강철</span>
      </Name>
      <Role>끊임없이 도전하며 성장하는 풀스택 개발자</Role>
      <ButtonGroup>
        <CTAButton href="#projects">
          <FaFolderOpen />
          프로젝트 보기
        </CTAButton>
        <CTAButton href="#aboutme">
          <FaDownload />
          나의 이야기 보기
        </CTAButton>
      </ButtonGroup>
    </HeroWrapper>
  );
};

export default Hero;
