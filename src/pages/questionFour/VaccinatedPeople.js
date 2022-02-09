import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from './SearchBar';

const VaccinatedPeople = ({ data, isLoading, error }) => {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Vaccine Date</TableCell>
              <TableCell align="right">Vaccine Type</TableCell>
              <TableCell align="right">NHS Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((person) => (
              <TableRow
                key={person.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {person.firstName}  {person.lastName}
                </TableCell>
                <TableCell align="right">{person.vaccineDate}</TableCell>
                <TableCell align="right">{person.vaccineType}</TableCell>
                <TableCell align="right">{person.nhsNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default VaccinatedPeople