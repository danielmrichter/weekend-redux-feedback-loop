import { Box, Button, InputLabel, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SupportedPageThree() {
  const supported = useSelector((store) => store.support);
  useEffect(() => setSupportedInput(supported), []);
  const [supportedInput, setSupportedInput] = useState(``);
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
        <Button onClick={() => history.push(`/pageTwo`)}>Go Back</Button>
        <form onSubmit={handlePageThreeSubmit}>
          <InputLabel sx={{ pb: 2 }} htmlFor="support">
            How well are you being supported?
          </InputLabel>
          <TextField
            autoFocus
            inputProps={{ "data-testid": "input" }}
            id="support"
            required
            type="number"
            placeholder="Number 1-6"
            value={supportedInput}
            onChange={(e) => setSupportedInput(e.target.value)}
          />
        </form>
        <Button
          onClick={handlePageThreeSubmit}
          variant="outlined"
          data-testid="next"
        >
          NEXT PAGE
        </Button>
      </Paper>
    </Box>
  );
}
