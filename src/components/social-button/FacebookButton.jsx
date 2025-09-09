import React from "react";
import styled from "styled-components";

/* Background gradient cho Facebook */
const BG = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #1877f2 0%, #3b82f6 50%, #60a5fa 100%);
  border-radius: 9px;
  pointer-events: none;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
  z-index: 0;
`;

/* Container cho icon */
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
  transition: background-color 0.3s ease;
  border: 1px solid rgba(156, 156, 156, 0.466);
  z-index: 1;
`;

/* Button */
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

export default function FacebookButton() {
  return (
    <a
      href="https://www.facebook.com/tuananh.lae512"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="facebook-link"
    >
      <Btn>
        <SvgContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="white"
            height="1.5em"
            width="1.5em"
            aria-hidden="true"
          >
            <path
              d="M24 12.073C24 5.405 18.627 0 12 
              0 5.373 0 0 5.405 0 12.073c0 6.024 
              4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.414c0-3.007 
              1.792-4.668 4.533-4.668 1.312 0 2.686.235 
              2.686.235v2.953h-1.513c-1.49 
              0-1.953.928-1.953 1.88v2.25h3.328l-.532 
              3.49h-2.796v8.437C19.612 23.095 
              24 18.097 24 12.073z"
            />
          </svg>
        </SvgContainer>
        <BG />
      </Btn>
    </a>
  );
}
