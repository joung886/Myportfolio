import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem 5rem;
  color: #eee;
  line-height: 1.85;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #00bfff;
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 3px solid #00bfff;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const Block = styled(motion.div)`
  margin-bottom: 4rem;
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 191, 255, 0.05);
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: #1abc9c;
  margin-bottom: 1.2rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
`;

const Highlight = styled.span`
  color: #ffd700;
  font-weight: 600;
`;

const AboutMe = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <Wrapper id="aboutme">
      <Title>나의 이야기</Title>

      <Block {...motionProps}>
        <SubTitle>👶 개발자가 된 계기</SubTitle>
        <Paragraph>
          저는 <Highlight>배움의 가치를 실현하는 도전가</Highlight>라는 말이 제
          성향을 잘 표현한다고 생각합니다. 어릴 적부터 호기심이 많았고, 새로운
          것에 도전하는 것을 좋아했습니다. CAD를 통해 문제를 분석하고 구조적으로
          해결하는 과정을 경험하며, 논리적인 사고를 기르게 되었습니다.
        </Paragraph>
        <Paragraph>
          이후 웹 개발을 배우기 시작했고, CAD에서 익힌 논리적 사고는
          개발자로서의 기반이 되었습니다.
        </Paragraph>
      </Block>

      <Block {...motionProps}>
        <SubTitle>🧪 프로젝트 경험과 문제 해결</SubTitle>
        <Paragraph>
          <Highlight>Atelier 프로젝트</Highlight>에서 공지사항 CRUD, 지도 API,
          로그인 구현, 드로잉 기능을 맡았습니다.
        </Paragraph>
        <Paragraph>
          Jenkins 배포 환경에서 발생한 <Highlight>403, 404, 500 오류</Highlight>
          를 로컬에서는 확인할 수 없던 문제로, API 경로, 권한, 응답 코드 등을
          점검하며 해결했습니다.
        </Paragraph>
        <Paragraph>
          <Highlight>JWT 인증 구조</Highlight>를 직접 학습하고, 공식 문서와
          GPT의 도움을 받아 문제를 해결했습니다.
        </Paragraph>
      </Block>

      <Block {...motionProps}>
        <SubTitle>🚀 개발자로서의 목표</SubTitle>
        <Paragraph>
          빠르게 변하는 환경에서 중요한 것은{" "}
          <Highlight>끊임없이 배우는 자세</Highlight>라고 생각합니다.
        </Paragraph>
        <Paragraph>
          저는 주저하지 않고 배우며, 소통을 통해 함께 성장하는 개발자가
          되겠습니다.
        </Paragraph>
        <Paragraph>
          <Highlight>사용자 중심 설계</Highlight>에 가치를 두고,{" "}
          <Highlight>실질적인 가치를 제공</Highlight>하는 개발자로
          성장하겠습니다.
        </Paragraph>
      </Block>
    </Wrapper>
  );
};

export default AboutMe;
