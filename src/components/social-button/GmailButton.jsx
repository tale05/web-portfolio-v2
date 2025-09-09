import React from "react";
import styled from "styled-components";

/* BG: Gmail đỏ */
const BG = styled.span`
  position: absolute;
  inset: 0;
  background: #ea4335; /* Gmail red */
  z-index: 0;
  border-radius: 9px;
  pointer-events: none;
  transition: transform 0.3s;
  transform: rotate(0deg);
`;

/* SVG container */
const SvgContainer = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(4px);
  letter-spacing: 0.8px;
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

export default function GmailButton() {
  return (
    <a
      href="mailto:tuananhphamle051202@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Btn aria-label="gmail-button">
        <SvgContainer>
          <svg
            fill="white"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M502.3 190.8L327.4 338.3c-18.4 15.4-45.4 15.4-63.8 0L9.7 190.8C3.5 185.8 0 178.3 0 170.3V96c0-26.5 
            21.5-48 48-48h416c26.5 0 48 21.5 48 48v74.3c0 8-3.5 15.5-9.7 20.5zM0 218.2V416c0 26.5 21.5 48 
            48 48h416c26.5 0 48-21.5 48-48V218.2l-164.9 138c-34.3 28.8-84.1 28.8-118.4 
            0L0 218.2z"
            />
          </svg>
        </SvgContainer>
        <BG />
      </Btn>
    </a>
  );
}
