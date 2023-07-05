import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Header from "./containers/header/Header";
import WhatIsGPT from "./containers/whatIsGPT/WhatIsGPT";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatIsGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
