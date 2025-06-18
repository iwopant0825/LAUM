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
                <LogoSubText>자기 자신의 발전, 끝없는 성장을 이뤄 자신의 한계를 뛰어넘는다</LogoSubText>
              </LogoTextWrapper>
            </LogoBox>

            <ConText variants={itemVariants}>
              <HighlightText>LAUM</HighlightText>은 만화&일러스트 동아리 미르의 리브랜딩으로 탄생한<br/>
              <BoldText>선린인터넷고등학교 콘텐츠디자인과</BoldText>의 새로운 창작 동아리입니다.
            </ConText>

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
                  <ImageLabel>일러스트 작품</ImageLabel>
                </ImageOverlay>
              </ImageCard>
              <ImageCard variants={imageVariants}>
                <Img src="/picture/3.png" />
                <ImageOverlay>
                  <ImageLabel>일러스트 작품</ImageLabel>
                </ImageOverlay>
              </ImageCard>
              <ImageCard variants={imageVariants}>
                <Img src="/picture/4.png" />
                <ImageOverlay>
                  <ImageLabel>만화 창작</ImageLabel>
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
  overflow-x: hidden;
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 120px;
  gap: 80px;
  box-sizing: border-box;
  
  @media (max-width: 1500px) {
    padding: 80px 60px;
    gap: 60px;
  }
  
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 100px 40px 80px;
    text-align: center;
    gap: 50px;
  }
  
  @media (max-width: 1024px) {
    padding: 90px 30px 70px;
    gap: 45px;
  }
  
  @media (max-width: 768px) {
    padding: 100px 20px 60px;
    gap: 40px;
    min-height: calc(100vh - 80px);
  }
  
  @media (max-width: 480px) {
    padding: 100px 15px 60px;
  }
  
  @media (max-width: 380px) {
    padding: 100px 10px 60px;
  }
`;

const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    align-items: center;
  }
  
  @media (max-width: 1024px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    gap: 35px;
  }
`;

const LogoBox = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    gap: 35px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const LogoWrapper = styled.div`
  transform: scale(1.0);
  filter: drop-shadow(0 4px 20px rgba(63, 108, 81, 0.1));
  
  @media (max-width: 1024px) {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    transform: scale(0.9);
  }
  
  @media (max-width: 480px) {
    transform: scale(0.85);
  }
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const LogoText = styled.h2`
  color: var(--primary-color);
  font-family: "Pretendard-SemiBold";
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 600;
  word-break: keep-all;
  
  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 380px) {
    font-size: 1.3rem;
  }
`;

const LogoSubText = styled.p`
  color: var(--text-light);
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.4;
  word-break: keep-all;
  
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.0rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.0rem;
    text-align: center;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 380px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

const ConText = styled(motion.div)`
  color: var(--text-dark);
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  word-break: keep-all;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.35rem;
    line-height: 1.55;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
    word-break: keep-all;
    br {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.4;
    letter-spacing: 0.2px;
  }
  
  @media (max-width: 380px) {
    font-size: 1.05rem;
    line-height: 1.4;
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
  
  @media (max-width: 1024px) {
    gap: 20px;
  }
  
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
  
  @media (max-width: 1024px) {
    padding: 18px;
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: left;
    padding: 16px;
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
  
  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
  
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
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
    
    @media (max-width: 1024px) {
      font-size: 1.05rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  span {
    color: var(--text-light);
    font-family: "Pretendard-Regular";
    font-size: 0.9rem;
    
    @media (max-width: 1024px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
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
  
  @media (max-width: 1024px) {
    padding: 16px 30px;
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 15px 28px;
  }
`;

const ApplyText = styled.span`
  color: white;
  font-family: "Pretendard-SemiBold";
  font-size: 1.2rem;
  font-weight: 600;
  
  @media (max-width: 1024px) {
    font-size: 1.15rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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
  max-width: 380px;
  
  @media (max-width: 1200px) {
    max-width: 340px;
  }
  
  @media (max-width: 1024px) {
    max-width: 320px;
    gap: 14px;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
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
  
  @media (max-width: 1024px) {
    border-radius: 15px;
    
    &:nth-child(2n) {
      margin-top: 16px;
    }
    
    &:hover {
      transform: translateY(-5px) rotateY(2deg);
    }
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
  height: 100%;
  object-fit: cover;
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
  
  @media (max-width: 1024px) {
    padding: 22px 15px 15px;
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
  
  @media (max-width: 1024px) {
    font-size: 0.88rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
