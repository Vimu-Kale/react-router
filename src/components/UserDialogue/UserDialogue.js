import { Button, Grid, Modal, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import UserUpdate from '../UserUpdate/UserUpdate';


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

function UserDialogue(props) {

    const d = new Date(props.data.dob);
    const date= d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
    
    const hobbies = props.data.hobbies;
    const stringHobbies = hobbies.map((x) => x.label).join(', ');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose =() => setOpen(false);


    const handleOnDelete = () =>{
        let users = JSON.parse(localStorage.getItem("userData"));
        console.log(users);
        
              for (let i = 0; i < users.length; i++) {
                console.log(users[i]);
                  if (users[i].id === props.data.id) {
    
                      users.splice(i, 1);
                      localStorage.setItem('userData', JSON.stringify(users));
                      alert("User Details Deleted");
                
                  }
              }
      }

  return (
    
        <Grid container spacing="1rem">
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Full Name
                    </Typography>
                    {props.data.fullname}
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Birth Date
                    </Typography>
                    { date }
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Gender
                    </Typography>
                    {props.data.gender.toUpperCase()}
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Country
                    </Typography>
                    {props.data.country}
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Address
                    </Typography>
                    {props.data.address}
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Hobbies
                    </Typography>
                    {stringHobbies}
                </div>
            </Grid>
            
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    College
                    </Typography>
                    {props.data.college}
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Short Bio
                    </Typography>
                    {props.data.shortbio}
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div>
                    <Typography variant='h6' fontSize="large">
                    Long Bio
                    </Typography>
                    {props.data.longbio}
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <div >
                    <Button 
                        variant="contained" 
                        size="small" 
                        color="error" 
                        startIcon={<DeleteIcon/>} 
                        onClick={handleOnDelete}
                    >
                        Delete
                    </Button>
                    <Button 
                        sx={{margin:"1rem"}}
                        variant="contained" 
                        size="small" 
                        color="success" 
                        startIcon={<EditIcon/>} 
                        onClick={handleOpen}
                    > 
                        Update
                    </Button>

                </div>
                
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
                    <Box sx={style}>         
                        <UserUpdate data={props.data} setOpen={setOpen}/>
                    </Box>
                    </Fade>
                </Modal>
            </Grid>
            
        </Grid>
        
    
  )
}

export default UserDialogue