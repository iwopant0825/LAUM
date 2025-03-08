import styled from "styled-components";

export default function Footer() {
  return (
    <Layout>
        <ApplyBox>
            <ApplyText>지원기간 3월 9일(일) ~ 3월 15일(토) 23시 59분</ApplyText>
        </ApplyBox>
        <FooterBox>
            <LogoImg src="/textlogowhite.svg"/>
            <FooterText>부장 <FooterNameText>이도경</FooterNameText>&nbsp;&nbsp;부부장 <FooterNameText>이시은</FooterNameText></FooterText>
            <FooterText>Designed & Developed 차호림</FooterText>
            <FooterText>ⓒ 2025 LAUM. All rights reserved.</FooterText>
        </FooterBox>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 80px 180px;
  background-color: #3f6c51;
  justify-content:space-between;
  @media (max-width: 1200px) {
    padding: 30px 20px;
    flex-direction: column;
    align-items:center;
    gap:40px;
  }
`;

const LogoImg = styled.img`
    width:100px;
`;
const ApplyBox = styled.div`
  border-radius: 30px;
  display: flex;
  width: 400px;
  height: 130px;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  background: rgba(255, 252, 237, 0.28);
  @media (max-width: 1200px) {
    width: 400px;
    height: 90px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 90px;
  }
`;
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
    justify-content:space-between;
    align-items:end;
@media (max-width: 1200px) {
    align-items:center;
    gap:10px;
  }
`;
const ApplyText = styled.span`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  line-height: 150%; /* 42.881px */
  letter-spacing: 3.43px;
`;
const FooterText = styled.span`
  color: #fffced;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;
const FooterNameText = styled.span`
  color: #fffced;
  font-size: 1rem;
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  line-height: normal;
`;
