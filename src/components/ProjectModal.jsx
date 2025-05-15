import React, { useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled(motion.div)`
  position: relative;
  background: #1e1e1e;
  border-radius: 16px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 191, 255, 0.4);
    border-radius: 3px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -33px;
  right: -33px;
  z-index: 10;
  background: #2c2c2c;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.3rem;
  padding: 0.4rem 0.6rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00bfff;
`;

const ModalDesc = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  white-space: pre-line;
  color: #e0e0e0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: #007bff;
    color: white;
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    background-color: rgba(0, 191, 255, 0.1);
    border-radius: 6px;
    color: #00bfff;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      background-color: rgba(0, 191, 255, 0.2);
      color: #66e0ff;
    }
  }
`;

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const { img, title, desc, tags, github, demo } = project;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalBox
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseBtn onClick={onClose}>
            <FaTimes />
          </CloseBtn>

          <ModalImage src={img} alt={`${title} 썸네일`} />
          <ModalTitle>🎨 Atelier – {title}</ModalTitle>
          <ModalDesc>{desc}</ModalDesc>

          <Tags>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </Tags>

          {(github || demo) && (
            <LinkRow>
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </LinkRow>
          )}
        </ModalBox>
      </Overlay>
    </AnimatePresence>
  );
};

export default ProjectModal;
