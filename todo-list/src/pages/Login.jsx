import { Button, Grid, Input, Paper, Stack, Typography } from '@mui/material';

import React, { useState } from 'react'
import { Input_component } from '../conponents/Input';
import { data } from '../utils/crediential_data';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const [userData, setUserData] = useState({});
    const navigate = useNavigate()

    const onChangeHandle = (e)=>{
        const {value,id} = e.target
        setUserData({ ...userData, [id]: value });
        console.log(userData)

       
    }
    const submitHandle = (e)=>{
      e.preventDefault();
        localStorage.setItem('isLoggedIn',true)
        navigate('/');
     
    }
  return (
    <Grid container className='min-h-screen flex justify-center items-center text-center  ' >
     <Grid  className='mb-6' item  >
      <form className='flex-col  '
    onSubmit={submitHandle}
    >
       <Typography className='flex  font-bold items-center justify-center' variant="h4" gutterBottom>
            Login
          </Typography>
      <div className='flex flex-col-reverse' >
      <Input_component
        required={true}
        placeholder={"Password"}
        type={"password"}
        id={"password"}
        onChange={onChangeHandle}
      />
        <Input_component 
        placeholder={"username"}
        type={"username"}
        id={"username"}
        required={true}
        onChange={onChangeHandle}
      />
      </div>
      <Button  type="submit" sx={{backgroundColor:"blue",marginTop:"20px"}}
        variant="contained">
       Login
       </Button>
    </form>
      </Grid>
   
    </Grid>
  )
}
