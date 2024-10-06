import Header from "./components/Header";
import Banner from "./components/Banner";
import AnimatedCursor from "react-animated-cursor"
import AboutMe from "./components/About";

function App() {
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
    </div>
  );
}

export default App;
