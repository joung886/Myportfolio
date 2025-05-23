import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";

const Section = styled.section`
  padding: 6rem 2rem 5rem;
  background-color: #181c24;
  color: #ffffff;
  text-align: center;
  border-top: 3px solid #00bfff;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  border-bottom: 3px solid #00bfff;
  display: inline-block;
  padding-bottom: 0.4rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1.15rem;
  color: #ccc;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #333;
  margin: 2.5rem auto;
  width: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const Button = styled.a`
  background-color: #00bfff;
  color: #fff;
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 12px rgba(0, 191, 255, 0.15);

  &:hover {
    background-color: #008ccd;
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 191, 255, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(0, 191, 255, 0.25);
  }
`;

const Contact = () => {
  const contactList = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/joung886",
    },
    {
      icon: <FaEnvelope />,
      label: "이메일",
      href: "mailto:rkdcjf311@naver.com",
    },
  ];
  

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Subtitle>📧 rkdcjf311@naver.com</Subtitle>
      <Subtitle>📱 010-3828-7224</Subtitle>

      <Divider />

      <ButtonGroup>
        {contactList.map((item, idx) => (
          <Button
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon} {item.text}
          </Button>
        ))}
      </ButtonGroup>
    </Section>
  );
};

export default Contact;
