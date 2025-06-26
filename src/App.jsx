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
            <main>
              <section id="home" aria-label="라움 동아리 소개">
                <Home />
              </section>
              <section id="introduce" aria-label="라움 동아리 상세 소개">
                <Introduce />
              </section>
              <section id="curriculum" aria-label="라움 동아리 커리큘럼">
                <Curriculum />
              </section>
              <section id="prize" aria-label="라움 동아리 수상 실적">
                <Prize />
              </section>
            </main>
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
