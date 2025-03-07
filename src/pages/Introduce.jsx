import styled from "styled-components";

export default function Introduce() {
  return (
    <Layout>
      <TitleText>Introduce</TitleText>
      <ConTent>
        <FujanImg src="/fujan2.svg" />
        <MainText>
          <IntroduceText>
            만화&일러스트 동아리인 <NameText1>미르</NameText1><NameEText1>MIR</NameEText1>는 합병을 진행하는 타 동아리들과 함께
            콘텐츠 디자인과의 새로운 시작에 발맞추기 위해 리브랜딩을 하여 <NameText2>라움</NameText2><NameEText2>LAUM</NameEText2>이란 이름으로 새롭게 탄생하였습니다.{" "}
          </IntroduceText>
          <SuperText>“예술을
          배우며 나의 한계를 뛰어넘어라.”</SuperText>
        </MainText>
      </ConTent>
    </Layout>
  );
}
const NameText1 = styled.span`
    color: #C067B3;
    font-size: 32.475px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 3.897px;
`;

const NameEText1 = styled.span`
    color: #C067B3;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 2.4px;
`;

const NameText2 = styled.span`
    color: #3F6C51;
    font-size: 32.475px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 3.897px;
`;

const NameEText2 = styled.span`
    color: #3F6C51;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 2.4px;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;

const IntroduceText = styled.p`
  color: #000;
  font-size: 26px;
  font-style: normal;
  line-height: 150%; /* 48.713px */
  letter-spacing: 3.897px;
  text-align: center; 
`;
const SuperText = styled.p`
    color: #000;
    text-align: center;
    font-family: 'Pretendard-Thin';
    font-size: 30.368px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 45.552px */
    letter-spacing: 10.629px;
`;
const Layout = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.33);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 180px;
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
  width: 250px;
`;
const ConTent = styled.div`
  display: flex;
  gap:100px;
`;
