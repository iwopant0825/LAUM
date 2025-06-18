import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Introduce() {
  const text =
    "만화&일러스트 동아리인 미르MIR는 합병을 진행하는 타 동아리들과 함께 콘텐츠 디자인과의 새로운 시작에 발맞추기 위해 리브랜딩을 하여 라움LAUM이란 이름으로 새롭게 탄생하였습니다.";

  const textArray = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const superTextRef = useRef(null);
  const isSuperTextInView = useInView(superTextRef, { once: true });

  return (
    <Layout>
      <ConTent>
        <FujanImg src="/fujan2.svg" />
        <MainText>
          <IntroduceText ref={ref}>
            {textArray.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.01 }} // 딜레이를 0.05로 늘림
              >
                {char}
              </motion.span>
            ))}
          </IntroduceText>
          <SuperText
            ref={superTextRef}
            initial={{ opacity: 0 }}
            animate={isSuperTextInView ? { opacity: 1 } : {}}
            transition={{ duration: 3 }} // duration을 2로 늘림
          >
            “예술을 배우며 나의 한계를 뛰어넘어라.”
          </SuperText>
        </MainText>
      </ConTent>
    </Layout>
  );
}

const NameText1 = styled.span`
  color: #c067b3;
  font-size: 32.475px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 3.897px;
`;

const NameEText1 = styled.span`
  color: #c067b3;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 2.4px;
`;

const NameText2 = styled.span`
  color: #3f6c51;
  font-size: 32.475px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 3.897px;
`;

const NameEText2 = styled.span`
  color: #3f6c51;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 2.4px;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    gap: 40px;
  }
`;

const IntroduceText = styled.p`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  line-height: 150%; /* 48.713px */
  letter-spacing: 3.897px;
  text-align: center;
`;

const SuperText = styled(motion.p)`
  color: #000;
  text-align: center;
  font-family: "Pretendard-Thin";
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 45.552px */
  letter-spacing: 10.629px;
`;

const Layout = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 120px 180px;
  gap: 50px;
  @media (max-width: 1500px) {
    padding: 120px 30px;
  }
  @media (max-width: 1200px) {
    padding: 120px 30px;
  }
  @media (max-width: 800px) {
    padding: 120px 20px;
  }
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

const FujanImg = styled.img`
  width: 250px;
`;

const ConTent = styled.div`
  display: flex;
  gap: 100px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
