import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function UnderstandingPageTwo() {
  const [understandingInput, setUnderstandingInput] = useState(``);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlePageTwoSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: understandingInput,
    });
    history.push(`/pageThree`);
  };

  return (
    <form onSubmit={handlePageTwoSubmit}>
        <label htmlFor="understanding">How well are you understanding the content?</label>
      <input
        id="understanding"
        // required
        data-testid="input"
        type="number"
        placeholder="Number 1-6"
        value={understandingInput}
        onChange={(e) => setUnderstandingInput(e.target.value)}
      />
      <button data-testid="next">NEXT PAGE</button>
    </form>
  );
}
