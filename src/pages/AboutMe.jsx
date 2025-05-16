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
          것을 시도하는 것을 좋아했습니다.
        </Paragraph>
        <Paragraph>
          CAD 작업을 통해 문제를 분석하고 구조화하는 경험은 개발자로서의 논리적
          사고 기반이 되었고, 이후 웹 개발로 전향하여{" "}
          <Highlight>기획부터 구현까지의 전 과정</Highlight>을 직접 경험하게
          되었습니다.
        </Paragraph>
      </Block>

      <Block {...motionProps}>
        <SubTitle>🧪 프로젝트 경험과 문제 해결</SubTitle>
        <Paragraph>
          <Highlight>Atelier 프로젝트</Highlight>에서 관리자 공지사항 CRUD,
          Google 지도 API 연동, JWT 인증 기반 로그인 처리, 드로잉 캔버스 기능을
          담당했습니다.
        </Paragraph>
        <Paragraph>
          Jenkins 환경 배포 시 <Highlight>403/404/500 오류</Highlight>가
          발생했지만, 로컬에서는 재현되지 않아 어려움을 겪었습니다. Nginx 정적
          자원 처리, Spring Security 권한 설정, 배포 경로 재확인을 통해{" "}
          <Highlight>API 보호 설정 및 라우팅 문제</Highlight>를 해결했습니다.
        </Paragraph>
        <Paragraph>
          <Highlight>JWT 인증 구조</Highlight>는 공식 문서와 커뮤니티, GPT를
          통해 학습했고, 액세스/리프레시 토큰 흐름과 인터셉터 처리 구조를
          설계하여 <Highlight>실제 API 인증 시스템</Highlight>으로 구축했습니다.
        </Paragraph>
        <Paragraph>
          이 시스템 도입 이후{" "}
          <Highlight>인증 관련 이슈가 70% 이상 감소</Highlight>했으며, 사용자
          경험과 보안 신뢰도가 눈에 띄게 향상되었습니다.
        </Paragraph>
      </Block>

      <Block {...motionProps}>
        <SubTitle>🚀 개발자로서의 목표</SubTitle>
        <Paragraph>
          <strong>단기 목표:</strong> React 생태계 심화 학습과 RESTful API 활용
          능력을 고도화하여 프론트엔드의 깊이 있는 구조 설계가 가능한 개발자가
          되는 것입니다.
        </Paragraph>
        <Paragraph>
          <strong>장기 목표:</strong> 팀원들과 원활히 협업하며{" "}
          <Highlight>사용자 중심의 서비스</Highlight>를 설계하고, 기술과
          커뮤니케이션 양쪽에서 균형 잡힌 리더형 개발자로 성장하고자 합니다.
        </Paragraph>
        <Paragraph>
          <Highlight>기획부터 설계, 구현 </Highlight> 하나의 사이클을
          완주하면서, 기술보다 더 중요한 건 "사용자에게 어떤 가치를 제공할 수
          있는가"라는 점을 체감했습니다. 이를 실현하기 위해 계속해서 배우고
          도전하겠습니다.
        </Paragraph>
      </Block>
    </Wrapper>
  );
};

export default AboutMe;
