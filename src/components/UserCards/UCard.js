import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import UserUpdate from '../UserUpdate/UserUpdate';

import UserDialogue from '../UserDialogue/UserDialogue';
import { Grid } from '@mui/material';

// import { useNavigate } from 'react-router-dom';


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

function UCard({ user }) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true); 
  const handleClose =() => setOpen(false);

  const handleOnCardClick=()=> {
    handleOpen();
  }

  let d = new Date(user.dob);
  const date = d.toLocaleDateString();

  return (
    
    <Card sx={{ width:300,maxWidth: 445, textAlign:"left", borderRadius:"25px", padding:"1rem" }} elevation={24} >
      <CardContent onClick={handleOnCardClick}>
        <div className="name-font card-text">
          <Typography gutterBottom variant="h6" fontSize="large" component="div">
            Full Name:
          </Typography>
          {user.fullname}
        </div>
        <div className="name-font card-text">
          <Typography gutterBottom variant="h6" fontSize="large" component="div">
            Date of Birth
          </Typography>
          { date }
        </div>
        <div className="name-font card-text">
          <Typography gutterBottom variant="h6" fontSize="large" component="div">
            Gender
          </Typography>
          {user.gender}
        </div>
        <div className="name-font card-text">
          <Typography gutterBottom variant="h6" fontSize="large" component="div">
            Short Bio
          </Typography>
          {user.shortbio}
        </div>
      </CardContent>
      {/* <CardActions>
        <Button variant="contained" size="small" color="error" startIcon={<DeleteIcon/>} onClick={handleOnDelete}>Delete</Button>
        <Button variant="contained" size="small" color="success" startIcon={<EditIcon/>} onClick={handleOpen}>Update</Button>
      </CardActions> */}


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
      {/* <Modal
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
              <UserUpdate data={user} setOpen={setOpen}/>
          </Box>
        </Fade>
      </Modal> */}


    </Card>
    
  )
}

export default UCard;