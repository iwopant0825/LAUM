import styled from "styled-components";
import { motion } from "framer-motion"; // framer-motion import 추가
import TextLogo from "../Svgs/TextLogo";

export default function Home() {
  const handleApplyClick = () => {
    alert("아직은 지원 기간이 아니에요!");
  };
  return (
    <>
      {/* <Dec1 src="/dec1.svg"/> */}
      <Layout>
        <TitleBox>
          <LogoBox
            initial="hidden"
            animate="visible"
            // variants={{
            //   hidden: { opacity: 0, y: 20 },
            //   visible: {
            //     opacity: 1,
            //     y: 0,
            //     transition: { duration: 1, delay: 0.1 },
            //   },
            // }}
          >
            <TextLogo/>
            <LogoText>Learning Art, Unleash Me.</LogoText>
          </LogoBox>
          <ConText
            initial="hidden"
            animate="visible"
            // variants={{
            //   hidden: { opacity: 0, y: 20 },
            //   visible: {
            //     opacity: 1,
            //     y: 0,
            //     transition: { duration: 1, delay: 0.2 },
            //   },
            // }}
          >
            LAUM은 창의적인 아이디어와 감성을 자유롭게 표현하는
            선린인터넷고등학교 콘텐츠디자인과의 일러스트 동아리입니다.
          </ConText>
          <ApplyBox
            initial="hidden"
            animate="visible"
            onClick={handleApplyClick}
            // variants={{
            //   hidden: { opacity: 0, y: 20 },
            //   visible: {
            //     opacity: 1,
            //     y: 0,
            //     transition: { duration: 1, delay: 0.3 },
            //   },
            // }}
          >
            <Apply>
              <ApplyText>2기 지원하기</ApplyText>
            </Apply>
            {/* <InstagramText>Instagram</InstagramText> */}
          </ApplyBox>
        </TitleBox>
        <ImgBox>
          <ImgGap>
            <Img
              src="/picture/1.png"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                },
              }}
            />
            <Img
              src="/picture/2.png"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                },
              }}
            />
          </ImgGap>
          <ImgGap>
            <Img
              src="/picture/3.png"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.3 },
                },
              }}
            />
            <Img
              src="/picture/4.png"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.4 },
                },
              }}
            />
          </ImgGap>
        </ImgBox>
      </Layout>
    </>
  );
}

const Dec1 = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.7;
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 180px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  @media (max-width: 1500px) {
    padding: 50px 30px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    padding: 50px 20px;
    justify-content: center;
  }
`;

const Img = styled(motion.img)`
  // Img를 motion.img로 변경
  width: 220px;
  @media (max-width: 1500px) {
    margin-top: 40px;
    width: 220px;
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ImgGap = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 55%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 60px;
  }
`;
const LogoBox = styled(motion.div)`
  // LogoBox를 motion.div로 변경
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: end;
`;
const LogoText = styled.p`
  color: #3f6b50;
  font-family: "Pretendard-Medium";
  font-size: 1rem;
  font-style: normal;
  line-height: 26px;
  margin-bottom: 10px;
`;
const ConText = styled(motion.p)`
  // ConText를 motion.p로 변경
  color: #000;
  font-size: 26px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 5.2px;
`;
const ApplyBox = styled(motion.div)`
  // ApplyBox를 motion.div로 변경
  display: flex;
  align-items: center;
  gap: 58px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Apply = styled.div`
  display: flex;
  width: 240px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 3.675px;
  border: 1.225px solid #000;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const ApplyText = styled.p`
  color: #000;
  font-size: 25px;
  font-style: normal;
  line-height: normal;
  cursor: default;
`;
const InstagramText = styled.p`
  color: #000;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 39.232px; /* 113.034% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
