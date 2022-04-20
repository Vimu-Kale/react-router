import { Paper, Box, TextField, Button, TextareaAutosize, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Select, InputLabel, MenuItem } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import React, { useEffect, useState } from 'react'
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
  })
}


const UserUpdate = (props) => {

  // const navigate = useNavigate();

  const user = props.data;

  // console.log(user);





  const[fullname,setFullName]=useState(user.fullname);
  const[address,setAddress]=useState(user.address)

  const [dob, setDob] = React.useState(user.dob);
  const [gender, setGender] = React.useState(user.gender);
  
  const [country,setCountry] = useState('');
  const [countryData,setCountryData] = useState([]);
  
  const [collegeList,setCollegeList] = useState([]);
  const [listLoading,setListLoading] = useState(false);
  const [college,setCollege] =useState('');

  const [hobbiesvalue, setHobbiesValue] = useState(user.hobbies);

  const [shortbio,setShortBio] = useState(user.shortbio);
  const [longbio,setLongBio] = useState(user.longbio);

  useEffect(
    ()=>{
      axios
        .get("https://restcountries.com/v3.1/all")
        .then(response =>{
            setCountryData(response.data);
            // console.log(response.data);
            setCountry(user.country);
        })
        .catch((e)=>{console.error(e)})
    },[]
  );

  useEffect(
    ()=>{
      services.countryunifetch(user.country)
    .then(response =>{
      setCollegeList(response.data);
      // console.log(response.data);
      setListLoading(false);
      setCollege(user.college);
    })
    .catch((e)=>{console.error(e)})
  }
  ,[]);

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
    let x = JSON.parse(localStorage.getItem("userData"));
    console.log(x);
  
    const objIndex = x.findIndex((obj => obj.id === user.id));
    console.log(objIndex);

    x[objIndex]=data;

    localStorage.setItem('userData', JSON.stringify(x));
    props.setOpen(false);
  }

  const handleOnSubmit = () => {

    const userDetails={
      id:user.id,
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
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }}>     
      <Box
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
    >
      <Paper elevation={24}>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem",margin:"1rem"}}>

{/* ------------------------------------------------------------------------------------------------------------------- */}
            {/* NAME FIELD */}

            <TextField 
              id="outlined-basic" 
              label="Full Name" 
              variant="outlined"
              value={fullname}
              onChange={(e)=>{
                setFullName(e.target.value);
              }}  
            />

{/* ----------------------------------------------------------------------------------------------------------------- */}

        {/* DATE PICKER */}

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Date of Birth"
            inputFormat="dd/MM/yyyy"
            maxDate={new Date()}
            value={dob}
            onChange={(newValue) => {setDob(newValue)}}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

{/* --------------------------------------------------------------------------------------------------------------------- */}

        {/* ADDRESS */}

        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Address"
          style={{ height:"3rem",width: "17.6rem",maxHeight:"9rem", maxWidth:"17.6rem",minHeight:"3rem",minWidth:"17.6rem"}}
          value={address}
          onChange={(e)=>{
            setAddress(e.target.value);
          }}
        />

{/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* GENDER */}

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
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

{/* ---------------------------------------------------------------------------------------------------- */}

        {/* SELECT AND ADD HOBBIES */}

        <FormControl >
          <Creatable
          isMulti
          onChange={(value)=>handleHobbyChange('hobbies',value)}
          options={hobbies}
          value={hobbiesvalue}
          placeholder="Select Hobbies"
          styles={customStyles}
          />
        </FormControl>

{/* ------------------------------------------------------------------------------------------------------ */}
        
        {/* SELECT COUNTRY */}

        <FormControl >
          <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={country}
            onChange={handleCountrySelect}
            autoWidth
            label="Country"
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
  
{/* ------------------------------------------------------------------------------------------------------------------ */}

        {/* SELECT COLLEGE */}

        <FormControl >
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

{/* ----------------------------------------------------------------------------------------------------------------- */}

          {/* SHORT BIO */}

            <TextField 
              id="outlined-basic" 
              label="Short-Bio" 
              variant="outlined"
              value={shortbio}
              onChange={(e)=>{
                setShortBio(e.target.value);
              }}
            />

{/* --------------------------------------------------------------------------------------------------------------------- */}

        {/*   LONG BIO */}

        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Long Bio"
          style={{ height:"3rem",width: "17.6rem",maxHeight:"9rem", maxWidth:"17.6rem",minHeight:"3rem",minWidth:"17.6rem"}}
          value={longbio}
          onChange={(e)=>{
            setLongBio(e.target.value);
          }}
        />

{/* ------------------------------------------------------------------------------------------------------------------- */}
            
            <Button variant="contained" onClick={()=>{handleOnSubmit()}}>Submit</Button>
        </div>
      </Paper>
    </Box>
    </div>
  )
}

export default UserUpdate