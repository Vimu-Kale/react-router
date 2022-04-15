import { Grid } from '@material-ui/core';
import React from 'react'
import UCard from './UCard'

function UserCards() {
  let x = JSON.parse(localStorage.getItem("userData"));
console.log(x);
  return (
    <div>{
      (x === null || x.length === 0)
      ?
      <h1>User List Empty</h1>
      :
      (
        
            <Grid container >
              {
                x.map(user => (
                  <Grid item key={user.email} xs={12} md={6} lg={4}>
                    <div style={{marginTop:"7rem",display:"flex",justifyContent:"center"}}>
                      <UCard user={user}/>
                    </div>
                  </Grid>
                ))
              }
            </Grid>
        
      )
}
    </div>
  )
}

export default UserCards