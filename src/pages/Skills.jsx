import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
        desc: "SPA 전체 UI 구조 설계 및 상태 기반 렌더링 구현",
      },
      {
        name: "JavaScript (ES6+)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        desc: "ES6 문법 기반 동적 UI 구성 및 이벤트 처리",
      },
      {
        name: "Zustand",
        icon: "https://avatars.githubusercontent.com/u/47602532?s=200&v=4",
        desc: "글로벌 상태 (로그인, 채팅 등) 관리 및 페이지 간 공유",
      },
      {
        name: "Styled-Components",
        icon: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
        desc: "동적 스타일링 및 조건부 디자인 처리",
      },
      {
        name: "React Router",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        desc: "SPA 내 라우팅 및 보호 라우트 구성",
      },
      {
        name: "Axios",
        icon: "https://axios-http.com/assets/logo.svg",
        desc: "JWT 기반 API 요청 처리 및 인터셉터 설정",
      },
      {
        name: "WebSocket",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        desc: "실시간 채팅 및 자동 재연결 구현",
      },
    ],
    "Back-End": [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        desc: "Spring Boot 기반 서버 로직 개발에 사용",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        desc: "RESTful API, 인증/인가 처리 로직 구현",
      },
      {
        name: "Spring Security",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        desc: "JWT 기반 사용자 인증, 접근 제어",
      },
      {
        name: "JPA (Hibernate)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
        desc: "DB 매핑 처리 및 CRUD 자동화",
      },
    ],
    Database: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        desc: "회원/작품/예약 등 주요 데이터 저장 및 관리",
      },
    ],
    "CI/CD & Infra": [
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        desc: "GitHub → Spring Boot 자동 빌드/배포 구성",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        desc: "코드 푸시 시 테스트 및 빌드 자동화",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        desc: "정적 자원 제공 및 리버스 프록시 설정",
      },
      {
        name: "AWS EC2",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        desc: "Jenkins + 서버 배포 환경 운영",
      },
    ],
    "Dev Tools & Docs": [
      {
        name: "Swagger",
        icon: "https://avatars.githubusercontent.com/u/7658037?s=200&v=4",
        desc: "API 명세 자동 생성 및 테스트",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        desc: "버전 관리 및 협업",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        desc: "프론트엔드 개발 환경 구성",
      },
      {
        name: "IntelliJ",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        desc: "Java 백엔드 개발 IDE",
      },
    ],
  };

  return (
    <Section id="skills">
      <Title>Skills</Title>
      {Object.entries(skills).map(([category, items]) => (
        <CategoryGroup key={category}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <CategoryTitle>{category}</CategoryTitle>
            <Grid>
              {items.map(({ name, icon, desc }, idx) => (
                <IconCard
                  as={motion.div}
                  key={name}
                  title={desc}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={icon}
                    alt={name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <span>{name}</span>
                </IconCard>
              ))}
            </Grid>
          </motion.div>
        </CategoryGroup>
      ))}
    </Section>
  );
};

export default Skills;
