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
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) + `%` : `0%`;
  return (
    <>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
}

export default App;
