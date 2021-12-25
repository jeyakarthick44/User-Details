import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, TableContainer } from '@material-ui/core'
import { getUsers, deleteUser } from './api';
import { Link } from 'react-router-dom';
 
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }


    return (
        <div>
            <Link to="/add" style={{ textDecoration: "none" }}>
                <Button style={{ fontSize: "25px", marginLeft: "45%", marginTop: "5%", backgroundColor: "blue", color: "whiteSmoke" }} variant="contained">Add User</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user,index) => (
                        <TableRow className={classes.row} key={user.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.mobile}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.city}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AllUsers;