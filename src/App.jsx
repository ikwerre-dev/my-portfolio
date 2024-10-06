import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from "./components/Header";
import Banner from "./components/Banner";
import AnimatedCursor from "react-animated-cursor"
import AboutMe from "./components/About";
import Testimonials from "./components/Testimonials";
import Educations from "./components/Education";
import Experiences from "./components/Experience";
import Works from "./components/Works";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: .5,
      easing: (t) => t,  // Linear easing for consistent speed
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <AnimatedCursor
        innerSize={15}
        outerSize={20}
        color='192, 132, 252'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <Header />
      <Banner />
      <AboutMe />
      <Testimonials />
      <Experiences />
      <Educations />
      <Works />
    </div>
  );
}

export default App;
