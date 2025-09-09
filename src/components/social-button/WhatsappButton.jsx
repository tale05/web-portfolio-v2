import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

/* BG — nền xanh lá WhatsApp */
const BG = styled.span`
  position: absolute;
  inset: 0;
  background: #25d366; /* WhatsApp green */
  border-radius: 9px;
  pointer-events: none;
  transition: transform 0.3s;
  transform: rotate(0deg);
  z-index: 0;
`;

/* SvgContainer */
const SvgContainer = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  transition: background-color 0.3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
  z-index: 1;
`;

/* Btn */
const Btn = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;

  &:hover ${BG} {
    transform: rotate(20deg);
    transform-origin: bottom;
  }

  &:hover ${SvgContainer} {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

/* Component */
export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=84901135877&text=Hellooo%20%F0%9F%91%8B"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="whatsapp-link"
    >
      <Btn aria-label="whatsapp-button">
        <SvgContainer>
          <FaWhatsapp size="1.5em" color="white" />
        </SvgContainer>
        <BG />
      </Btn>
    </a>
  );
}
