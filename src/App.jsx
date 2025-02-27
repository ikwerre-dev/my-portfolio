import { useEffect } from "react";
import { Scroll } from "./animation";
import { Routes, Route } from "react-router-dom";
import { Home, NotFound, Spotify, Test } from "./pages";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    Scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;

/*
Honour Builds the Web!
*/
