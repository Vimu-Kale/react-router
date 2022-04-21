import { Paper, Typography, TextField, Button, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Select, InputLabel, MenuItem, Grid } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { v4 as uuidv4 } from 'uuid'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import * as services from '../../services/unifetch';
import CircularProgress from '@mui/material/CircularProgress';
import Creatable from 'react-select/creatable';


const hobbies = [
  {label:"Watching Movies", value:1},
  {label:"Fitness", value:2},
  {label:"Table Tennis", value:3},
  {label:"Cooking", value:4},
  {label:"Chess", value:5},
  {label:"Video Gaming", value:6},
]
const customStyles = {
  option:(provided,state)=>({
      ...provided,
      // color: state.isSelected ?"red":"blue",
      // backgroundColor:"blue",
      
  }),
  valueContainer:(provided,state)=>({
    ...provided,
    whiteSpace:"nowrap",
    overflow:"hidden",
    flexWrap:'nowrap',
  }),
  control: base=>({
    ...base,
    height:"3.5rem",
  }),
  menu: base =>({
    ...base,
    zIndex:2,    
  })
}


function UserDetailsForm() {
  const navigate = useNavigate();

  const[fullname,setFullName]=useState('');
  const[address,setAddress]=useState('')

  const [dob, setDob] = React.useState(new Date());
  const [gender, setGender] = React.useState('');
  
  const [country,setCountry] = useState('');
  const [countryData,setCountryData] = useState([]);
  
  const [collegeList,setCollegeList] = useState([]);
  const [listLoading,setListLoading] = useState(false);
  const [college,setCollege] =useState("");

  const [hobbiesvalue, setHobbiesValue] = useState('');

  const [shortbio,setShortBio] = useState('')
  const [longbio,setLongBio] = useState('');

  useEffect(
    ()=>{
      axios
        .get("https://restcountries.com/v3.1/all")
        .then(response =>{
            setCountryData(response.data);
            // console.log(response.data);
        })
        .catch((e)=>{console.error(e)})
    },[]
  );

  const handleHobbyChange = (field,value) =>{
    switch (field) {
      case 'hobbies':
        setHobbiesValue(value);
        // console.log(value);
        break;
    
      default:
        break;
    }
  }



  const handleCountrySelect = (e) =>{
    setCountry(e.target.value)
    // console.log(e.target.value);
    setListLoading(true);

    services.countryunifetch(e.target.value)
    .then(response =>{
      setCollegeList(response.data);
      // console.log(response.data);
      setListLoading(false);
    })
    .catch((e)=>{console.error(e)})
}


  const setUser = (data) => {  
    let x = localStorage.getItem("userData");
    console.log(x);
    if(x){
      let a = [];
      a = JSON.parse(localStorage.getItem('userData')) || [];
      console.log(a);
      a.push(data);
      localStorage.setItem('userData', JSON.stringify(a));
      alert("done");
    }
    else{
      let a = [];
      a.push(data);
      localStorage.setItem('userData', JSON.stringify(a));
    }
  }

  const handleOnSubmit = () => {

    if(fullname=== "" || dob === "" || address === "" || gender === "" || 
       hobbies=== "" || country === "" || college === "" || shortbio === "" ||
       longbio === "" ) {
        alert("Please Fill All Required The Fields");
    }else{
      const userDetails={
        id:uuidv4(),
        fullname:fullname,
        dob:dob,
        address:address,
        gender:gender,
        hobbies:hobbiesvalue,
        country:country,
        college:college,
        shortbio:shortbio,
        longbio:longbio,      
      };
  
      console.log(userDetails);
  
      setUser(userDetails);
  
      navigate('/');
    }

    
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }}>     
      
      {/* <Typography style={{float:"left"}} variant='h6' color="" onClick={()=>{navigate('/')}}>Back To Home</Typography>
      <br/> */}

      {/* <Box
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
    > */}
      <Grid container sx={{width:"70%",justifyContent:"center",marginTop:"5rem"}}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        
      <Paper elevation={24} sx={{padding:"2rem", borderRadius:"25px"}} >
      <Typography variant='h6'fontSize="xx-large" color="primary">User Details</Typography>
      <br/>
      <form onSubmit={handleOnSubmit}>
        {/* <div style={{display:"flex",flexDirection:"column",gap:"1rem",margin:"1rem"}}> */}
        <Grid container spacing="1rem" sx={{alignItems:"center"}} >
{/* ------------------------------------------------------------------------------------------------------------------- */}
        
            {/* NAME FIELD */}
            <Grid item xs={12} sm={12} md={3} lg={4}>
              <TextField 
                fullWidth
                id="outlined-basic" 
                label="Full Name" 
                variant="outlined"
                value={fullname}
                onChange={(e)=>{
                  setFullName(e.target.value);
                }}  
                required
              />
            </Grid>
{/* ----------------------------------------------------------------------------------------------------------------- */}

        {/* DATE PICKER */}
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <MobileDatePicker
              label="Date of Birth"
              inputFormat="dd/MM/yyyy"
              maxDate={new Date()}
              value={dob}
              onChange={(newValue) => {setDob(newValue)}}
              renderInput={(params) => <TextField {...params} />}
              required
            />
          </LocalizationProvider>
          </FormControl>
        </Grid>
{/* --------------------------------------------------------------------------------------------------------------------- */}

        {/* ADDRESS */}
        <Grid item xs={12} sm={12} md={6} lg={4} >
          {/* <TextareaAutosize 
            aria-label="empty textarea"
            placeholder="Address"
            style={{ height:"3rem",width: "17.6rem",maxHeight:"9rem", maxWidth:"17.6rem",minHeight:"3rem",minWidth:"17.6rem"}}
            value={address}
            onChange={(e)=>{
              setAddress(e.target.value);
            }}
          /> */}
          <TextField 
              fullWidth
              multiline
              id="outlined-basic" 
              label="Address" 
              variant="outlined"
              value={address}
              onChange={(e)=>{
                setAddress(e.target.value);
              }}
              required
            />
        </Grid>

{/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* GENDER */}
        <Grid item sm={12} md={6} lg={4}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value)
                }
              }         
            >
              <FormControlLabel value="female" control={<Radio required={true} />} label="Female" />
              <FormControlLabel value="male" control={<Radio required={true} />} label="Male" />
              <FormControlLabel value="other" control={<Radio required={true} />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>

{/* ---------------------------------------------------------------------------------------------------- */}

        {/* SELECT AND ADD HOBBIES */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <FormControl fullWidth >
            <Creatable
            isMulti
            onChange={(value)=>handleHobbyChange('hobbies',value)}
            options={hobbies}
            value={hobbiesvalue}
            placeholder="Select Hobbies"
            styles={customStyles}
            required
            />
          </FormControl>
        </Grid>
{/* ------------------------------------------------------------------------------------------------------ */}
        
        {/* SELECT COUNTRY */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
          <Select
            
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={country}
            onChange={handleCountrySelect}
            autoWidth
            label="Country"
            required
          >
            {
            countryData.map((cd) =>{
              return (
                <MenuItem key={cd.name.common} value={cd.name.common}>{cd.name.common}</MenuItem>
              );
            })
          }
          </Select>
        </FormControl>
        </Grid>
{/* ------------------------------------------------------------------------------------------------------------------ */}

        {/* SELECT COLLEGE */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">Colleges</InputLabel>
          {
          
          (listLoading)?
          <CircularProgress />
            :<div></div>
          }
          
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={college}
            onChange={(e) =>{setCollege(e.target.value)}}
            autoWidth
            label="Colleges"
            required
          >
            {
              collegeList.length?(
              collegeList.map((college,i) =>{
              return (
                <MenuItem key={i+1} value={college.name}>{college.name}</MenuItem>
              );
            })):<MenuItem key=" 123" value="123">No College Found</MenuItem>
          }
          </Select>
        </FormControl>
        </Grid>
{/* ----------------------------------------------------------------------------------------------------------------- */}

          {/* SHORT BIO */}
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextField 
              fullWidth
              id="outlined-basic" 
              label="Short-Bio" 
              variant="outlined"
              value={shortbio}
              onChange={(e)=>{
                setShortBio(e.target.value);
              }}
              required
            />
          </Grid>
{/* --------------------------------------------------------------------------------------------------------------------- */}

        {/* LONG BIO */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          {/* <TextareaAutosize
           
            aria-label="empty textarea"
            placeholder="Long Bio"
            style={{ height:"3rem",width: "17.6rem",maxHeight:"9rem", maxWidth:"17.6rem",minHeight:"3rem",minWidth:"17.6rem"}}
            value={longbio}
            onChange={(e)=>{
              setLongBio(e.target.value);
            }}
          /> */}
          <TextField 
              fullWidth
              multiline
              id="outlined-basic" 
              label="Long-Bio" 
              variant="outlined"
              value={longbio}
              onChange={(e)=>{
                setLongBio(e.target.value);
              }}
              required
            />
        </Grid>
{/* ------------------------------------------------------------------------------------------------------------------- */}
        <Grid item xs={12} sm={12} md={6} lg={4}>  
            <Button type="submit" sx={{width:"10rem"}} size="large" variant="contained">Submit</Button>
        </Grid>
        {/* </div> */}
        </Grid>
      </form>
      </Paper>
      
      </Grid>
      </Grid>
    {/* </Box> */}
    </div>
  )
}

export default UserDetailsForm