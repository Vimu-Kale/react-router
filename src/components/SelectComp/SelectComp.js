import * as React from 'react';
import {OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox, Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'
import { VerticalAlignCenterSharp } from '@mui/icons-material';
import { elementAcceptingRef } from '@mui/utils';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "auto",
    },
  },
};

const variants = [
  {
    id: 1,
    name: 'Watching Movies',
  },
  {
    id: 2,
    name: 'Fitness',
  },
  {
    id: 3,
    name: 'Table Tennis',
  },
  {
    id: 4,
    name: 'Cooking',
  },
  {
    id: 5,
    name: 'Chess',
  },
  {
    id: 6,
    name: 'Video Gaming',
  },
];

const SelectComp = ({hobbyArray,setHobbyArray}) => {

    const [hobbyText,setHobbyText] = React.useState("none");
    const [hobbyValue,setHobbyValue] = React.useState("");

    const [variantName, setVariantName] = React.useState([
      // {
      //   id: 1,
      //   name: 'Watching Movies',
      // },
    ]);

  const handleOnHobbySubmit = (e) =>{
    console.log(hobbyValue);
    const found = variants.find(element =>{
      if((element.name).toLowerCase() === (hobbyValue).toLowerCase()){
        return true;
      }
      else{
        return false;
      }
    })
    if(!found){
    variants.push({id:uuidv4(),name:`${hobbyValue}`});
    }else{
        alert("hobby already exist");
    }
    
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log(value);
    setHobbyArray(value);
    // for(let i = 0; i<value.length;i++){
    //   console.log(value[i].name);
    //   setHobbyString(hobbyString)
    // }
   

    const filterdValue = value.filter(
      (item) => variantName.findIndex((o) => o.id === item.id) >= 0
    );

    let duplicatesRemoved = value.filter((item, itemIndex) =>
      value.findIndex((o, oIndex) => o.id === item.id && oIndex !== itemIndex)
    );

    // console.log(duplicatesRemoved);

    // let map = {};

    // for (let list of value) {
    //   map[Object.values(list).join('')] = list;
    // }
    // console.log('Using Map', Object.values(map));

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setVariantName(duplicateRemoved);
    // setHobbyString(duplicateRemoved.map((x) => x.name).join(', '));
    // console.log(hobbyString);

  };

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   const preventDuplicate = value.filter(
  //     (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  //   );
  //   setVariantName(
  //     // On autofill we get a the stringified value.
  //     typeof preventDuplicate === 'string'
  //       ? preventDuplicate.split(',')
  //       : preventDuplicate
  //   );
  // };

  return (
    <div>
      <FormControl sx={{ width: "18rem",gap:"1rem" }}>
        <InputLabel id="demo-multiple-checkbox-label">Hobbies</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={variantName}
          onChange={handleChange}
          input={<OutlinedInput label="Hobbies" />}
          renderValue={(selected) => selected.map((x) => x.name).join(', ')}
          MenuProps={MenuProps}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox
                checked={
                  variantName.findIndex((item) => item.id === variant.id) >= 0
                }
              />
              <ListItemText primary={variant.name} />
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" onClick={()=>{setHobbyText("")}} >Add Hobby</Button>
        <TextField 
              id="outlined-basic" 
              label="Hobby" 
              variant="outlined"
              sx={{display:`${hobbyText}`}}
              value={hobbyValue}
              onChange={(e)=>{setHobbyValue(e.target.value)}}
              onKeyDown = {(e)=>{
                if(e.key === "Enter"){
                    setHobbyText("none");
                    handleOnHobbySubmit();
                }
            }}
        />
      </FormControl>
    </div>
  );
}

export default SelectComp;