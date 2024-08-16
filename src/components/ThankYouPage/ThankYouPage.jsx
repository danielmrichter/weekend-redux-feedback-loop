import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ThankYouPage() {
  const history = useHistory();

  return (
    <>
      <h1>Thank you for your Submission!</h1>
      <button data-testid="next" onClick={() => history.push(`/`)}>Leave New Feedback</button>
    </>
  );
}
