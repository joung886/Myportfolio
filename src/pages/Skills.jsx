import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  border-bottom: 4px solid #00bfff;
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryGroup = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00bfff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const IconCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 1rem 0.8rem;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px rgba(0, 191, 255, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: scale(1.08);
    background-color: #222;
  }

  img {
    width: 36px;
    height: 36px;
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 0.85rem;
    font-weight: 600;
    color: #e0e0e0;
  }
`;

const Skills = () => {
  const skills = {
    "Front-End": [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        desc: "컴포넌트 기반 UI 라이브러리",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        desc: "동적 웹 동작을 구현하는 언어",
      },
      {
        name: "Styled-Components",
        icon: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
        desc: "CSS-in-JS 스타일링 툴",
      },
    ],
    "Back-End": [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        desc: "Java 기반 웹 백엔드 프레임워크",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        desc: "객체지향 프로그래밍 언어",
      },
    ],
    Database: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        desc: "관계형 데이터베이스 관리 시스템",
      },
    ],
    "CI/CD": [
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        desc: "자동 빌드/배포 도구",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        desc: "리버스 프록시 & 웹서버",
      },
    ],
    "Dev Tools": [
      {
        name: "Swagger",
        icon: "https://avatars.githubusercontent.com/u/7658037?s=200&v=4",
        desc: "API 문서 자동화 도구",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        desc: "소스코드 버전 관리 플랫폼",
      },
    ],
  };

  return (
    <Section id="skills">
      <Title>Skills</Title>
      {Object.entries(skills).map(([category, items]) => (
        <CategoryGroup key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <Grid>
            {items.map(({ name, icon, desc }) => (
              <IconCard key={name} title={desc}>
                <img
                  src={icon}
                  alt={name}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <span>{name}</span>
              </IconCard>
            ))}
          </Grid>
        </CategoryGroup>
      ))}
    </Section>
  );
};

export default Skills;
