import styled from "styled-components"
import Home from "./pages/Home"
import Introduce from "./pages/Introduce"

function App() {
  return (
    <Layout>
      <Home/>
      <Introduce/>
    </Layout>
  )
}
const Layout = styled.div`
    width:100%;
    position:relative;
`

export default App
