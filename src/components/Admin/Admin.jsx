import { Button, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => getReviews, []);

  const getReviews = () => {
    axios
      .get(`/api/feedback`)
      .then((res) => setFeedback(res.data))
      .catch((err) => console.log(`Error getting feedback: `, err));
  };

  const markForReview = (id) => {
    axios
      .patch(`/api/feedback/${id}`)
      .then((res) => getReviews())
      .catch((err) => console.log(`Error marking ${id} for review:`, err));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Feeling</TableCell>
            <TableCell align="right">Understanding</TableCell>
            <TableCell align="right">Supported</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Mark For Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedback
            .map((e) => (
              <TableRow
                key={e.id}
                sx={e.flagged ? {bgcolor: 'red'} : {}}
              >
                <TableCell component="th" scope="row">
                  {e.flagged ? "Marked for Review" : ""}
                </TableCell>
                <TableCell align="right">{e.feeling}</TableCell>
                <TableCell align="right">{e.understanding}</TableCell>
                <TableCell align="right">{e.support}</TableCell>
                <TableCell align="right">{e.comments}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => markForReview(e.id)}>
                    Flag for Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    //   <tbody>
    //     {feedback
    //       .filter((i) => !i.flagged)
    //       .map((e) => {
    //         return (
    //           <tr>
    //             <td>{e.feeling}</td>
    //             <td>{e.understanding}</td>
    //             <td>{e.support}</td>
    //             <td>{e.comments}</td>
    //             <td>
    //               <button onClick={() => markForReview(e.id)}>
    //                 Flag for Review
    //               </button>
    //             </td>
    //             <td>{e.flagged ? "Flagged" : "Not Flagged"}</td>
    //           </tr>
    //         );
    //       })}
    //   </tbody>
    // </table>
  );
}
