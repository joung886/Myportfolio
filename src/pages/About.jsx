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
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 24px rgba(0, 191, 255, 0.08);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  display: inline-block;
  margin-bottom: 2rem;
  padding-bottom: 0.3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: #ccc;
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Card>
        <Title>Profile</Title>

        <Row>
          <Item>
            <FaRegUser /> <strong>이름:</strong> <span>정강철</span>
          </Item>
          <Item>
            <FaEnvelope /> <strong>이메일:</strong>{" "}
            <a href="mailto:rkdcjf311@naver.com">rkdcjf311@naver.com</a>
          </Item>
          <Item>
            <FaGithub /> <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/joung886"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/joung886
            </a>
          </Item>
          <Item>
            <FaPhoneAlt /> <strong>전화번호:</strong> <span>010-3828-7224</span>
          </Item>
          <Item>
            <FaBirthdayCake /> <strong>생년월일:</strong>{" "}
            <span>1994.06.07</span>
          </Item>
          <Item>
            <FaLaptopCode /> <strong>수료 과정:</strong>{" "}
            <span>메타버스 에듀테크 개발자 트랙 (2024.10 ~ 2025.05)</span>
          </Item>
        </Row>
      </Card>
    </Section>
  );
};

export default About;
