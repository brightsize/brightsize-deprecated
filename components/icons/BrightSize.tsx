import React, { FunctionComponent } from "react";

const BrightSize: FunctionComponent = () => {
  return (
    <svg
      width="200"
      height="200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41.5" cy="127.5" r="17.5" fill="#FFCC49" />
      <path d="m137 72 47.631 82.5H89.369L137 72Z" fill="#437852" />
      <path
        d="m131.763 32.631-47.632 82.5-47.631-82.5h95.263Z"
        fill="#95439C"
      />
      <path
        d="M24 172h160"
        stroke="url(#a)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="174.5"
          x2="200"
          y2="174.5"
          gradientUnits="userSpaceOnUse"
          to="right"
        >
          <stop stopColor="#437852" />
          <stop offset=".69" stopColor="#95439C" />
          <stop offset=".99" stopColor="#95439C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrightSize;
