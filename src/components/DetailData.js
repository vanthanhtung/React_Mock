import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllData, fetchById } from "../redux/actions/actionType";
import { useParams } from "react-router";

const DetailData = () => {
  const dispatch = useDispatch();
  const idRequest = useParams();
  const idParam = idRequest.id;

  const data = useSelector((state) => {
    return state.languages.data.find((e) => e.id == idParam);
  });
  const loading = useSelector((state) => state.languages.loading);
  useEffect(() => {
    dispatch(fetchAllData(idParam));
  }, []);

  const navigate = useNavigate();
  const handleBackPage = () => {
    return navigate(-1);
  };
  // const data = languages.find((e) => e.id === idParam);
  // console.log(data);

  return (
    <div>
      {loading === true ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className={"subject"}>
            <h1>Detail</h1>
          </div>
          <div>
            {!data ? (
              <h1 style={{ color: "red" }}>Data not found</h1>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Watchers Count</TableCell>
                    <TableCell align="right">Language</TableCell>
                    <TableCell align="right">Open Issues</TableCell>
                    <TableCell align="right">Private</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={data?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data?.id}
                    </TableCell>
                    <TableCell align="right">{data?.name}</TableCell>
                    <TableCell align="right">{data?.description}</TableCell>
                    <TableCell align="right">{data?.watchers_count}</TableCell>
                    <TableCell align="right">{data?.language}</TableCell>
                    <TableCell align="right">
                      {data?.open_issues_count}
                    </TableCell>
                    <TableCell align="right">
                      {data?.private?.toString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Button variant="contained" onClick={handleBackPage}>
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailData;
