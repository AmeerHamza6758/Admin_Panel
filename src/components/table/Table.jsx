import React from 'react';
import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, TrackingID, Date, Status) {
  return { name, TrackingID, Date, Status };
}

const rows = [
  createData('Frozen yoghurt', "1749584", "02 March 2023", "Approved"),
  createData('Ice cream sandwich', "1749584", "09 July 2023", "Approved"),
  createData('Eclair', "1749584", "29 Nov 2023", "Delivered"),
  createData('Cupcake', "1749584", "02 June 2023", "Pending"),
 
];

const getStatusStyle = (status) => {
  if (status === "Approved") {
    return {
      background: 'rgb(145, 254, 159, 0.47)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable() {
  return (
    <div className='Table'>
      <h3>Recent orders</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Product Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.TrackingID}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                  <span className='status' style={getStatusStyle(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
