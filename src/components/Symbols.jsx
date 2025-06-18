import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 브러시 심볼
export const BrushSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zM20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"
      fill={color}
    />
  </svg>
);

// 팔레트 심볼
export const PaletteSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99a1.5 1.5 0 0 1 1.5-1.5H16c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"
      fill={color}
    />
    <circle cx="6.5" cy="11.5" r="1.5" fill="white"/>
    <circle cx="9.5" cy="7.5" r="1.5" fill="white"/>
    <circle cx="14.5" cy="7.5" r="1.5" fill="white"/>
    <circle cx="17.5" cy="11.5" r="1.5" fill="white"/>
  </svg>
);

// 펜 심볼
export const PenSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41L18.37 3.29c-.19-.19-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
      fill={color}
    />
  </svg>
);

// 캔버스 심볼
export const CanvasSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke={color} strokeWidth="2"/>
    <rect x="5" y="6" width="14" height="12" fill="var(--background-light)" stroke={color} strokeWidth="1"/>
    <path d="M8 12l2 2 4-4" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

// 책 심볼
export const BookSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"
      fill={color}
    />
  </svg>
);

// 스타 심볼
export const StarSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={color}
    />
  </svg>
);

// 하트 심볼
export const HeartSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      fill={color}
    />
  </svg>
);

// 체크 심볼
export const CheckSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      fill={color}
    />
  </svg>
);

// 창의성 심볼
export const CreativitySymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"
      fill={color}
    />
  </svg>
);

// 협력 심볼
export const TeamSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h2z"
      fill={color}
    />
    <circle cx="12.5" cy="11.5" r="1.5" fill={color}/>
    <path
      d="M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 16v-6H9l-2.54-7.63A1.5 1.5 0 0 0 5.04 7H3.5C2.7 7 2 7.7 2 8.5v6c0 .8.7 1.5 1.5 1.5H5v6h2z"
      fill={color}
    />
  </svg>
);

// 달력 심볼
export const CalendarSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
      fill={color}
    />
  </svg>
);

// 플로팅 장식 요소
export const FloatingElement = styled(motion.div)`
  position: absolute;
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
`;

// 그라데이션 오브
export const GradientOrb = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(63, 108, 81, 0.1) 0%, 
    rgba(133, 200, 160, 0.1) 100%);
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;
`;

// 도형 패턴 요소
export const GeometricPattern = ({ size = 100, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="20" cy="20" r="2" fill={color} opacity="0.3"/>
    <circle cx="50" cy="20" r="2" fill={color} opacity="0.5"/>
    <circle cx="80" cy="20" r="2" fill={color} opacity="0.3"/>
    <circle cx="20" cy="50" r="2" fill={color} opacity="0.5"/>
    <circle cx="50" cy="50" r="2" fill={color} opacity="0.7"/>
    <circle cx="80" cy="50" r="2" fill={color} opacity="0.5"/>
    <circle cx="20" cy="80" r="2" fill={color} opacity="0.3"/>
    <circle cx="50" cy="80" r="2" fill={color} opacity="0.5"/>
    <circle cx="80" cy="80" r="2" fill={color} opacity="0.3"/>
  </svg>
);

// 3D 카드 컨테이너
export const Card3D = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 252, 251, 0.95) 100%);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
`;
