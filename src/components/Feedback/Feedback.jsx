export default function Feedback({ feedback: { good, neutral, bad } }) {
  //   const updateFeedback = (feedbackType) => {
  // Тут використовуй сеттер, щоб оновити стан
  //   };
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) + `%` : `0%`;

  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}</p>
    </div>
  );
}
