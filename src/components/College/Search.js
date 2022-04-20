import { TextField } from '@mui/material'
import React, { useState } from 'react'
import * as services from "../../services/unifetch";

function Search(props) {
    const [searchText,setSearchText] = useState("");

    const callSearchApi = () =>{
        if(searchText){
           services.unifetch(searchText,"") 
           .then(response =>{
               props.setCollegeList(response.data);
           })
           .catch((e)=>{console.error(e)})
        }
    }
  return (
    <div>
        <TextField 
            id="outlined-search" 
            label="Search Colleges" 
            type="search"
            onChange={(e)=>{setSearchText(e.target.value)}}
            onKeyDown = {(e)=>{
                if(e.key === "Enter"){
                    callSearchApi()
                }
            }}
            />
    </div>
  )
}

export default Search