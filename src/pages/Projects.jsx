import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";

import img1 from "@/assets/atelier-thumbnail1.png";
import img2 from "@/assets/atelier-thumbnail2.png";
import img3 from "@/assets/atelier-thumbnail3.png";
import img4 from "@/assets/atelier-thumbnail4.png";
import img5 from "@/assets/atelier-thumbnail5.png";
import img6 from "@/assets/atelier-thumbnail6.png";
import img7 from "@/assets/atelier-thumbnail7.png";
import img8 from "@/assets/atelier-thumbnail8.png";
import img9 from "@/assets/atelier-thumbnail9.png";
import img10 from "@/assets/atelier-thumbnail10.png";

const frontendFeatures = [
  [
    "드로잉 캔버스",
    "Canvas API 기반 자유 그리기, 도구 선택, 저장/임시저장, 확대/이동 기능 구현",
  ],
  [
    "실시간 채팅",
    "WebSocket을 활용한 유저 ↔ 아티스트 간 실시간 메시지 전송 + 실시간 UI 반영",
  ],
  [
    "인증 시스템",
    "JWT 기반 로그인/회원가입/자동 로그인, 보호 라우팅 처리 및 토큰 관리",
  ],
  [
    "마이페이지 통합 UI",
    "회원정보 수정(비밀번호 변경 포함), 굿즈 구매내역 확인 및 환불 처리 모달까지 프론트 전체 구현 및 API 연동",
  ],
  [
    "폼 UX 개선",
    "회원가입, 비밀번호 찾기 등 입력 유효성 검사 및 사용자 피드백 처리",
  ],
  [
    "상품/결제 흐름",
    "작품 장바구니 추가, 수량 조절, 결제 및 완료 처리 UI 구성",
  ],
  [
    "정보 탐색성 강화",
    "메인 슬라이더, 기획전 배너, 갤러리 필터링, 위치/문의 등 접근성 설계",
  ],
];

const backendFeatures = [
  ["JWT 인증 시스템", "Spring Boot 기반 사용자 인증/인가 처리 및 토큰 발급"],
  ["계정 복구 로직", "이메일 인증을 통한 아이디/비밀번호 찾기 기능"],
  [
    "마이페이지 API",
    "예약, 구매, 드로잉 내역 조회 및 사용자 정보 수정 REST API 제공",
  ],
  [
    "공지/문의 관리",
    "관리자 권한 검증 포함 공지사항 및 문의 사항 CRUD API 구현",
  ],
];

const projects = [
  {
    img: img1,
    title: "메인 전시 슬라이드",
    desc: "사용자의 몰입감을 높이기 위해 3D 회전 효과와 깊이감을 구현한 메인 슬라이더입니다. 전시 정보를 공간적으로 배치하여 시각적 주목도를 높였고, 클릭 시 전시 상세로 바로 이동 가능하도록 설계하였습니다.",
    tags: ["React", "Styled-Components", "3D Transform", "IntersectionObserver"]
  },
  {
    img: img7,
    title: "드로잉 기능",
    desc: "Canvas API 기반 그림 그리기, 저장, 임시 저장, 확대/이동, 툴 선택 포함",
    tags: ["React", "Canvas", "WebSocket"],
  },
  {
    img: img6,
    title: "실시간 채팅",
    desc: "WebSocket 기반 유저 ↔ 아티스트 실시간 채팅, 메시지 전송 및 저장",
    tags: ["WebSocket", "Spring Boot"],
  },
  {
    img: img2,
    title: "로그인/회원가입",
    desc: "JWT 인증 기반 로그인, 자동 로그인, 보호 라우팅 및 상태 유지 처리",
    tags: ["React", "JWT", "Spring Boot"],
  },
  {
    img: img5,
    title: "회원가입",
    desc: "중복 체크, 약관 동의, 입력 유효성 검사 포함한 가입 처리",
    tags: ["React", "MySQL", "JWT"],
  },
  {
    img: img10,
    title: "문의하기",
    desc: "입력 폼 검증, 제출, 비회원 처리, 관리자 알림 포함",
    tags: ["React", "Form Validation"],
  },
];

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  border-bottom: 4px solid #00bfff;
  margin-bottom: 2rem;
`;

const DateRange = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 2.5rem;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
  a {
    color: #00bfff;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 500;
    font-size: 1rem;
    transition: 0.2s;
    &:hover {
      color: #66e0ff;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-bottom: 4rem;
`;

const Card = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 6px 16px rgba(0, 191, 255, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 191, 255, 0.15);
  }
`;

const Thumbnail = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #00bfff;
  font-weight: 700;
`;

const FeatureSection = styled.section`
  margin-top: 4rem;
`;

const FeatureList = styled.ul`
  padding-left: 1.2rem;
  line-height: 1.85;

  li {
    margin-bottom: 1rem;
    color: #e0e0e0;
    strong {
      color: #00bfff;
    }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Projects</SectionTitle>
      </motion.div>
      <DateRange>2025.03 ~ 2025.05 (2개월)</DateRange>

      <LinkRow>
        <a
          href="https://github.com/joung886/project_display"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Frontend
        </a>
        <a
          href="https://github.com/joung886/Atelier_Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Backend
        </a>
        <a
          href="https://atelier-gallery.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </LinkRow>

      <Grid>
        {projects.map((proj, idx) => (
          <Card
            key={idx}
            onClick={() => setSelectedProject(proj)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <Thumbnail
              src={proj.img}
              alt={`썸네일 ${idx + 1}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <ProjectTitle>🎨 Atelier – {proj.title}</ProjectTitle>
          </Card>
        ))}
      </Grid>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <FeatureSection>
        <SectionTitle>🖼️ 프론트엔드 구현 기능</SectionTitle>
        <FeatureList>
          {frontendFeatures.map(([title, desc]) => (
            <li key={title}>
              <strong>{title}</strong>
              <br />
              {desc}
            </li>
          ))}
        </FeatureList>
      </FeatureSection>

      <FeatureSection>
        <SectionTitle>🛠️ 백엔드 구현 기능</SectionTitle>
        <FeatureList>
          {backendFeatures.map(([title, desc]) => (
            <li key={title}>
              <strong>{title}</strong>
              <br />
              {desc}
            </li>
          ))}
        </FeatureList>
      </FeatureSection>
    </Container>
  );
};

export default Projects;
