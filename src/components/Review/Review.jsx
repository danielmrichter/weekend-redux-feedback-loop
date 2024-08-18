import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Review() {
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comment = useSelector((store) => store.comment);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/feedback`, { feeling, understanding, comment, support })
      .then((res) => {
        dispatch({ type: "CLEAR" });
        history.push(`/thankyou`);
      })
      .catch((err) => console.log(`Error Posting feedback!`, err));
  };

  return (
    <Box display='flex' alignContent='center' justifyContent='center'>
      <Paper elevation={2}>
        <Typography sx={{p:5}} variant="h5">Review Your Feedback</Typography>
        <Button onClick={() => history.push(`/pageFour`)}>Go Back</Button>
        <List>
          <ListItem alignItems="center">Feelings: {feeling}</ListItem>
          <ListItem>Understanding: {understanding}</ListItem>
          <ListItem>
            <Typography>Support: {support}</Typography>
          </ListItem>
          <ListItem>Comments: {comment}</ListItem>
        </List>
        <Button data-testid="next" onClick={handleFeedbackSubmit}>
          COMPLETE
        </Button>
      </Paper>
    </Box>
  );
}
