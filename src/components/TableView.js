import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableView = (props) => {
  return (
    <TableContainer sx={{ maxWidth: 750 }} component={Paper}>
      <Table sx={{ maxWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.phoneBook.map((person, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="right">{person.firstName}</TableCell>
                <TableCell align="right">{person.lastName}</TableCell>
                <TableCell align="right">{person.phoneNumber}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
