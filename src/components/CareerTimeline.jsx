import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5rem 2rem;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  border-bottom: 3px solid #00bfff;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
`;

const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid #00bfff;
`;

const TimelineItem = styled.li`
  position: relative;
  padding: 1rem 1rem 1rem 2.5rem;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 1.3rem;
    left: -0.4rem;
    width: 12px;
    height: 12px;
    background: #00bfff;
    border-radius: 50%;
  }

  strong {
    font-size: 1.15rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
  }

  span {
    font-size: 0.95rem;
    color: #aaa;
    margin-left: 1.8rem;
    display: block;
  }
`;

const CareerTimeline = () => {
  // 최신순 정렬
  const timeline = [
    {
      period: "2024.10 ~ 2025.05",
      content: "메타버스 에듀테크 개발자 트렉 이수",
      icon: <FaBook />,
    },
    {
      period: "2023.06 ~ 2024.02",
      content: "(주)코메스타 – 임베디드 하드웨어 보조",
      icon: <FaBriefcase />,
    },
    {
      period: "2021.12 ~ 2023.01",
      content: "(주)웰코리아 – 배전반 및 생산",
      icon: <FaBriefcase />,
    },
    {
      period: "2010.01 ~ 2013.02",
      content: "대덕전자기계고등학교 졸업",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <Section id="timeline">
      <Title>Career Timeline</Title>
      <TimelineList>
        {timeline.map((item, idx) => (
          <TimelineItem key={idx}>
            <strong>
              {item.icon}
              {item.content}
            </strong>
            <span>{item.period}</span>
          </TimelineItem>
        ))}
      </TimelineList>
    </Section>
  );
};

export default CareerTimeline;
