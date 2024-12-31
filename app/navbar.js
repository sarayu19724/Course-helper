'use client'
import Link from "next/link";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';



export default function Nav(){
   
    const router = useRouter()
    const ChangePages = () =>{
        router.push('/login')

    }
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Course Helper
            </Typography>
            <Link color="inherit" href="/login"   >
            <p>Login</p>
               </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
}