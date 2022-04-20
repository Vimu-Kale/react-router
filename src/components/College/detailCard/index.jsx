import {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import './detailcard.css'
import { Typography } from '@mui/material';

function DetailCard(props) {
    const data = props.data;
    console.log(data);
    useEffect(()=>{
        // console.log("call")
    })

    return (
        <Paper className="card-box" elevation={24} style={{borderRadius:"25px"}}>
            <div className="card-paper">
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large" >University Name</Typography>{data.name}</div>
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large">Country</Typography>{data.country}</div>
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large">Domains</Typography>{data.domains[0]}</div>
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large">Website:</Typography>{data.web_pages[0]}</div>
            </div>            
        </Paper>
    )
}

export default DetailCard;
