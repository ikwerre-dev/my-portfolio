import { useState, useEffect } from "react";
import { SEO } from "../components";

const App = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    // Update timeOfDay when component mounts
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <>
      <SEO title="Test" />

      <div className="text-center text-xl flex flex-col items-center justify-center min-h-[100dvh] text-white">
        {timeOfDay === "morning" && <div>Good Morning!</div>}
        {timeOfDay === "afternoon" && <div>Good Afternoon!</div>}
        {timeOfDay === "evening" && <div>Good Evening!</div>}
      </div>
    </>
  );
};

export default App;
