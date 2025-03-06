import styled from "styled-components";

export default function Introduce() {
  return (
    <Layout>
      <TitleText>Introduce</TitleText>
      <ConTent>
        <FujanImg src="/fujan.svg" />
        <MainText>
          <IntroduceText>
            만화&일러스트 동아리인 미르MIR는 합병을 진행하는 타 동아리들과 함께
            콘텐츠 디자인과의 새로운 시작에 발맞추기 위해 리브랜딩을 하여
            라움LAUM이란 이름으로 새롭게 탄생하였습니다.{" "}
          </IntroduceText>
        </MainText>
      </ConTent>
    </Layout>
  );
}

const MainText = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroduceText = styled.p`
  color: #000;
  font-size: 32.475px;
  font-style: normal;
  line-height: 150%; /* 48.713px */
  letter-spacing: 3.897px;
`;

const Layout = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.33);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 110px;
  gap: 50px;
`;
const TitleText = styled.p`
  color: #000;
  font-family: "Pretendard-Thin";
  font-size: 33.407px;
  font-style: normal;
  font-weight: 200;
  line-height: 150%; /* 50.11px */
  letter-spacing: 4.009px;
`;
const FujanImg = styled.img`
  width: 300px;
`;
const ConTent = styled.div`
  display: flex;
`;
