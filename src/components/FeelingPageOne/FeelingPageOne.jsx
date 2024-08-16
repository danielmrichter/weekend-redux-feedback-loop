import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function FeelingPageOne() {
  const [feelingInput, setFeelingInput] = useState(``);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlePageOneSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_FEELING",
      payload: feelingInput,
    });
    history.push(`/pageTwo`);
  };

  return (
    <form onSubmit={handlePageOneSubmit}>
      <input
        id="feeling"
        // required
        data-testid="input"
        type="number"
        placeholder="Number 1-6"
        value={feelingInput}
        onChange={(e) => setFeelingInput(e.target.value)}
      />
      <label htmlFor="feeling">How are you feeling today?</label>
      <button data-testid="next">NEXT PAGE</button>
    </form>
  );
}
