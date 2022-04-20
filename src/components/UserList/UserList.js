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
    <div style={{marginTop:"1rem",textAlign:"center"}}>
      <div > 
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