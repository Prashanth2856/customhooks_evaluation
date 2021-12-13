import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addUserError,
    addUserLoading,
    addUserSuccess,
    getTodoLoading,
    getTodoError,
    getTodoSuccess,
} from "../store/actions";
import axios from "axios";


export const Register = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((store) => store.users);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        dispatch(getTodoLoading());
        const payload = {
            status: false,
            first_name: firstName,
            last_name: lastName,
            dob: dob,
            email: email,
        };
        try {
            const { data } = await axios.get("http://localhost:3002/users", payload);
            dispatch(getTodoSuccess(data));
        } catch (err) {
            dispatch(getTodoError(err));
        }
    };

    return loading ? (
        "Please Wait"
    ) : (
        <div style={{ marginTop: "30px" }}>
            <Typography style={{ color: "white", textDecoration: "underline" }} gutterBottom variant="h4" align="center">
                User Registration Form
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 400, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Register
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form to register your details.
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid xs={12} item>
                                    <TextField onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={(e) => setDob(e.target.value)} type="date" label="Date of Birth" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button style={{ backgroundColor: "navyblue" }} onClick={async () => {
                                        dispatch(addUserLoading());
                                        const payload = {
                                            first_name: firstName,
                                            last_name: lastName,
                                            dob: dob,
                                            email: email,

                                        };
                                        try {
                                            const { data } = await axios.post(
                                                "http://localhost:3002/users",
                                                payload
                                            );
                                            dispatch(addUserSuccess(data));
                                            alert("Successfully Registered")
                                        } catch (err) {
                                            dispatch(addUserError(err));
                                            alert("Something went wrong")
                                        }
                                        //   dispatch(addUser(payload));
                                    }} type="submit" variant="contained" color="primary" fullWidth>Register</Button>
                                    {/* {data.map((e) => (
                                        <div>{e.title}</div>
                                    ))} */}
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}