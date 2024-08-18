import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CommentsPageFour() {
  const comments = useSelector(store => store.comment)
  useEffect(() => setCommentInput(comments), [])
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
    <>
    <button onClick={() => history.push(`/pageThree`)}>Go Back</button>
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
    </>
  );
}
