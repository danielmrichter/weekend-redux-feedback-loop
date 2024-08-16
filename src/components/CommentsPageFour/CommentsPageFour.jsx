import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CommentsPageFour() {
  const [commentInput, setCommentInput] = useState(``);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlePageFourSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_COMMENT",
      payload: commentInput,
    });
    history.push(`/review`);
  };
  return (
    <form onSubmit={handlePageFourSubmit}>
      <label htmlFor="comment">Any Comments you want to leave?</label>
      <input
        data-testid="input"
        id="comment"
        type="text"
        placeholder="Comment"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
      />
      <button data-testid="next">NEXT PAGE</button>
    </form>
  );
}
