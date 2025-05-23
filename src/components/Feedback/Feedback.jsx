export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <>
      {totalFeedback > 0 && (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}</p>
        </div>
      )}
    </>
  );
}
