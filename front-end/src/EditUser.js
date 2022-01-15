import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "./api";

const initialValue = {
  name: "",
  mobile: "",
  email: "",
  username: "",
  password: "",
  city: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, mobile, email, username, password, city } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  });

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    console.log(response);
    history.push("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Mobile</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="mobile"
          value={mobile}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="password"
          value={password}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="city"
          value={city}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
