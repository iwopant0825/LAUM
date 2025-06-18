import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // 메뉴 닫기
  };

  const handleApplyClick = () => {
    window.location.href = "https://forms.gle/dL3ZLHxEbLMxQicL6";
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <Layout
        as={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        $scrolled={scrolled}
      >
        <LeftSection>
          <LogoContainer
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
          >
            <LogoImg src="/logo.svg" />
          </LogoContainer>
        </LeftSection>

        <Navigation>
          <NavItem
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("introduce")}
          >
            소개
          </NavItem>
          <NavDivider />
          <NavItem
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("curriculum")}
          >
            커리큘럼
          </NavItem>
          <NavDivider />
          <NavItem
            whileHover={{ scale: 1.05, color: "var(--primary-color)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("prize")}
          >
            수상실적
          </NavItem>
        </Navigation>

        <RightSection>
          <ApplyButton
            onClick={handleApplyClick}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "var(--primary-light)",
              boxShadow: "var(--shadow-hover)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ApplyText>지원하기</ApplyText>
          </ApplyButton>

          <MobileMenuButton
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HamburgerIcon $isOpen={isMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerIcon>
          </MobileMenuButton>
        </RightSection>
      </Layout>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <MobileMenu
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileMenuItem
                variants={menuItemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("introduce")}
              >
                소개
              </MobileMenuItem>
              <MobileMenuItem
                variants={menuItemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("curriculum")}
              >
                커리큘럼
              </MobileMenuItem>
              <MobileMenuItem
                variants={menuItemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("prize")}
              >
                수상실적
              </MobileMenuItem>
              <MobileApplyButton
                variants={menuItemVariants}
                onClick={handleApplyClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                지원하기
              </MobileApplyButton>
            </MobileMenu>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

const Layout = styled(motion.div)`
  background: ${props => props.$scrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(255, 255, 255, 1)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99999;
  padding: 15px 120px;
  justify-content: space-between;
  border-bottom: ${props => props.$scrolled 
    ? '1px solid rgba(63, 108, 81, 0.1)' 
    : '1px solid rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? 'var(--shadow-soft)' : 'none'};
  
  @media (max-width: 1500px) {
    padding: 15px 60px;
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 40px;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(63, 108, 81, 0.1));
  
  @media (max-width: 768px) {
    width: 35px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  color: var(--text-dark);
  font-family: "Pretendard-Medium";
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 1px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  
  @media (max-width: 1500px) {
    font-size: 1.1rem;
  }
`;

const NavDivider = styled.div`
  width: 4px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 50%;
  opacity: 0.6;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ApplyButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ApplyText = styled.span`
  font-family: "Pretendard-SemiBold";
  font-size: 1rem;
  font-weight: 600;
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 1200px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--primary-color);
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
    
    &:nth-child(1) {
      top: ${props => props.$isOpen ? '9px' : '0px'};
      transform: ${props => props.$isOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
    }
    
    &:nth-child(2) {
      top: 9px;
      opacity: ${props => props.$isOpen ? '0' : '1'};
      left: ${props => props.$isOpen ? '-60px' : '0'};
    }
    
    &:nth-child(3) {
      top: ${props => props.$isOpen ? '9px' : '18px'};
      transform: ${props => props.$isOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
    }
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99998;
  
  @media (max-width: 1200px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 80px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-shadow: var(--shadow-hover);
  border: 1px solid var(--border-light);
  min-width: 200px;
`;

const MobileMenuItem = styled(motion.div)`
  color: var(--text-dark);
  font-family: "Pretendard-Medium";
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(63, 108, 81, 0.1);
    color: var(--primary-color);
  }
`;

const MobileApplyButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 25px;
  font-family: "Pretendard-SemiBold";
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-light), var(--accent-color));
  }
`;
