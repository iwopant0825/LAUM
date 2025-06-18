import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FloatingElement, GradientOrb, Card3D } from "../components/Symbols";

// Trophy 심볼
const TrophySymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.382l-.724 5.447A1 1 0 0 1 14.9 19H9.1a1 1 0 0 1-.994-.553L7.382 13H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1zm2 0h6v-1H9v1zm11 3v3a1 1 0 0 1-1 1h-1V6h1a1 1 0 0 1 1 1zM4 7v3a1 1 0 0 0 1 1h1V6H5a1 1 0 0 0-1 1zm5-1v7.382l.553 4.168h4.894L15 13.382V6H9z"
      fill={color}
    />
  </svg>
);

// Medal 심볼
const MedalSymbol = ({ size = 40, color = "var(--primary-color)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="15" r="6" fill={color} opacity="0.8"/>
    <circle cx="12" cy="15" r="4" fill={color}/>
    <path d="M12 11l-2 6h4l-2-6z" fill="white"/>
    <path d="M8 2v7l4-2 4 2V2H8z" fill={color} opacity="0.6"/>
  </svg>
);

export default function Prize() {
  const prizeVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const PrizeTextWithAnimation = ({ children, delay = 0, type = "prize" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <PrizeItemContainer
        ref={ref}
        as={motion.div}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={prizeVariants}
        transition={{ duration: 0.8, delay }}
      >
        <PrizeItemIcon>
          {type === "first" ? <TrophySymbol size={28} color="#FFD700" /> : <MedalSymbol size={28} />}
        </PrizeItemIcon>
        <PrizeItemText>
          {children}
        </PrizeItemText>
      </PrizeItemContainer>
    );
  };

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <Layout>
      {/* 배경 장식 요소들 */}
      <FloatingElement
        style={{ top: '10%', right: '5%' }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <TrophySymbol size={60} color="rgba(255, 215, 0, 0.2)" />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: '15%', left: '3%' }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MedalSymbol size={70} color="rgba(63, 108, 81, 0.1)" />
      </FloatingElement>

      <GradientOrb 
        size="350px"
        style={{ top: '30%', right: '-15%' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <ContentContainer>
        <HeaderSection>
          <TitleText
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            대회 수상실적
          </TitleText>
          <SubtitleText
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            우리 동아리 부원들의 빛나는 성과를 소개합니다
          </SubtitleText>
        </HeaderSection>

        <PrizeContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <YearSection>
            <YearHeader>
              <YearBadge>2022</YearBadge>
              <YearLine />
            </YearHeader>
            <PrizeList>
              <PrizeTextWithAnimation type="first">
                선린 교내 그래픽 공모전 일러스트 부문 <AwardLevel>대상</AwardLevel>
                <PrizeNameText>유호빈</PrizeNameText>
              </PrizeTextWithAnimation>
              <PrizeTextWithAnimation delay={0.2}>
                대한민국 청소년 디자인 전람회 <AwardLevel>특선</AwardLevel>
                <PrizeNameText>김한비</PrizeNameText>
              </PrizeTextWithAnimation>
            </PrizeList>
          </YearSection>

          <YearSection>
            <YearHeader>
              <YearBadge>2023</YearBadge>
              <YearLine />
            </YearHeader>
            <PrizeList>
              <PrizeTextWithAnimation>
                선린 교내 그래픽 공모전 일러스트 부문 <AwardLevel>동상</AwardLevel>
                <PrizeNameText>윤지연</PrizeNameText>
              </PrizeTextWithAnimation>
              <PrizeTextWithAnimation delay={0.2}>
                선린 교내 캐릭터 공모전 <AwardLevel>은상</AwardLevel>
                <PrizeNameText>정선재</PrizeNameText>
              </PrizeTextWithAnimation>
              <PrizeTextWithAnimation delay={0.4}>
                선린 교내 캐릭터 공모전 <AwardLevel>은상</AwardLevel>
                <PrizeNameText>박민성</PrizeNameText>
              </PrizeTextWithAnimation>
              <PrizeTextWithAnimation delay={0.6}>
                선린 교내 캐릭터 공모전 <AwardLevel>은상</AwardLevel>
                <PrizeNameText>김한비</PrizeNameText>
              </PrizeTextWithAnimation>
              <PrizeTextWithAnimation delay={0.8}>
                선린 교내 캐릭터 공모전 <AwardLevel>은상</AwardLevel>
                <PrizeNameText>김해윤</PrizeNameText>
              </PrizeTextWithAnimation>
            </PrizeList>
          </YearSection>

          <YearSection>
            <YearHeader>
              <YearBadge>2024</YearBadge>
              <YearLine />
            </YearHeader>
            <PrizeList>
              <PrizeTextWithAnimation>
                선린 교내 그래픽 공모전 일러스트 부문 <AwardLevel>은상</AwardLevel>
                <PrizeNameText>이도경</PrizeNameText>
              </PrizeTextWithAnimation>
            </PrizeList>
          </YearSection>
        </PrizeContainer>

        <StatsSection>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>12</StatNumber>
            <StatLabel>총 수상 횟수</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>8</StatNumber>
            <StatLabel>수상자 수</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>3</StatNumber>
            <StatLabel>연속 수상 년도</StatLabel>
          </StatCard>
        </StatsSection>
      </ContentContainer>
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

const ContentContainer = styled.div`
  width: 100%;
  padding: 120px 120px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (max-width: 1500px) {
    padding: 100px 60px;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
    gap: 60px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleText = styled(motion.h1)`
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
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
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

const SubtitleText = styled(motion.p)`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const PrizeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const YearSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const YearHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const YearBadge = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  font-family: "Pretendard-Bold";
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: var(--shadow-soft);
  min-width: 120px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 12px 24px;
    min-width: 100px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px 20px;
    min-width: 80px;
  }
  text-align: center;
`;

const YearLine = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 1px;
`;

const PrizeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const PrizeItemContainer = styled(Card3D)`
  padding: 25px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    gap: 15px;
    flex-direction: column;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 15px 12px;
    gap: 12px;
  }
`;

const PrizeItemIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-soft);
  flex-shrink: 0;
`;

const PrizeItemText = styled.div`
  color: var(--text-dark);
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.6;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const AwardLevel = styled.span`
  color: var(--primary-color);
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  background: rgba(63, 108, 81, 0.1);
  padding: 4px 12px;
  border-radius: 15px;
  margin: 0 8px;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin: 4px 6px;
    padding: 3px 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    margin: 2px 4px;
    padding: 2px 8px;
    font-size: 0.85rem;
  }
`;

const PrizeNameText = styled.span`
  color: var(--primary-color);
  font-family: "Pretendard-Medium";
  font-weight: 500;
  background: rgba(133, 200, 160, 0.2);
  padding: 4px 12px;
  border-radius: 15px;
  margin-left: 10px;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin: 4px 6px;
    padding: 3px 10px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    margin: 2px 4px;
    padding: 2px 8px;
    font-size: 0.85rem;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 252, 251, 0.95) 100%);
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-light);
  
  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const StatNumber = styled.div`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
