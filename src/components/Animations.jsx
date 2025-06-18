// 추가적인 애니메이션 컴포넌트들
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// 텍스트 타이핑 애니메이션
export const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }
    }, delay + index * speed);

    return () => clearTimeout(timer);
  }, [index, text, delay, speed]);

  return <span>{displayedText}</span>;
};

// 파티클 효과
const particleFloat = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size || 4}px;
  height: ${props => props.size || 4}px;
  background: ${props => props.color || 'var(--accent-color)'};
  border-radius: 50%;
  animation: ${particleFloat} ${props => props.duration || 15}s linear infinite;
  animation-delay: ${props => props.delay || 0}s;
  left: ${props => props.left || 50}%;
  opacity: 0.7;
`;

export const ParticleEffect = ({ count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 10,
    color: Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--accent-color)'
  }));

  return (
    <ParticleContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          size={particle.size}
          left={particle.left}
          delay={particle.delay}
          duration={particle.duration}
          color={particle.color}
        />
      ))}
    </ParticleContainer>
  );
};

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

// 마우스 커서 효과
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // 마우스 이벤트 리스너
    window.addEventListener('mousemove', updateMousePosition);
    
    // 호버 가능한 요소들에 이벤트 리스너 추가
    const hoverElements = document.querySelectorAll('button, a, [role="button"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <CursorContainer
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
      }}
    >
      <CursorDot />
      <CursorRing $isHovering={isHovering} />
    </CursorContainer>
  );
};

const CursorContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorDot = styled.div`
  width: 6px;
  height: 6px;
  background: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.$isHovering ? 0.8 : 0.3};
  transition: all 0.3s ease;
  background: ${props => props.$isHovering ? 'rgba(63, 108, 81, 0.1)' : 'transparent'};
`;

// 스크롤 기반 텍스트 애니메이션
export const ScrollRevealText = ({ children, ...props }) => {
  const ref = React.useRef(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 로딩 스켈레톤
export const Skeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${keyframes`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
`;

// 성공/에러 토스트 메시지
export const Toast = ({ type = 'success', message, onClose, duration = 3000 }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <ToastContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      $type={type}
    >
      <ToastIcon>
        {type === 'success' ? '✓' : '⚠'}
      </ToastIcon>
      <ToastMessage>{message}</ToastMessage>
      <ToastClose onClick={onClose}>×</ToastClose>
    </ToastContainer>
  );
};

const ToastContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => props.$type === 'success' ? 'var(--primary-color)' : '#e74c3c'};
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow-hover);
  z-index: 10001;
  min-width: 300px;
`;

const ToastIcon = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ToastMessage = styled.div`
  flex: 1;
  font-family: "Pretendard-Medium";
`;

const ToastClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }
`;
