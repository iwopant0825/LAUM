import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleApplyClick = () => {
    window.location.href = "https://forms.gle/dL3ZLHxEbLMxQicL6";
  };

  return (
    <>
      <Layout>
        <Sections2></Sections2>
        <Sections>
          <SectionText on="true" onClick={() => scrollToSection("introduce")}>
            소개
          </SectionText>
          <img src="/Ellipse.svg" />
          <SectionText on="true" onClick={() => scrollToSection("curriculum")}>
            커리큘럼
          </SectionText>
          <img src="/Ellipse.svg" />
          <SectionText on="true" onClick={() => scrollToSection("prize")}>
            수상실적
          </SectionText>
        </Sections>
        <LogoImg src="/logo.svg" />
        <ApplyBox>
          <ApplyButton onClick={handleApplyClick}>
            <ApplyText>지원하기</ApplyText>
          </ApplyButton>
        </ApplyBox>
        <Sections2>
          <HamImg src="/ham.svg" onClick={toggleMenu} />
        </Sections2>
      </Layout>
      <MenuBox
        as={motion.div}
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? "0" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }} // 마찰력 추가
        style={{ top: "60px" }} // Layout 바로 아래에 위치하도록 top 조정
      >
        <SectionText on="true" onClick={() => scrollToSection("introduce")}>
          소개
        </SectionText>
        <SectionText on="true" onClick={() => scrollToSection("curriculum")}>
          커리큘럼
        </SectionText>
        <SectionText on="true" onClick={() => scrollToSection("prize")}>
          수상실적
        </SectionText>
        <ApplyButton onClick={handleApplyClick}>
          <ApplyText>지원하기</ApplyText>
        </ApplyButton>
      </MenuBox>
    </>
  );
}

const MenuBox = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99998;
  padding: 30px 15px;
  background-color: red;
  gap: 30px;
  flex-direction: column;
  display: flex;
  text-align: center;
  background: rgba(255, 255, 255, 0.945);
  top: -40%;
  @media (min-width: 1501px) {
    display: none;
  }
`;

const Layout = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99999;
  padding: 15px 185px;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.33);
  @media (max-width: 1500px) {
    padding: 15px 30px;
  }
`;
const HamImg = styled.img`
  display: none;
  width: 30px;
  @media (max-width: 1500px) {
    display: block;
  }
`;
const Sections2 = styled.div`
  display: none;
  width: 260px;
  align-items: end;
  @media (max-width: 1500px) {
    display: flex;
    justify-content: flex-end; // 추가된 부분
  }
`;
const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  @media (max-width: 1500px) {
    display: none;
  }
`;
const SectionText = styled.p`
  color: #000;
  font-size: 17px;
  font-style: normal;
  line-height: normal;
  opacity: ${(props) => (props.on === "true" ? 1 : 0.3)};
  cursor: default;
  @media (max-width: 1500px) {
    font-size: 25px;
  }
`;

const LogoImg = styled.img`
  width: 36px;
`;

const ApplyBox = styled.div`
  display: flex;
  width: 260px;
  justify-content: end;
  @media (max-width: 1500px) {
    display: none;
  }
`;
const ApplyButton = styled.div`
  border-radius: 17px;
  background: #3f6c51;
  display: flex;
  padding: 12px 47px;
  justify-content: center;
  align-items: center;
`;
const ApplyText = styled.p`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  font-family: "Pretendard-SemiBold";
  cursor: default;
`;
