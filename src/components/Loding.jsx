import styled from "styled-components"
import { motion } from "framer-motion"

export default function Loding(){
    return(
        <Layout>
            <BlinkingImage 
                src="/logo.svg"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            />
            <span>로딩중</span>
        </Layout>
    )
}
const Layout = styled.div`
    width:100%;
    height:100dvh;
    display: flex;
    align-items:center;
    flex-direction:column;
    gap:10px;
    justify-content:center;
`

const BlinkingImage = styled(motion.img)`
    // 스타일을 추가할 수 있습니다.
`