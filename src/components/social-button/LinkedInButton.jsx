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

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/le-tuan-anh-pham-646ab8398/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="linkedin-link"
    >
      <Btn>
        <SvgContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="1.35em"
            height="1.35em"
          >
            <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.348V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.556V9h3.563v11.452z" />
          </svg>
        </SvgContainer>

        <BG />
      </Btn>
    </a>
  );
}
