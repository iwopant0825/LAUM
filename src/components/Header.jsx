import styled from "styled-components"
export default function Header(){
    return(
        <Layout>
            <Sections>
                <SectionText>소개</SectionText>
                <img src="/Ellipse.svg"/>
                <SectionText>커리큘럼</SectionText>
                <img src="/Ellipse.svg"/>
                <SectionText>작품</SectionText>
            </Sections>
            <LogoImg src="/logo.svg"/>
            <ApplyBox>
                <ApplyButton>
                    <ApplyText>
                        지원하기
                    </ApplyText>
                </ApplyButton>
            </ApplyBox>
        </Layout>
    )
}
const Layout = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    padding: 15px 185px;
    justify-content:space-between;
`
const Sections = styled.div`
    display:flex;
    justify-content:space-between;
    width:260px;
`
const SectionText = styled.p`
    color: #000;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
`

const LogoImg = styled.img`
    width:36px;
`

const ApplyBox = styled.div`
    display:flex;
    width:260px;
    justify-content:end;
`
const ApplyButton = styled.div`
    border-radius: 21px;
    background: #3F6C51;
    display: flex;
    padding: 12px 47px;
    justify-content: center;
    align-items: center;
`
const ApplyText = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    font-family: "Pretendard-SemiBold";
`