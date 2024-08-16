import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => getReviews, []);

  const getReviews = () => {
    axios
      .get(`/api/feedback`)
      .then((res) => setFeedback(res.data))
      .catch((err) => console.log(`Error getting feedback: `, err));
  };

  const markForReview = (id) => {
    axios
      .patch(`/api/feedback/${id}`)
      .then((res) => getReviews())
      .catch((err) => console.log(`Error marking ${id} for review:`, err));
  };
  return (
    <table>
      <thead>
        <tr>
          <td>Feeling</td>
          <td>Understanding</td>
          <td>Supported</td>
          <td>Comments</td>
          <td>Mark For Review</td>
        </tr>
      </thead>
      <tbody>
        {feedback
          .filter((i) => i.flagged)
          .map((e) => {
            return (
              <tr>
                <td>{e.feeling}</td>
                <td>{e.understanding}</td>
                <td>{e.support}</td>
                <td>{e.comments}</td>
                <td>
                  <button onClick={() => markForReview(e.id)}>
                    Flag for Review
                  </button>
                </td>
                <td>{e.flagged ? "Flagged" : "Not Flagged"}</td>
              </tr>
            );
          })}
        {feedback
          .filter((i) => !i.flagged)
          .map((e) => {
            return (
              <tr>
                <td>{e.feeling}</td>
                <td>{e.understanding}</td>
                <td>{e.support}</td>
                <td>{e.comments}</td>
                <td>
                  <button onClick={() => markForReview(e.id)}>
                    Flag for Review
                  </button>
                </td>
                <td>{e.flagged ? "Flagged" : "Not Flagged"}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
