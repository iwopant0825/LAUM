import styled from "styled-components";

export default function Curriculum() {
  return (
    <Layout>
      <Content>
          <CBOX>
            <CIMG src="/stylus_pencil.svg" />
            <CTextBox>
              <CTitleText>
                일러스트 기초 <CTextmini>1학기</CTextmini>
              </CTitleText>
              <CContext>
                일러스트를 중심으로 기본적인 드로잉 방법과 연출법,색감이론 및
                캐릭터 디자인에 관한 수업을 진행합니다.
              </CContext>
            </CTextBox>
          </CBOX>
          <CBOX>
            <CIMG src="/stylus_pen.svg" />
            <CTextBox>
              <CTitleText>
                만화 이론과 실습 <CTextmini>2학기</CTextmini>
              </CTitleText>
              <CContext>
                만화의 기본적인 요소인 컷 분활과 효과, 연출, 스토리를 배울 수
                있도록 수업을 진행합니다.
              </CContext>
            </CTextBox>
          </CBOX>
          <CBOX>
            <CIMG src="/stylus_brush.svg" />
            <CTextBox>
              <CTitleText>캐릭터 일러스트 제작</CTitleText>
              <CContext>
                수업을 통해 배운 내용들을 통해 1학기 최종 프로젝트인 캐릭터
                디자인 시트를 제작합니다.
              </CContext>
            </CTextBox>
          </CBOX>
          <CBOX>
            <CIMG src="/stylus_fountain_pen.svg" />
            <CTextBox>
              <CTitleText>창작 단편만화 제작</CTitleText>
              <CContext>
                수업을 진행하며 배운 이론들을 적용시켜 최종적으로 창작
                단편만화를 제작합니다.
              </CContext>
            </CTextBox>
          </CBOX>
      </Content>
      <VectorImg src="/Vector.svg"/>
    </Layout>
  );
}

const VectorImg = styled.img`
  height:1200px;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 120px 300px;
  background-color:#FDFCF7;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap:175px;
`;
const ContentM1 = styled.div`
  display: flex;
  gap:110px;
`;
const ContentM2 = styled.div`
  display: flex;
  gap:110px;
`;
const CBOX = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 55%;
  gap: 51px;
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
const CTitleText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 1.6rem;
  font-style: normal;
  line-height: normal;
`;
const CContext = styled.span`
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
