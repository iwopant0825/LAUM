import styled from "styled-components";
import { motion } from "framer-motion";
import { FloatingElement, GradientOrb } from "../components/Symbols";

// Social Media Icons
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const EmailIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export default function Footer() {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      {/* 배경 장식 요소들 */}
      <FloatingElement
        style={{ top: '20%', left: '5%' }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.1)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </FloatingElement>

      <GradientOrb 
        size="300px"
        style={{ bottom: '-10%', right: '-10%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(133, 200, 160, 0.1) 100%)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
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
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ApplySection variants={itemVariants}>
          <ApplyCard
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ApplyIcon>📅</ApplyIcon>
            <ApplyTextContainer>
              <ApplyTitle>2기 모집</ApplyTitle>
              <ApplyText>지원기간: 3월 9일(일) ~ 3월 15일(토) 23시 59분</ApplyText>
            </ApplyTextContainer>
          </ApplyCard>
        </ApplySection>

        <MainFooter>
          <FooterLeft variants={itemVariants}>
            <LogoSection>
              <LogoImg src="/textlogowhite.svg"/>
              <LogoDescription>
                Learning Art, Unleash Me.<br/>
                예술을 배우며 나를 펼치다
              </LogoDescription>
            </LogoSection>

            <ContactInfo>
              <ContactItem>
                <ContactLabel>부장</ContactLabel>
                <ContactName>이도경</ContactName>
              </ContactItem>
              <ContactItem>
                <ContactLabel>부부장</ContactLabel>
                <ContactName>이시은</ContactName>
              </ContactItem>
            </ContactInfo>
          </FooterLeft>

          <FooterRight variants={itemVariants}>
            <SocialLinks>
              <SocialLink
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <InstagramIcon size={20} />
                <span>Instagram</span>
              </SocialLink>
              <SocialLink
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <EmailIcon size={20} />
                <span>Contact</span>
              </SocialLink>
            </SocialLinks>

            <FooterInfo>
              <FooterInfoItem>
                <span>Designed & Developed</span>
                <strong>차호림</strong>
              </FooterInfoItem>
              <CopyText>ⓒ 2025 LAUM. All rights reserved.</CopyText>
            </FooterInfo>
          </FooterRight>
        </MainFooter>

        <Divider variants={itemVariants} />

        <BottomSection variants={itemVariants}>
          <BottomText>
            선린인터넷고등학교 콘텐츠디자인과 일러스트 동아리
          </BottomText>
          <ScrollToTop
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑ TOP
          </ScrollToTop>
        </BottomSection>
      </ContentContainer>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  padding: 80px 120px 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  
  @media (max-width: 1500px) {
    padding: 70px 60px 30px;
  }
  
  @media (max-width: 1200px) {
    padding: 60px 40px 30px;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    padding: 50px 20px 20px;
    gap: 40px;
  }
`;

const ApplySection = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ApplyCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
    gap: 15px;
  }
`;

const ApplyIcon = styled.div`
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ApplyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ApplyTitle = styled.div`
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.4rem;
  font-weight: 700;
`;

const ApplyText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
`;

const FooterLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LogoImg = styled.img`
  width: 120px;
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.2));
  
  @media (max-width: 1200px) {
    align-self: center;
  }
`;

const LogoDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContactLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  min-width: 60px;
`;

const ContactName = styled.span`
  color: white;
  font-family: "Pretendard-SemiBold";
  font-size: 1.1rem;
  font-weight: 600;
`;

const FooterRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-end;
  
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-family: "Pretendard-Medium";
  font-size: 0.95rem;
  cursor: pointer;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
  
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const FooterInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Pretendard-Regular";
    font-size: 0.95rem;
  }
  
  strong {
    color: white;
    font-family: "Pretendard-SemiBold";
    font-size: 1rem;
    font-weight: 600;
  }
`;

const CopyText = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: "Pretendard-Regular";
  font-size: 0.9rem;
`;

const Divider = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    transparent 100%);
`;

const BottomSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const BottomText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Pretendard-Regular";
  font-size: 0.9rem;
`;

const ScrollToTop = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: "Pretendard-Medium";
  font-size: 0.9rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
