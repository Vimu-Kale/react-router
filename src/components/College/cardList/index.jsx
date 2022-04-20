import {Grid} from '@material-ui/core';
import DetailCard from '../detailCard';

function CardList(props) {

    const collegeList = props.collegeList;
   

    return (
        <div>
            {collegeList.length ? 
                <Grid container spacing={2}>
                    {collegeList.map((college,i)=>{
                        return ( 
                            <Grid item key={i+1} xl={3} lg={3} md={4} sm={6} xs={12}>
                                <DetailCard key={i+1} data={college} />
                            </Grid>
                        )
                    })}
                </Grid> : 
            <h1>There is no user added yet...!!!</h1>}
        </div>
    )
}

export default CardList;