import { Box, Button, InputLabel, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function UnderstandingPageTwo() {
  const understanding = useSelector((store) => store.understanding);
  useEffect(() => setUnderstandingInput(understanding), []);
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
        <Button onClick={() => history.push(`/`)}>Go Back</Button>
        <form onSubmit={handlePageTwoSubmit}>
          <InputLabel sx={{ pb: 2 }} htmlFor="understanding">
            How well are you understanding the content?
          </InputLabel>
          <TextField
            autoFocus
            inputProps={{ "data-testid": "input" }}
            id="understanding"
            required
            type="number"
            placeholder="Number 1-6"
            value={understandingInput}
            onChange={(e) => setUnderstandingInput(e.target.value)}
          />
        </form>
        <Button
          onClick={handlePageTwoSubmit}
          variant="outlined"
          data-testid="next"
        >
          NEXT PAGE
        </Button>
      </Paper>
    </Box>
  );
}
