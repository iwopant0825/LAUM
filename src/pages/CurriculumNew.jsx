import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VectorSvg from "../Svgs/VectorSvg";
import { FloatingElement, GradientOrb } from "../components/Symbols";

// Curriculum Icons
const PencilIcon = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-1.42 1.42 3.75 3.75 1.42-1.42z" fill={color}/>
  </svg>
);

const BrushIcon = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zM20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" fill={color}/>
  </svg>
);

export default function Curriculum() {
  const contextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <Layout>
      {/* 배경 장식 요소들 */}
      <FloatingElement
        style={{ top: '15%', left: '5%' }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <PencilIcon size={60} color="rgba(63, 108, 81, 0.1)" />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: '20%', right: '8%' }}
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <BrushIcon size={50} color="rgba(133, 200, 160, 0.15)" />
      </FloatingElement>

      <GradientOrb 
        size="250px"
        style={{ top: '10%', right: '-10%' }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <ContentWrapper>
        <HeaderSection>
          <SectionTitle
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            커리큘럼
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            체계적인 교육과정을 통해 일러스트와 만화 창작 능력을 기릅니다
          </SectionDescription>
        </HeaderSection>

        <MainContent>
          <Content
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <CurriculumCard ref={ref1}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_pencil.svg" alt="pencil" />
                </IconWrapper>
                <CardNumber>01</CardNumber>
              </CardHeader>
              <CardContent>
                <CTitleText
                  as={motion.h3}
                  initial="hidden"
                  animate={isInView1 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={0}
                >
                  일러스트 기초
                  <Semester>1학기</Semester>
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView1 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={0.5}
                >
                  일러스트를 중심으로 기본적인 드로잉 방법과 연출법, 색감이론 및 캐릭터 디자인에 관한 수업을 진행합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>

            <CurriculumCard ref={ref2}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_pen.svg" alt="pen" />
                </IconWrapper>
                <CardNumber>02</CardNumber>
              </CardHeader>
              <CardContent>
                <CTitleText
                  as={motion.h3}
                  initial="hidden"
                  animate={isInView2 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={1}
                >
                  만화 이론과 실습
                  <Semester>2학기</Semester>
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView2 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={1.5}
                >
                  만화의 기본적인 요소인 컷 분활과 효과, 연출, 스토리를 배울 수 있도록 수업을 진행합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>

            <CurriculumCard ref={ref3}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_brush.svg" alt="brush" />
                </IconWrapper>
                <CardNumber>03</CardNumber>
              </CardHeader>
              <CardContent>
                <CTitleText
                  as={motion.h3}
                  initial="hidden"
                  animate={isInView3 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={2}
                >
                  캐릭터 일러스트 제작
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView3 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={2.5}
                >
                  수업을 통해 배운 내용들을 통해 1학기 최종 프로젝트인 캐릭터 디자인 시트를 제작합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>

            <CurriculumCard ref={ref4}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_fountain_pen.svg" alt="fountain pen" />
                </IconWrapper>
                <CardNumber>04</CardNumber>
              </CardHeader>
              <CardContent>
                <CTitleText
                  as={motion.h3}
                  initial="hidden"
                  animate={isInView4 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={3}
                >
                  창작 단편만화 제작
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView4 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={3.5}
                >
                  수업을 진행하며 배운 이론들을 적용시켜 최종적으로 창작 단편만화를 제작합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>
          </Content>

          <VectorImg>
            <VectorSvg />
          </VectorImg>
        </MainContent>
      </ContentWrapper>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 252, 251, 0.95) 100%);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 120px 120px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (max-width: 1500px) {
    padding: 100px 60px;
  }
  
  @media (max-width: 1200px) {
    padding: 80px 40px;
    gap: 60px;
  }
  
  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 50px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled(motion.h1)`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-size: 3rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.6;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  
  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 60px;
  flex: 1;
  
  @media (max-width: 1200px) {
    align-items: center;
    gap: 50px;
  }
`;

const CurriculumCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  padding: 35px;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
    gap: 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-width: 100px;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-soft);
  
  img {
    width: 35px;
    height: 35px;
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const CardNumber = styled.div`
  background: var(--accent-color);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Bold";
  font-size: 1rem;
  font-weight: 700;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CTitleText = styled(motion.h3)`
  color: var(--text-dark);
  font-family: "Pretendard-SemiBold";
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Semester = styled.span`
  background: rgba(63, 108, 81, 0.1);
  color: var(--primary-color);
  font-family: "Pretendard-Medium";
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 15px;
  border-radius: 20px;
  white-space: nowrap;
`;

const CContext = styled(motion.p)`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.1rem;
  line-height: 1.7;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// VectorImg는 기존 그대로 유지
const VectorImg = styled.div`
  height: 1200px;
  flex-shrink: 0;
  
  @media (max-width: 1200px) {
    position: absolute;
    opacity: 0.3;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    height: 800px;
  }
`;
