import { Box, Button, InputLabel, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CommentsPageFour() {
  const comments = useSelector((store) => store.comment);
  useEffect(() => setCommentInput(comments), []);
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      sx={{ mt: "10%" }}
    >
      <Paper
        elevation={1}
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          rowGap: 5,
        }}
      >
        <Button onClick={() => history.push(`/pageThree`)}>Go Back</Button>
        <form onSubmit={handlePageFourSubmit}>
          <InputLabel sx={{ pb: 2 }} htmlFor="comment">
            Any Comments you want to leave?
          </InputLabel>
          <TextField
            autoFocus
            inputProps={{ "data-testid": "input" }}
            id="comment"
            type="text"
            placeholder="Comment"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
        </form>
        <Button
          onClick={handlePageFourSubmit}
          variant="outlined"
          data-testid="next"
        >
          NEXT PAGE
        </Button>
      </Paper>
    </Box>
  );
}
