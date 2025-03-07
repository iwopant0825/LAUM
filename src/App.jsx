import styled from "styled-components";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Curriculum from "./pages/Curriculum";
import Prize from "./pages/Prize";
import Footer from "./pages/Footer";

function App() {
  return (
    <Layout>
      <Home />
      <div id="introduce">
        <Introduce />
      </div>
      <div id="curriculum">
        <Curriculum />
      </div>
      <div id="prize">
        <Prize />
      </div>
      <Footer />
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  position: relative;
`;

export default App;
