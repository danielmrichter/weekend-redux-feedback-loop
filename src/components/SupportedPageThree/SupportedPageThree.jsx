import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function SupportedPageThree() {
    const [supportedInput, setsupportedInput] = useState(``);
    const history = useHistory();
    const dispatch = useDispatch();
    const handlePageThreeSubmit = (e) => {
      e.preventDefault();
      dispatch({
        type: "SET_SUPPORT",
        payload: supportedInput,
      });
      history.push(`/pageFour`);
    };
    return (
      <form onSubmit={handlePageThreeSubmit}>
        <label htmlFor="support">How well are you being supported?</label>
        <input
          id="support"
          // required
          data-testid="input"
          type="number"
          placeholder="Number 1-6"
          value={supportedInput}
          onChange={(e) => setsupportedInput(e.target.value)}
        />
        <button data-testid="next">NEXT PAGE</button>
      </form>
    );
}