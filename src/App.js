import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [progressbar, setProgressBar] = useState(0);
  function calculateScrollDistance() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setProgressBar(scrollPostion);
  }
  function progreBarTrigger() {
    window.onscroll = () => {
      calculateScrollDistance();
    };
  }

  useEffect(() => {
    progreBarTrigger();
    return progreBarTrigger();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="scrollprogression">
        <div
          className="innerscrollprogression"
          style={{ width: progressbar + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
