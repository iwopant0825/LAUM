import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Curriculum from "./pages/Curriculum";
import Prize from "./pages/Prize";
import Footer from "./pages/Footer";
import ScrollProgress, { PageLoader, ScrollToTopButton, PageTransition } from "./components/ScrollEffects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <PageLoader isLoading={isLoading} onComplete={handleLoadingComplete} />
      {!isLoading && (
        <Layout>
          <ScrollProgress />
          <Header />
          <PageTransition>
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
          </PageTransition>
          <ScrollToTopButton />
        </Layout>
      )}
    </>
  );
}
const Layout = styled.div`
  width: 100%;
  position: relative;
`;

export default App;
