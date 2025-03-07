import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 563px;
  height: 2281px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VectorSvg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const duration = window.innerWidth <= 768 ? 10 : 7;

  return (
    <StyledSvg
      ref={ref}
      viewBox="0 0 563 2281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M218.522 10C245.522 45 389.522 140.5 481.522 144C573.522 147.5 588.522 301 458.022 232.5C327.522 164 105.022 118.5 135.022 232.5C165.022 346.5 548.021 401.5 503.021 483.5C458.022 565.5 0.521439 723 79.5214 534C158.521 345 761.022 561.5 354.022 688.5C239.022 711.833 17.4219 796.4 51.0219 948C57.8551 977.167 61.7215 1043.9 22.5215 1077.5C-6.1083 1102.04 19.5715 1116.97 51.0219 1113.5C73.399 1111.03 67.0552 1114.43 76.0216 1122.5C86.0216 1131.5 53.5216 1137 63.5216 1161.5C71.5216 1181.1 76.4354 1180 76.0216 1182C75.0216 1186.83 76.0216 1199.5 88.0216 1211.5C103.022 1226.5 88.5216 1255 94.0216 1271C99.5215 1287 118.522 1306 148.522 1297.5C178.522 1289 333.022 1223 354.022 1202.5C375.022 1182 327.022 1122.5 384.522 1066.5C390.777 1060.41 452.022 1086.5 472.022 1004C492.022 921.5 477.522 898.5 449.522 910C421.522 921.5 380.022 930.5 384.522 963C389.022 995.5 364.021 1134.5 481.521 1182C695.489 1268.5 -75.5216 1520 164.5 1800C99.3333 1808.5 -16.6 1850.6 41 1951C113 2076.5 203.022 1965 148.522 1951C94.0216 1937 69.0431 1965.5 88.0216 2021C103.204 2065.4 150.659 2080.67 164.5 2071.5C141.159 2108 98.9 2156.1 180.5 2146.5C262.1 2136.9 227.667 2186.17 197 2212C219.667 2204.83 286 2215.5 221.5 2271.5"
        stroke="url(#paint0_linear_71_121)"
        strokeWidth="19"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_71_121"
          x1="331.831"
          y1="9.99998"
          x2="346.533"
          y2="725.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopColor="#3F6C51" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};

export default VectorSvg;
