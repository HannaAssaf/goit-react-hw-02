import Feedback from "../Feedback/Feedback";

export default function Options({ feedback, setFeedback }) {
  const handleFeedback = (feedbackType) => {
    setFeedback((type) => ({
      ...type,
      [feedbackType]: type[feedbackType] + 1,
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
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
