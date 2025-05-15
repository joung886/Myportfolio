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
  ["WhatsOn", "전시 슬라이더 및 3D 회전 효과를 활용한 갤러리 메인 구성"],
  ["HighlightExhibition", "기획전을 소개하는 유저용 배너 섹션"],
  ["ThemeGallery", "테마 기반의 이미지 갤러리와 스크롤 기반 인터랙션"],
  ["ServiceMenu", "고객지원, 문의, 위치 등을 빠르게 이동하는 카드 메뉴"],
  ["Login", "JWT 기반 로그인, 자동 로그인, 유효성 검사 포함"],
  ["Join", "회원가입, 아이디/이메일 중복 체크 및 약관 동의 기능"],
  ["FindId", "이메일을 통해 사용자 아이디를 찾는 기능"],
  ["FindPassword", "이메일 인증코드를 통한 비밀번호 재설정 기능"],
  ["Menu", "전역 오버레이 메뉴, 섹션별 라우팅 및 카테고리 구성"],
  ["DrawingCanvas", "브러시/펜 툴, 확대/이동, 저장/임시 저장이 가능한 드로잉"],
  ["Cart & Purchase", "장바구니에 담기, 수량 조절, 결제 및 완료 페이지 처리"],
  ["실시간 채팅", "WebSocket을 활용한 유저 ↔ 아티스트 실시간 대화 기능"],
  ["MyPage", "예약 내역, 구매 내역, 드로잉 내역 관리 + 사용자 정보 수정"],
  ["Support", "공지사항, 이용안내, 위치, 문의 등록 등 고객지원 섹션"],
];

const backendFeatures = [
  ["로그인/회원가입", "JWT 발급 및 인증 처리, MySQL 기반 회원 저장"],
  ["아이디/비밀번호 찾기", "이메일 기반 인증코드 전송 및 검증 로직"],
  ["MyPage", "예약/구매/드로잉 내역 API 및 사용자 정보 수정 처리"],
  ["공지사항", "관리자 권한 검증 및 CRUD API 제공"],
  ["문의", "비회원 포함한 사용자 문의 DB 저장 및 분기 처리"],
];

const projects = [
  {
    img: img1,
    title: "갤러리 메인",
    desc: "카드형 레이아웃과 전시 슬라이더를 통해 작품을 소개합니다.",
    tags: ["React", "Styled-Components"],
  },
  {
    img: img2,
    title: "로그인 페이지",
    desc: "JWT 기반 로그인 및 자동 로그인 UX 구현.",
    tags: ["React", "JWT", "Spring Boot"],
  },
  {
    img: img3,
    title: "아이디 찾기",
    desc: "이메일 기반 사용자 ID 검색 기능.",
    tags: ["React", "Styled-Components"],
  },
  {
    img: img4,
    title: "비밀번호 찾기",
    desc: "이메일 인증 후 비밀번호 재설정 기능.",
    tags: ["React", "JWT"],
  },
  {
    img: img5,
    title: "회원가입",
    desc: "중복 체크, 약관 동의, 정보 저장까지 포함한 가입 기능.",
    tags: ["React", "MySQL", "JWT"],
  },
  {
    img: img6,
    title: "실시간 채팅",
    desc: "WebSocket 기반 유저 ↔ 아티스트 대화 및 채팅 저장 기능.",
    tags: ["WebSocket", "Spring Boot"],
  },
  {
    img: img7,
    title: "드로잉 기능",
    desc: "Canvas API 기반 그림 그리기 + 저장 기능.",
    tags: ["React", "Canvas", "WebSocket"],
  },
  {
    img: img8,
    title: "공지사항",
    desc: "관리자 전용 CRUD 기능이 포함된 공지 게시판.",
    tags: ["Spring Boot", "JWT"],
  },
  {
    img: img9,
    title: "오시는 길",
    desc: "Google Maps 연동 위치 정보 안내 페이지.",
    tags: ["Google Maps", "Responsive UI"],
  },
  {
    img: img10,
    title: "문의하기",
    desc: "입력 유효성 검사 포함 사용자 문의 제출 기능.",
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
