import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import UCard from './UCard'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import UserTable from '../UserTable/UserTable';


function UserCards() {

  const [x,setX]=useState([]);
  const [toggleChecked, setChecked] = React.useState(true);

    

  useEffect(()=>{
    let userlist = JSON.parse(localStorage.getItem("userData"));
    if(userlist){
      setX(userlist.reverse());
    }
    
  },[x]);
  
  const handleToggleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div style={{margin:"2rem"}}>
        
        <FormControlLabel
        
         control={
            <Switch
                checked={toggleChecked}
                onChange={handleToggleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
         }
          label="Toggle Between Table View & Card View"
          labelPlacement='end'
        />
          
        </div>
      {
        toggleChecked?(
          (x === null || x.length === 0)
          ?
            (<h1>User List Empty</h1>)
            :
          (<UserTable userList={x}/>)
        ):(
            (x === null || x.length === 0)
            ?
            <h1>User List Empty</h1>
            :
            (
              <div style={{margin:"2rem"}}>
                  <Grid container spacing={2} justifyContent="center" alignItems='center'>
                    {
                      x.map(user => (
                        <Grid item key={user.id} xs={12} md={6} lg={3} style={{display:"flex",justifyContent:"center"}}>
                            <UCard key={user.id} user={user}/>
                        </Grid>
                      ))
                    }
                  </Grid>
              </div>
            )
        )
      }
    </div>
  )
}

export default UserCards