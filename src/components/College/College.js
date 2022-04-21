import { Typography } from '@mui/material'
import React, { useState } from 'react'
import CardList from './cardList';
import CollegeTable from './CollegeTable'
import Search from './Search'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


function College() {

    const [collegeList, setCollegeList] = useState([]);
    const [toggleChecked, setChecked] = React.useState(true);

    const handleToggleChange = (event) => {
      setChecked(event.target.checked);
    };

  return (
    <div style={{marginTop:"4rem"}}>
        
        <Typography variant='h2' color="primary" margin={"2rem"}> College List </Typography>
        <div style={{margin:"2rem"}}>
            <Search setCollegeList={setCollegeList} />
        </div>
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
        />
            
        </div>
        {
            collegeList.length ?(
            <div style={{margin:"2rem"}}>
               { toggleChecked?
                (<CollegeTable collegeList={collegeList}/>)
                :
                (<CardList collegeList={collegeList}/>)
               }
            </div>):
            <Typography variant='h5' color="error" style={{margin:"2rem"}}>No Colleges Found.</Typography>
        }
        
        
    </div>
  )
}

export default College