import { Paper, Typography, Box, TextField, Button } from '@mui/material';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetailsForm() {
  const navigate = useNavigate();

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [comments,setComments] = useState('');


  const setUser = (data) => {
    let x = localStorage.getItem("userData");
    console.log(x);
    if(x){
      let a = [];
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem('userData')) || [];
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(data);
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('userData', JSON.stringify(a));
    }
    else{
      let a = [];
      a.push(data);
      localStorage.setItem('userData', JSON.stringify(a));
    }
  }


  const handleOnSubmit = () => {
    const userDetails={
      firstName:firstName,
      lastName:lastName,
      email:email,
      subject:subject,
      comments:comments,
    };

    console.log(userDetails);

    setUser(userDetails);

    navigate('/');
  }



  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }}>     
      <Typography variant='h3' color="primary">User Details</Typography>
      <Typography variant='h6' color="" onClick={()=>{navigate('/')}}>Back To Home</Typography>
      <br/>
      <Box
      sx={{
        display: "flex",
        alignItems:"center",
        "& > :not(style)": {
          m: 1,
          width: "20rem",
          height: "auto",
          borderRadius: "25px",
          padding:"2rem",
          
        }
      }}
    >
      <Paper elevation={24}>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem",margin:"1rem"}}>
            <TextField 
              id="outlined-basic" 
              label="First Name" 
              variant="outlined"
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value);
              }}  
            />
            <TextField 
              id="outlined-basic" 
              label="Last Name" 
              variant="outlined"
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value);
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Subject" 
              variant="outlined" 
              value={subject}
              onChange={(e)=>{
                setSubject(e.target.value);
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Comments" 
              variant="outlined" 
              value={comments}  
              onChange={(e)=>{
                setComments(e.target.value);
              }}
            />
            <Button variant="contained" onClick={()=>{handleOnSubmit()}}>Submit</Button>
        </div>
      </Paper>
    </Box>
    </div>
  )
}

export default UserDetailsForm