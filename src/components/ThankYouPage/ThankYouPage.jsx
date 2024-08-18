import { Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ThankYouPage() {
  const history = useHistory();

  return (
    <>
      <Typography variant="h2">Thank you for your Submission!</Typography>
      <Button variant="outlined" sx={{mt:10}}data-testid="next" onClick={() => history.push(`/`)}>Leave New Feedback</Button>
    </>
  );
}
