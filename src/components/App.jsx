import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;

// export default function App() {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return Number(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//
// }

// You clicked { clicks } times
