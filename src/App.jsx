import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CareerTimeline from "./components/CareerTimeline";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import Architecture from "./pages/Architecture";
import AboutMe from "./pages/AboutMe";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <AboutMe />
        <Skills />
        <Projects />
        <Architecture />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;
