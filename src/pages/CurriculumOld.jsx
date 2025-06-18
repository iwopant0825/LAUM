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

const BookIcon = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill={color}/>
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
        </CBOX>
        <CBOX ref={ref4}>
          <CIMG src="/stylus_fountain_pen.svg" />
          <CTextBox>
            <CTitleText
              as={motion.span}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={3}
            >
              창작 단편만화 제작
            </CTitleText>
            <CContext
              as={motion.span}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={3.5}
            >
              수업을 진행하며 배운 이론들을 적용시켜 최종적으로 창작 단편만화를
              제작합니다.
            </CContext>
          </CTextBox>
        </CBOX>
      </Content>
      <VectorImg>
        <VectorSvg />
      </VectorImg>
    </Layout>
  );
}

const VectorImg = styled.div`
  height: 1200px;
  @media (max-width: 1200px) {
    position: absolute;
    opacity: 0.3;
  }
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 120px 300px;
  background-color: #ffffff;
  justify-content: space-between;
  @media (max-width: 2000px) {
    padding: 120px 140px;
  }
  @media (max-width: 1200px) {
    align-items: center;
    padding: 120px 0px;
    justify-content: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 175px;
  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
`;
const ContentM1 = styled.div`
  display: flex;
  gap: 110px;
`;
const ContentM2 = styled.div`
  display: flex;
  gap: 110px;
`;
const CBOX = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 55%;
  gap: 51px;
  @media (max-width: 1200px) {
    width: 75%;
  }
`;
const CIMG = styled.img`
  width: 80px;
`;
const CTextBox = styled.div`
  display: flex;
  gap: 26px;
  flex-direction: column;
`;
const CTextmini = styled.span`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;
const CTitleText = styled(motion.span)`
  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  font-style: normal;
  line-height: normal;
`;
const CContext = styled(motion.span)`
  color: #000;
  text-align: center;
  font-family: "Pretendard-Medium";
  font-size: 1.3rem;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
`;

const TitleText = styled.p`
  color: #000;
  font-family: "Pretendard-Thin";
  font-size: 23px;
  font-style: normal;
  font-weight: 200;
  line-height: 150%; /* 50.11px */
  letter-spacing: 4.009px;
`;
