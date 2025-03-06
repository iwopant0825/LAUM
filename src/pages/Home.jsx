import styled from "styled-components";

export default function Home() {
  return (
    <>
    {/* <Dec1 src="/dec1.svg"/> */}
    <Layout>
      <TitleBox>
        <LogoBox>
          <img width={485} src="/textlogo.svg" />
          <LogoText>Learning Art, Unleash Me.</LogoText>
        </LogoBox>
        <ConText>
          LAUM은 창의적인 아이디어와 감성을 자유롭게 표현하는 선린인터넷고등학교
          콘텐츠디자인과의 일러스트 동아리입니다.
        </ConText>
        <ApplyBox>
          <Apply>
            <ApplyText>2기 지원하기</ApplyText>
          </Apply>
          <InstagramText>Instagram</InstagramText>
        </ApplyBox>
      </TitleBox>
      <ImgBox>
        <ImgGap>
          <Img src="/picture/1.png" />
          <Img src="/picture/2.png" />
        </ImgGap>
        <ImgGap>
          <Img src="/picture/3.png" />
          <Img src="/picture/4.png" />
        </ImgGap>
      </ImgBox>
    </Layout>
    </>
  );
}

const Dec1 = styled.img`
  position: absolute;
  z-index: -1;
  opacity:0.7;
`

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 110px;
  justify-content:space-between;
`;

const Img = styled.img`
  width: 220px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ImgGap = styled.div`
  display: flex;
  width:100%;
  gap: 15px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 55%;
`;
const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: end;
`;
const LogoText = styled.p`
  color: #3f6b50;
  font-family: "Pretendard-Regular";
  font-size: 23.522px;
  font-style: normal;
  line-height: 26px;
  margin-bottom: 10px;
`;
const ConText = styled.p`
  color: #000;
  font-size: 26px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 5.2px;
`;
const ApplyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
`;
const Apply = styled.div`
  display: flex;
  width: 240px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 3.675px;
  border: 1.225px solid #000;
`;
const ApplyText = styled.p`
  color: #000;
  font-size: 25px;
  font-style: normal;
  line-height: normal;
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
