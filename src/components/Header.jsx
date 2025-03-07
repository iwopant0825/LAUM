import styled from "styled-components"
export default function Header(){
    return(
        <Layout>
            <Sections>
                <SectionText on={true}>소개</SectionText>
                <img src="/Ellipse.svg"/>
                <SectionText on={false}>커리큘럼</SectionText>
                <img src="/Ellipse.svg"/>
                <SectionText on={false}>작품</SectionText>
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
    background-color:rgb(255, 255, 255);
    width:100%;
    display:flex;
    align-items:center;
    position:fixed;
    z-index:99999;
    padding: 15px 185px;
    justify-content:space-between;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.33);
`
const Sections = styled.div`
    display:flex;
    justify-content:space-between;
    width:260px;
`
const SectionText = styled.p`
    color: #000;
    font-size: 17px;
    font-style: normal;
    line-height: normal;
    opacity: ${props => props.on ? 1 : 0.3};
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
    border-radius: 17px;
    background: #3F6C51;
    display: flex;
    padding: 12px 47px;
    justify-content: center;
    align-items: center;
`
const ApplyText = styled.p`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    font-family: "Pretendard-SemiBold";
`