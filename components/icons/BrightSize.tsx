import React, { FunctionComponent } from "react";

const BrightSize: FunctionComponent = () => {
  return (
    <svg
      width="200"
      height="200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40.5" cy="123.5" r="17.5" fill="#FFCC49" />
      <path d="m136 68 47.631 82.5H88.369L136 68Z" fill="#437852" />
      <path
        d="m130.763 28.631-47.632 82.5-47.631-82.5h95.263Z"
        fill="#95439C"
      />
      <path
        d="M23 168h160"
        stroke="url(#a)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="a"
          x1="50.5"
          y1="158.5"
          x2="183"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#95439C" />
          <stop offset="1" stopColor="#437852" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrightSize;
