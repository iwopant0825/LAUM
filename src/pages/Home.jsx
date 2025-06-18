import styled from "styled-components";
import { motion } from "framer-motion";
import TextLogo from "../Svgs/TextLogo";
import { BrushSymbol, PaletteSymbol, FloatingElement, GradientOrb, GeometricPattern } from "../components/Symbols";

export default function Home() {
  const handleApplyClick = () => {
    window.location.href = "https://forms.gle/dL3ZLHxEbLMxQicL6";
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Layout>
        {/* 배경 장식 요소들 */}
        <FloatingElement
          style={{ top: '10%', left: '5%' }}
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <BrushSymbol size={60} color="rgba(63, 108, 81, 0.1)" />
        </FloatingElement>

        <FloatingElement
          style={{ top: '20%', right: '10%' }}
          animate={{ 
            rotate: -360,
            x: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <PaletteSymbol size={50} color="rgba(133, 200, 160, 0.2)" />
        </FloatingElement>

        <FloatingElement
          style={{ bottom: '20%', left: '8%' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GeometricPattern size={120} />
        </FloatingElement>

        <GradientOrb 
          size="300px"
          style={{ top: '-10%', right: '-10%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <ContentContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TitleSection>
            <LogoBox variants={itemVariants}>
              <LogoWrapper>
                <TextLogo/>
              </LogoWrapper>
              <LogoTextWrapper>
                <LogoText>Learning Art, Unleash Me.</LogoText>
                <LogoSubText>예술을 배우며 나를 펼치다</LogoSubText>
              </LogoTextWrapper>
            </LogoBox>

            <ConText variants={itemVariants}>
              <HighlightText>LAUM</HighlightText>은 창의적인 아이디어와 감성을 자유롭게 표현하는<br/>
              <BoldText>선린인터넷고등학교 콘텐츠디자인과</BoldText>의 일러스트 동아리입니다.
            </ConText>

            <FeatureGrid variants={itemVariants}>
              <FeatureItem>
                <FeatureIcon>
                  <BrushSymbol size={32} />
                </FeatureIcon>
                <FeatureText>
                  <strong>전문적인 교육</strong>
                  <span>체계적인 일러스트 커리큘럼</span>
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <PaletteSymbol size={32} />
                </FeatureIcon>
                <FeatureText>
                  <strong>창작 활동</strong>
                  <span>다양한 프로젝트와 공모전</span>
                </FeatureText>
              </FeatureItem>
            </FeatureGrid>

            <ApplyBox variants={itemVariants}>
              <ApplyButton
                onClick={handleApplyClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "var(--shadow-hover)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ApplyText>2기 지원하기</ApplyText>
                <ApplyArrow>→</ApplyArrow>
              </ApplyButton>
            </ApplyBox>
          </TitleSection>

          <ImageSection>
            <ImageGrid
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ImageCard variants={imageVariants}>
                <Img src="/picture/1.png" />
                <ImageOverlay>
                  <ImageLabel>일러스트 작품</ImageLabel>
                </ImageOverlay>
              </ImageCard>
              <ImageCard variants={imageVariants}>
                <Img src="/picture/2.png" />
                <ImageOverlay>
                  <ImageLabel>캐릭터 디자인</ImageLabel>
                </ImageOverlay>
              </ImageCard>
              <ImageCard variants={imageVariants}>
                <Img src="/picture/3.png" />
                <ImageOverlay>
                  <ImageLabel>만화 창작</ImageLabel>
                </ImageOverlay>
              </ImageCard>
              <ImageCard variants={imageVariants}>
                <Img src="/picture/4.png" />
                <ImageOverlay>
                  <ImageLabel>디지털 아트</ImageLabel>
                </ImageOverlay>
              </ImageCard>
            </ImageGrid>
          </ImageSection>
        </ContentContainer>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 252, 251, 0.95) 50%,
    rgba(240, 248, 243, 0.95) 100%);
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 120px;
  gap: 80px;
  
  @media (max-width: 1500px) {
    padding: 80px 60px;
    gap: 60px;
  }
  
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 80px 40px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 40px;
  }
`;

const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const LogoBox = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LogoWrapper = styled.div`
  transform: scale(1.1);
  filter: drop-shadow(0 4px 20px rgba(63, 108, 81, 0.1));
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LogoText = styled.h2`
  color: var(--primary-color);
  font-family: "Pretendard-SemiBold";
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const LogoSubText = styled.p`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ConText = styled(motion.div)`
  color: var(--text-dark);
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    br {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const HighlightText = styled.span`
  color: var(--primary-color);
  font-family: "Pretendard-Bold";
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
    border-radius: 2px;
  }
`;

const BoldText = styled.span`
  color: var(--primary-color);
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
`;

const FeatureGrid = styled(motion.div)`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(10px);
  flex: 1;
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: left;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(63, 108, 81, 0.2);
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  strong {
    color: var(--text-dark);
    font-family: "Pretendard-SemiBold";
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  span {
    color: var(--text-light);
    font-family: "Pretendard-Regular";
    font-size: 0.9rem;
  }
`;

const ApplyBox = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const ApplyButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 35px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ApplyText = styled.span`
  color: white;
  font-family: "Pretendard-SemiBold";
  font-size: 1.2rem;
  font-weight: 600;
`;

const ApplyArrow = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  
  ${ApplyButton}:hover & {
    transform: translateX(3px);
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 480px;
  
  @media (max-width: 1200px) {
    max-width: 420px;
  }
  
  @media (max-width: 768px) {
    max-width: 350px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 10px;
  }
`;

const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px) rotateY(3deg);
    box-shadow: var(--shadow-hover);
  }
  
  &:nth-child(2n) {
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    border-radius: 14px;
    
    &:nth-child(2n) {
      margin-top: 12px;
    }
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 12px;
    
    &:nth-child(2n) {
      margin-top: 8px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  
  ${ImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 24px 16px 16px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  
  ${ImageCard}:hover & {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 20px 14px 14px;
  }
  
  @media (max-width: 480px) {
    padding: 16px 12px 12px;
  }
`;

const ImageLabel = styled.span`
  color: white;
  font-family: "Pretendard-SemiBold";
  font-size: 0.9rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
