
export const countryValid = (country) =>{
    
    if(country.length===0){
      return ("Select country, field cannot be empty*");
    }
    else{
      return ("");
    }
  }
  
  export const collegeValid = (college) =>{
    
    if(college.length===0){
      return ("This field is required*");
    }
    else{
      return ("");
    }
  }

export const nameValid = (fullname) =>{
    if(fullname.length===0){
      return ("This field is Required*");
    }else if(fullname.trim().length===0){
      return ("Enter valid name, spaces detected");
    }else if(fullname.length<2){
      return ("Single character not allowed*")
    }
    else{
      return ("");
    }
  }
  
export const addressValid = (address) =>{
    if(address.length===0){
      return ("This field is Required*");
    }else if(address.trim().length===0){
      return ("Enter valid Bio, spaces detected*");
    }else if(address.length<3){
      return ("Address too short*")
    }
    else if(address.length>150){
      return ("Address too Long*")
    }
    else{
      return ("");
    }
  }
  
export const shortbioValid = (shortbio) =>{
    if(shortbio.length===0){
      return ("This field is Required*");
    }else if(shortbio.trim().length===0){
      return ("Enter valid Bio, spaces detected*");
    }else if(shortbio.length<10){
      return ("Bio too short*")
    }
    else if(shortbio.length>30){
      return ("Bio too Long*")
    }
    else{
      return ("");
    }
  }
  
  
  
 export const longbioValid = (longbio) =>{
    if(longbio.length===0){
      return ("This field is Required*");
    }else if(longbio.trim().length===0){
      return ("Enter valid Bio, spaces detected*");
    }else if(longbio.length<50){
      return ("Bio too short*")
    }
    else if(longbio.length>100){
      return ("Bio too Long*")
    }
    else{
      return ("");
    }
  }
  
export const hobbiesValid = (hobbiesvalue) =>{
    if(hobbiesvalue.length===0){
      return ("This field is required");
    }
    else{
      return ("");
    }
  } 