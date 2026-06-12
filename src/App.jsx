import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ChatBot = lazy(() => import("./components/ChatBot"));

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24 flex items-center justify-center text-white/50">Loading section...</div>}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ChatBot />
      </Suspense>
      <CustomCursor />
    </div>
  );
}

export default App;
