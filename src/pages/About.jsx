import React from "react";
import styled from "styled-components";
import {
  FaRegUser,
  FaBirthdayCake,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #fff;
`;

const Card = styled.div`
  background: linear-gradient(to right, #1a1a1a, #1e1e1e);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 25px rgba(0, 191, 255, 0.1);
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  border-bottom: 4px solid #00bfff;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  gap: 0.75rem;

  svg {
    color: #00bfff;
  }

  span {
    color: #ddd;
  }

  a {
    color: #00bfff;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #66e0ff;
    }
  }
`;

const Role = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #ccc;
  font-weight: 500;
`;

const OneLiner = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 2rem;
  color: #ddd;
`;

const About = () => {
  return (
    <Section id="about">
      <Card>
        <Title>About Me</Title>

        <Role>🧑‍💻 풀스택 웹 개발자를 꿈꾸는 성장형 개발자</Role>

        <InfoRow>
          <InfoItem>
            <FaRegUser /> <strong>이름:</strong> <span>정강철</span>
          </InfoItem>
          <InfoItem>
            <FaBirthdayCake /> <strong>생년월일:</strong>{" "}
            <span>1994.06.07</span>
          </InfoItem>
          <InfoItem>
            <FaPhoneAlt /> <strong>전화번호:</strong> <span>010-3828-7224</span>
          </InfoItem>
          <InfoItem>
            <FaEnvelope /> <strong>이메일:</strong>{" "}
            <span>rkdcjf311@naver.com</span>
          </InfoItem>
          <InfoItem>
            <FaGithub /> <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/joung886"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/joung886
            </a>
          </InfoItem>
          <InfoItem>
            <FaLaptopCode /> <strong>수료 과정:</strong>{" "}
            <span>메타버스 에듀테크 개발자 트랙 풀스텍 웹개발 (2024.10 ~ 2025.05)</span>
          </InfoItem>
        </InfoRow>

        <OneLiner>배움을 실천으로 연결하는 도전가 정강철입니다.</OneLiner>
      </Card>
    </Section>
  );
};

export default About;
