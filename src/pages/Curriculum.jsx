import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VectorSvg from "../Svgs/VectorSvg";
import { 
  GradientOrb
} from "../components/Symbols";

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
      <GradientOrb
        top="20%"
        left="80%"
        color="rgba(63, 108, 81, 0.1)"
        size="300px"
        delay={1}
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
                  <img src="/stylus_pen.svg" alt="일러스트 기초" width="48" height="48" />
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
                  <img src="/stylus_pencil.svg" alt="캐릭터 디자인 시트 제작" width="48" height="48" />
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
                  캐릭터 디자인 시트 제작
                  <Semester>1학기 최종 프로젝트</Semester>
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView2 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={1.5}
                >
                  수업을 통해 배운 내용들을 통해 1학기 최종 프로젝트인 캐릭터 디자인 시트를 제작합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>

            <CurriculumCard ref={ref3}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_fountain_pen.svg" alt="만화 이론과 실습" width="48" height="48" />
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
                  만화 이론과 실습
                  <Semester>2학기</Semester>
                </CTitleText>
                <CContext
                  as={motion.p}
                  initial="hidden"
                  animate={isInView3 ? "visible" : "hidden"}
                  variants={contextVariants}
                  custom={2.5}
                >
                  만화의 기본적인 요소인 컷 분할과 효과, 연출, 스토리를 배울 수 있도록 수업을 진행합니다.
                </CContext>
              </CardContent>
            </CurriculumCard>

            <CurriculumCard ref={ref4}>
              <CardHeader>
                <IconWrapper>
                  <img src="/stylus_brush.svg" alt="창작 단편만화 제작" width="48" height="48" />
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
                  <Semester>2학기 최종 프로젝트</Semester>
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

          {/* VectorImg는 기존 그대로 유지 */}
          <VectorImg>
            <VectorSvg />
          </VectorImg>
        </MainContent>
      </ContentWrapper>
    </Layout>
  );
}

// 스타일드 컴포넌트들
const Layout = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, var(--background-color) 0%, var(--background-light) 100%);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  max-width: 1600px;
  margin: 0 auto;
  gap: 80px;
  
  @media (max-width: 1500px) {
    padding: 100px 60px;
  }
  
  @media (max-width: 1200px) {
    padding: 80px 40px;
    gap: 60px;
  }
  
  @media (max-width: 768px) {
    padding: 60px 24px;
    gap: 50px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled(motion.h1)`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-size: 3.5rem;
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
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }
  
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  color: var(--text-light);
  font-family: "Pretendard-Medium";
  font-size: 1.3rem;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 60px;
  align-items: flex-start;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const CurriculumCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.15),
      0 12px 24px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    padding: 32px 24px;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(8px);
    padding: 24px 20px;
    border-radius: 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 480px) {
    gap: 16px;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: rgba(63, 108, 81, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(63, 108, 81, 0.15);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
  
  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

const CardNumber = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  opacity: 0.7;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CTitleText = styled(motion.h3)`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Semester = styled.span`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-family: "Pretendard-Medium";
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
`;

const CContext = styled(motion.p)`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.8;
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

// VectorImg는 기존 그대로 유지
const VectorImg = styled.div`
  height: 500px;
  flex-shrink: 0;
  
  @media (max-width: 1200px) {
    position: absolute;
    opacity: 0.3;
    z-index: -1;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    position: absolute;
    opacity: 0.35;
    z-index: -1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }
`;
