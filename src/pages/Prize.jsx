import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Prize() {
  const prizeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const PrizeTextWithAnimation = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <PrizeText
        ref={ref}
        as={motion.span}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={prizeVariants}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </PrizeText>
    );
  };

  return (
    <Layout>
      <TitleText>대회 수상실적</TitleText>
      <PrizeBox>
        <YearsBox>
          <YearsText>2022</YearsText>
        </YearsBox>
        <PrizeTextWithAnimation>
          선린 교내 그래픽 공모전 일러스트 부문 대상{" "}
          <PrizeNameText>유호빈</PrizeNameText>
        </PrizeTextWithAnimation>
        <PrizeTextWithAnimation delay={0.2}>
          대한민국 청소년 디자인 전람회 특선{" "}
          <PrizeNameText>김한비</PrizeNameText>
        </PrizeTextWithAnimation>
      </PrizeBox>
      <PrizeBox>
        <YearsBox>
          <YearsText>2023</YearsText>
        </YearsBox>
        <PrizeTextWithAnimation>
          선린 교내 그래픽 공모전 일러스트 부문 동상{" "}
          <PrizeNameText> 윤지연</PrizeNameText>
        </PrizeTextWithAnimation>
        <PrizeTextWithAnimation delay={0.2}>
          선린 교내 캐릭터 공모전 은상 <PrizeNameText>정선재</PrizeNameText>
        </PrizeTextWithAnimation>
        <PrizeTextWithAnimation delay={0.4}>
          선린 교내 캐릭터 공모전 은상 <PrizeNameText>박민성</PrizeNameText>
        </PrizeTextWithAnimation>
        <PrizeTextWithAnimation delay={0.6}>
          선린 교내 캐릭터 공모전 은상 <PrizeNameText>김한비</PrizeNameText>
        </PrizeTextWithAnimation>
        <PrizeTextWithAnimation delay={0.8}>
          선린 교내 캐릭터 공모전 은상 <PrizeNameText>김해윤</PrizeNameText>
        </PrizeTextWithAnimation>
      </PrizeBox>
      <PrizeBox>
        <YearsBox>
          <YearsText>2024</YearsText>
        </YearsBox>
        <PrizeTextWithAnimation>
          선린 교내 그래픽 공모전 일러스트 부문 은상{" "}
          <PrizeNameText>이도경</PrizeNameText>
        </PrizeTextWithAnimation>
      </PrizeBox>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 120px 180px;
  background-color: #ffffff;
  gap: 80px;
  @media (max-width: 1500px) {
    padding: 120px 60px;
  }
`;
const PrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const YearsBox = styled.div`
  display: flex;
  width: 130px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12.73px;
  border: 2.214px solid #000;
`;

const TitleText = styled.span`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  line-height: normal;
`;
const YearsText = styled.span`
  color: #000;
  font-size: 1.3rem;
  font-style: normal;
  line-height: normal;
`;
const PrizeText = styled(motion.span)`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  line-height: normal;
`;
const PrizeNameText = styled.span`
  color: #3f6c51;
  font-size: 1.2rem;
  font-style: normal;
  line-height: normal;
`;
