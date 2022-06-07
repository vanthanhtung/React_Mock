import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

import "./ListingData.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllData } from "../redux/actions/actionType";

const ListingData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.languages.data);
  const loading = useSelector((state) => state.languages.loading);
  useEffect(() => {
    dispatch(fetchAllData());
  }, []);
  const colors = ["red", "blue"];
  const getColor = (param) => {
    return param ? colors[0] : colors[1];
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/detail/" + e, { state: { id: e } });
  };

  return (
    <div>
      {loading === true ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className={"subject"}>
            <h1>Mock project</h1>
          </div>
          <div>
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">
                      watchers Count
                    </StyledTableCell>
                    <StyledTableCell align="right">Language</StyledTableCell>
                    <StyledTableCell align="right">Open Issues</StyledTableCell>
                    <StyledTableCell align="right">Private</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.description}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.watchers_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.language}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.open_issues_count}
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        <b style={{ color: getColor(row.private) }}>
                          {row.private.toString()}
                        </b>
                      </StyledTableCell>
                      <StyledTableCell>
                        <div className={"actionBT"}>
                          <div>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => handleSubmit(row.id)}
                            >
                              Detail
                            </Button>
                          </div>
                          <div>
                            <Button variant="outlined" color="error">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};
export default ListingData;
