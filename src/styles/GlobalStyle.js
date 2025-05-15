import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212; /* 명시적으로 다크 배경 지정 */
    font-family: 'Pretendard', sans-serif;
    color: #ffffff; /* 밝은 글자색으로 명확히 지정 */
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0 0 0 20px; /* 들여쓰기 추가 */
    list-style-type: disc; /* 점 스타일 표시 */
  }

  li {
    margin-bottom: 8px;
  }
`;

export default GlobalStyle;
