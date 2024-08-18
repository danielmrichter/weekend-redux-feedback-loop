import { Box, Button, InputLabel, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function FeelingPageOne() {
  const feeling = useSelector((store) => store.feeling);
  useEffect(() => setFeelingInput(feeling), []);
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
        <form onSubmit={handlePageOneSubmit}>
          <InputLabel sx={{ pb: 2 }} htmlFor="feeling">
            How are you feeling today?
          </InputLabel>
          <TextField
            autoFocus
            inputProps={{ "data-testid": "input" }}
            id="feeling"
            required={true}
            type="number"
            placeholder="Number 1-6"
            value={feelingInput}
            onChange={(e) => setFeelingInput(e.target.value)}
          />
        </form>
        <Button
          onClick={handlePageOneSubmit}
          variant="outlined"
          data-testid="next"
        >
          NEXT PAGE
        </Button>
      </Paper>
    </Box>
  );
}
