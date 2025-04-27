import Feedback from "../Feedback/Feedback";

export default function Options({ feedback, setFeedback }) {
  const updateFeedback = (feedbackType) => {
    setFeedback(() => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
