import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import UserCards from '../UserCards/UserCards';
function UserList() {
  const navigate = useNavigate();

  const handleOnClear = () =>{
    window.localStorage.setItem("userData",JSON.stringify([]));
    navigate('/');
  }

  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}}> 
          <Button 
            variant="contained" 
            color="success" 
            sx={{height:"3rem",width:"20rem"}}
            onClick={()=>{navigate('/userdetailsform')}}  
          >
              Add User Details
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            sx={{height:"3rem",width:"20rem"}}
            onClick={()=>{
              handleOnClear();
            }}
          >
              Clear User List
          </Button>         
      </div>
      
      <UserCards/>
      
    </div>
  )
}

export default UserList