import styled from "styled-components";
import { motion, useInView } from "framer-motion"; // framer-motion import 추가
import { useRef } from "react"; // useRef import 추가
import VectorSvg from "../Svgs/VectorSvg";

export default function Curriculum() {
  const contextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  return (
    <Layout>
      <Content>
        <CBOX ref={ref1}>
          <CIMG src="/stylus_pencil.svg" />
          <CTextBox>
            <CTitleText
              as={motion.span}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={0}
            >
              일러스트 기초 <CTextmini>1학기</CTextmini>
            </CTitleText>
            <CContext
              as={motion.span}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={0.5}
            >
              일러스트를 중심으로 기본적인 드로잉 방법과 연출법,색감이론 및
              캐릭터 디자인에 관한 수업을 진행합니다.
            </CContext>
          </CTextBox>
        </CBOX>
        <CBOX ref={ref2}>
          <CIMG src="/stylus_pen.svg" />
          <CTextBox>
            <CTitleText
              as={motion.span}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={1}
            >
              만화 이론과 실습 <CTextmini>2학기</CTextmini>
            </CTitleText>
            <CContext
              as={motion.span}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={1.5}
            >
              만화의 기본적인 요소인 컷 분활과 효과, 연출, 스토리를 배울 수
              있도록 수업을 진행합니다.
            </CContext>
          </CTextBox>
        </CBOX>
        <CBOX ref={ref3}>
          <CIMG src="/stylus_brush.svg" />
          <CTextBox>
            <CTitleText
              as={motion.span}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={2}
            >
              캐릭터 일러스트 제작
            </CTitleText>
            <CContext
              as={motion.span}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
              variants={contextVariants}
              custom={2.5}
            >
              수업을 통해 배운 내용들을 통해 1학기 최종 프로젝트인 캐릭터 디자인
              시트를 제작합니다.
            </CContext>
          </CTextBox>
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
