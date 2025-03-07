import styled from "styled-components"
import Home from "./pages/Home"
import Introduce from "./pages/Introduce"
import Curriculum from "./pages/Curriculum"
import Prize from "./pages/Prize"

function App() {
  return (
    <Layout>
      <Home/>
      <Introduce/>
      <Curriculum/>
      <Prize/>
    </Layout>
  )
}
const Layout = styled.div`
    width:100%;
    position:relative;
`

export default App
