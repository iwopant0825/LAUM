import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrushSymbol, CanvasSymbol, TeamSymbol, FloatingElement, GradientOrb, Card3D } from "../components/Symbols";

export default function Introduce() {
  const text =
    "만화&일러스트 동아리인 미르MIR는 합병을 진행하는 타 동아리들과 함께 콘텐츠 디자인과의 새로운 시작에 발맞추기 위해 리브랜딩을 하여 라움LAUM이란 이름으로 새롭게 탄생하였습니다.";

  const textArray = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const superTextRef = useRef(null);
  const isSuperTextInView = useInView(superTextRef, { once: true });
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      {/* 배경 장식 요소들 */}
      <FloatingElement
        style={{ top: '15%', right: '5%' }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <BrushSymbol size={80} color="rgba(63, 108, 81, 0.08)" />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: '10%', left: '3%' }}
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <CanvasSymbol size={70} color="rgba(133, 200, 160, 0.1)" />
      </FloatingElement>

      <GradientOrb 
        size="400px"
        style={{ top: '20%', left: '-20%' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <ContentWrapper>
        <MainContent>
          <IllustrationSection>
            <FujanWrapper
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
            >
              <FujanImg src="/fujan2.svg" />
              <IllustrationOverlay>
                <OverlayText>LAUM Mascot</OverlayText>
              </IllustrationOverlay>
            </FujanWrapper>
          </IllustrationSection>

          <TextSection>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              동아리 소개
            </SectionTitle>

            <IntroduceText ref={ref}>
              {textArray.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.01 }}
                >
                  {char}
                </motion.span>
              ))}
            </IntroduceText>

            <SuperText
              ref={superTextRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isSuperTextInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <QuoteSymbol>"</QuoteSymbol>
              예술을 배우며 나의 한계를 뛰어넘어라.
              <QuoteSymbol>"</QuoteSymbol>
            </SuperText>
          </TextSection>
        </MainContent>

        <ValueSection ref={cardRef}>
          <ValueGrid
            variants={cardVariants}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
          >
            <ValueCard variants={itemVariants}>
              <ValueIcon>
                <BrushSymbol size={40} />
              </ValueIcon>
              <ValueContent>
                <ValueTitle>창의성</ValueTitle>
                <ValueDescription>자유로운 상상력과 독창적인 아이디어를 키워나갑니다</ValueDescription>
              </ValueContent>
            </ValueCard>

            <ValueCard variants={itemVariants}>
              <ValueIcon>
                <CanvasSymbol size={40} />
              </ValueIcon>
              <ValueContent>
                <ValueTitle>전문성</ValueTitle>
                <ValueDescription>체계적인 교육과정을 통해 실력을 향상시킵니다</ValueDescription>
              </ValueContent>
            </ValueCard>

            <ValueCard variants={itemVariants}>
              <ValueIcon>
                <TeamSymbol size={40} />
              </ValueIcon>
              <ValueContent>
                <ValueTitle>협력</ValueTitle>
                <ValueDescription>동료들과 함께 성장하며 서로의 꿈을 응원합니다</ValueDescription>
              </ValueContent>
            </ValueCard>
          </ValueGrid>
        </ValueSection>
      </ContentWrapper>
    </Layout>
  );
}

const Layout = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 252, 251, 0.95) 100%);
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 120px 120px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  
  @media (max-width: 1500px) {
    padding: 100px 60px;
  }
  
  @media (max-width: 1200px) {
    padding: 80px 40px;
    gap: 80px;
  }
  
  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 60px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 60px;
    text-align: center;
  }
`;

const IllustrationSection = styled.div`
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1200px) {
    flex: none;
  }
`;

const FujanWrapper = styled(motion.div)`
  position: relative;
  perspective: 1000px;
`;

const FujanImg = styled.img`
  width: 350px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(63, 108, 81, 0.2));
  
  @media (max-width: 768px) {
    width: 280px;
  }
`;

const IllustrationOverlay = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-family: "Pretendard-Medium";
  font-size: 0.9rem;
  box-shadow: var(--shadow-soft);
`;

const OverlayText = styled.span`
  font-weight: 500;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionTitle = styled(motion.h2)`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-size: 2.8rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 2px;
  }
  
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 2.4rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const IntroduceText = styled.p`
  color: var(--text-dark);
  font-family: "Pretendard-Regular";
  font-size: 1.3rem;
  line-height: 1.8;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

const SuperText = styled(motion.div)`
  color: var(--primary-color);
  font-family: "Pretendard-Light";
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px);
  white-space: nowrap;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 24px;
    letter-spacing: 1px;
    transform: scale(0.9);
  }
  
  @media (max-width: 600px) {
    transform: scale(0.8);
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 18px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    transform: scale(0.7);
  }
  
  @media (max-width: 400px) {
    transform: scale(0.65);
    padding: 16px;
  }
  
  @media (max-width: 350px) {
    transform: scale(0.6);
    padding: 14px;
  }
  
  @media (max-width: 320px) {
    transform: scale(0.55);
    padding: 12px;
  }
`;

const QuoteSymbol = styled.span`
  font-size: 2.5rem;
  color: var(--accent-color);
  font-weight: bold;
  
  &:first-child {
    margin-right: 10px;
  }
  
  &:last-child {
    margin-left: 10px;
  }
`;

const ValueSection = styled.div`
  width: 100%;
`;

const ValueGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ValueCard = styled(Card3D)`
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(63, 108, 81, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(63, 108, 81, 0.3);
  }
  
  svg {
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ValueTitle = styled.h3`
  color: var(--text-dark);
  font-family: "Pretendard-SemiBold";
  font-size: 1.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ValueDescription = styled.p`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
