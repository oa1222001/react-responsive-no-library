import "./App.css";
import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import Features from "./containers/features/Features";
import WhatGP3 from "./containers/whatGPT3/WhatGPT3";
import Header from "./containers/header/Header";
import CTA from "./components/cta/CTA";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      {
        //CTA = click to action
      }
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
