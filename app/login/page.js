'use client'
import React from "react";
import { Grid, TextField } from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function Login(){
   

    return(
        <>
        <div className="container" style={{ width:'100%', height:'1160px',marginTop:'-400px'}}>
        <div className="box" style={{alignContent:'center',zIndex:"1000"}}>
            <h1 style={{marginBottom:'20px'}}>Login</h1>
            <form style={{width:'400px',height:'500px'}}>
                <Grid container spacing={5}>
                   <Grid  item xs={12}>
                    <TextField 
                     label="Username*"
                     variant="outlined"
                     fullWidth
                     
                    />
                   </Grid>
                   <Grid item xs={12}>
                    <TextField 
                     label="Password*" 
                     variant="outlined"
                     fullWidth
                     type="password"
                    />
                   </Grid>
                </Grid>
                <FormControlLabel  control={<Checkbox />} label="Remember me" />
                <Button type="submit" style={{marginTop:'100px'}}>Login</Button>
            </form>
        </div>
        </div>
    </>
    );
}