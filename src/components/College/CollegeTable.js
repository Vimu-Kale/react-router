import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog } from '@material-ui/core';

const columns = [
  { field: 'id', 
    headerName: 'Serial No.', 
    width: 90 
  },
  {
    field: 'name',
    headerName: 'University Name',
    width: 150,
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  },
];

// const rows = [];

const CollegeTable = (props) => {

    
    const [dialogOpen, setOpen] = React.useState(false)
    const [college, setCollege] = React.useState({})


    const userList = props.collegeList;
    const rows = userList.map((v,i)=>({id:i+1,...v}));
    console.log(rows);
  return (
    <div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        onRowClick={(e)=>{setCollege(e.row);setOpen(true)}}
      />
      <Dialog open={dialogOpen} onClose={()=>{setOpen(false)}}>
        <div style={{padding:"80px", width: "400px"}}>
            <div><h2>College Details</h2></div>
            <div><h3>{college.name}</h3></div>
            <div><h3>{college.country}</h3></div>
        </div>
      </Dialog>
    </div>
    
  );
}

export default CollegeTable;