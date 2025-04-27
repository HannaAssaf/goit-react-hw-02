import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const STORAGE_KEY = "feedbackStats";
function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem(STORAGE_KEY);
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) + `%` : `0%`;
  const updateFeedback = (feedbackType) => {
    setFeedback(() => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    const reset = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setFeedback(reset);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ reset }));
  };

  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
}

export default App;
