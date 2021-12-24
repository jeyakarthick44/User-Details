import { Button } from '@material-ui/core';
import { useEffect,useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getImageListItemBarUtilityClass } from '@mui/material';
import { Link } from "react-router-dom";
// import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 32839838444, "karthdsdgisdgdgmail", 24, 4,"vSDVVVSsv  "),
//   createData('Frozen yoghurt', 32839838444, "kartffFhdsgmail", 24, 4,"sdsxc x c d"),
//   createData('Frozen yoghurt', 32839838444, "karthVsdvsdvdsgmail", 24, 4,"scvcv dsd"),
//   createData('Frozen yoghurt', 32839838444, "karthdVDSVDSVSFDVSvsFVVVSDsgmail", 24, 4,"sdsd"),
//   createData('Frozen yoghurt', 32839838444, "karSDVVsFvfsvthdsgmail", 24, 4,"sdsd"),
//   createData('Frozen yoghurt', 32839838444, "kartSDVsfvfvhdsgmail", 24, 4,"sdsd"),
// ];




const Home = () => {

  const [data,setData] = useState([])

const getUsers = async() => {
  // const response = await axios.get('http://localhost:5000/users')
  //   setData(response.data.0[1].name)

    fetch('http://localhost:5000/users')
  .then(res => res.json()) 
  .then(data => console.log(data))


}

useEffect(() => {
  getUsers()
}, [])


    return (
        <div>
      <Link to="/adduser" style={{ textDecoration:"none"}}>
      <Button style={{ fontSize: "25px", marginLeft: "45%", marginTop: "5%", backgroundColor: "blue", color: "whiteSmoke" }} variant="contained">Add User</Button>
      </Link>
      <TableContainer component={Paper} style={{ width: 1600,margin: 'auto',marginTop:60}}>
        <Table sx={{ minWidth: 750 }}  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{fontSize:25}} align="center">Index</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">Name</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">Mobile</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">Email</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">Username</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">Password</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center">City</StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center"></StyledTableCell>
              <StyledTableCell style={{fontSize:25}} align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.forEach((item,index) => (
                // data.map((items) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="center">{item.mobile}</StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">{item.username}</StyledTableCell>
                <StyledTableCell align="center">{item.password}</StyledTableCell>
                <StyledTableCell align="center">{item.city}</StyledTableCell>
                <Link to="/updateuser" >
                    <StyledTableCell align="center"><Button variant="contained" style={{backgroundColor:"blue",color:"whitesmoke"}}>Edit</Button></StyledTableCell>
                </Link>
                <StyledTableCell align="center"><Button variant="contained" style={{backgroundColor:"red",color:"whitesmoke"}}>Delete</Button></StyledTableCell>
                </StyledTableRow>
            // ))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</div>
    );
  }

export default Home
