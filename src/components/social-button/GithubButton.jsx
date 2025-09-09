import React from "react";
import styled from "styled-components";

/* Gradient background cho GitHub (đen → xám) */
const BG = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    #333 0%,
    #444 25%,
    #555 50%,
    #666 75%,
    #777 100%
  );
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

/* Component GitHub Button */
export default function GithubButton() {
  return (
    <a
      href="https://github.com/tale05"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="github-link"
    >
      <Btn aria-label="github-button">
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
              d="M12 0C5.37 0 0 5.373 0 
          12c0 5.303 3.438 9.8 8.205 
          11.387.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
          1.205.085 1.84 1.237 1.84 1.237 
          1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.93 
          0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
          0 0 1.005-.322 3.3 1.23a11.52 
          11.52 0 013.003-.404c1.02.005 2.045.138 
          3.003.404 2.28-1.552 3.285-1.23 
          3.285-1.23.645 1.653.24 2.873.12 
          3.176.765.84 1.23 1.91 
          1.23 3.22 0 4.61-2.805 
          5.625-5.475 5.92.43.37.81 1.096.81 
          2.22 0 1.606-.015 2.896-.015 
          3.286 0 .315.21.69.825.57C20.565 
          21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </SvgContainer>
        <BG />
      </Btn>
    </a>
  );
}
