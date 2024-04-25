import Header from "./header/header";
import Hero from "./hero/hero";
import Participation from "./participation/participation";
import News from "./news/news";
import Faq from "./faq/faq";
import Footer from "./footer/footer";
import { useState } from "react";
function App() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const render = viewWidth >= 768 ? true : false;
  const resizeWidthWindow = () => {
    setViewWidth(window.innerWidth);
  };
  window.addEventListener("resize", resizeWidthWindow);
  return (
    <>
      <Header render={render} />
      <Hero render={render} />
      <Participation render={render} />
      <News render={render} />
      <Faq render={render} />
      <Footer />
    </>
  );
}

export default App;
