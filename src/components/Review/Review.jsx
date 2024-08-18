import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Review() {
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comment = useSelector((store) => store.comment);
  const history = useHistory();

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/feedback`, { feeling, understanding, comment, support })
      .then((res) => history.push(`/thankyou`))
      .catch((err) => console.log(`Error Posting feedback!`, err));
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <button onClick={() => history.push(`/pageFour`)}>Go Back</button>
      <table>
        <tbody>
          <tr>
            <td>Feelings:</td>
            <td>{feeling}</td>
          </tr>
          <tr>
            <td>Understanding:</td>
            <td>{understanding}</td>
          </tr>
          <tr>
            <td>Support:</td>
            <td>{support}</td>
          </tr>
          <tr>
            <td>Comments:</td>
            <td>{comment}</td>
          </tr>
        </tbody>
      </table>
      <button data-testid="next" onClick={handleFeedbackSubmit}>
        COMPLETE
      </button>
    </div>
  );
}
