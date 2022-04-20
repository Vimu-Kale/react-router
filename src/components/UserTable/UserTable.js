import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { Dialog } from '@material-ui/core';
// import UCard from '../UserCards/UCard';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid } from '@mui/material';
import UserDialogue from '../UserDialogue/UserDialogue';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height:400,
  overflow:"scroll",
  bgcolor: 'background.paper',
  boxShadow: 24,
  // borderRadius:"25px",
  p: 4,
};



const dateFormat = (params) =>{
  const d = new Date(params.value);
  const date= d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
  return date;
}

const hobbiesFormat = (params) =>{
  const hobbies = params.value;
  return hobbies.map((x) => x.label).join(', ');
}

const genderFormat = (params) =>{
  const gender = params.value ;
  return gender.toUpperCase();
}



const columns = [
  // {
  //   field:'id',
  //   headerName:'ID',
  //   width:150,
  //   editable:true,
  // },
  {
    field: 'fullname',
    headerName: 'Full Name',
    width: 150,
    editable: true,
    valueFormatter:(params)=>{
      return params.value.toUpperCase();
    },
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: true,
    valueFormatter: genderFormat,
  },
  {
    field: 'dob',
    headerName: 'Birth Date',
    width: 150,
    editable: true,
    type:'date',
    valueFormatter: dateFormat,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 150,
    editable: true,
  },
  {
    field: 'hobbies',
    headerName: 'Hobbies',
    width: 150,
    editable: true,
    valueFormatter: hobbiesFormat,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  },
  {
    field: 'college',
    headerName: 'College',
    width: 150,
    editable: true,
  },
  {
    field: 'shortbio',
    headerName: 'Short Bio',
    width: 150,
    editable: true,
  },
  {
    field: 'longbio',
    headerName: 'Long Bio',
    width: 150,
    editable: true,
  },
];

// const rows = [];

const UserTable = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose =() => setOpen(false);


    // console.log(props.userList);
    // const [dialogOpen, setOpen] = React.useState(false)
    const [user, setUser] = React.useState({})


    
    const rows = props.userList;
    // console.log(rows);
  return (
    <div style={{ height: 400, margin:"2rem"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        onRowClick={(e)=>{setUser(e.row);setOpen(true)}}
      />
      {/* <Dialog  open={dialogOpen} onClose={()=>{setOpen(false)}}>
        <div style={{padding:"80px", width: "400px"}}>
            <div><h2>College Details</h2></div>
            <div><h3>{college.name}</h3></div>
            <div><h3>{college.country}</h3></div>
        </div>
        <UCard user={college}/>
      </Dialog> */}

      <Grid container>
      <Grid item md={3}> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box 
          sx={style} 
          >
              <UserDialogue data={user} setOpen={setOpen}/>
          </Box>
        </Fade>
      </Modal>
      </Grid>
      </Grid>




    </div>
    
  );
}

export default UserTable;