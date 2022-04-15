import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';



function UCard({ user }) {
  return (
    <div>
        <Card sx={{ maxWidth: 345, width:500,textAlign:"left"}} elevation={24}>
            <CardActionArea>
                <CardContent>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                          {user.firstName} {user.lastName}
                        </Typography>
                        <Typography variant="h5">
                          {user.email}
                        </Typography>
                    </div>
                    <div>
                        <Typography gutterBottom variant="h6" component="div">
                          {user.subject}
                        </Typography>
                        <Typography variant="h6">
                          {user.comments}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default UCard;