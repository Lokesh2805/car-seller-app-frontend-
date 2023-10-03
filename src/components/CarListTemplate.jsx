import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import {Button} from '@mui/material';
import styled from '@emotion/styled'; 
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Box, Typography } from '@mui/material';
import LikeButton from './LikeButton';

const CardComponent = styled(Card)`
height: 16rem;
background-color: #F0FFFF;
border: 1px solid #ccc;
border-radius: 20px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
overflow: hidden;
display: flex;
`
const RightContainer = styled(Box)`
text-align: right;
margin-left:50px
`

const LeftContainer= styled(Box)`
    flex: 1
`
const Image = styled('img')({
    width: 'auto',
    height: 150,
    borderRadius: '15px'
})

const CarsList = ({ cars, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  

  return (
    <div style={{margin:"15px 15px"}}>
      <Grid container spacing={2}>
        {currentCars.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={car.id}>
            <CardComponent className='zoom-item'>
              <CardContent style={{display: 'flex'}}>
               <LeftContainer>
                    <Image src={car.url} />
                    <Typography style={{fontWeight: 600}}>{car.name}</Typography>
                    <Box style={{marginTop:'10px'}}>
                        <Typography style={{margin:"10px 10px", border: '3px dotted #0147AB',borderRadius:'42%' ,padding: '4px', display: 'inline'}}>{car.year}</Typography>
                        <LikeButton/>
                    </Box>
                </LeftContainer>
                <RightContainer>
                    <Box style={{display:"flex"}}>
                        <PeopleOutlineIcon style={{color: '#0147AB', marginRight:'5px'}}/>
                        <Typography>{car.people} people</Typography>
                    </Box>
                    <Box style={{display:"flex", marginTop:'12px'}}>
                        <LocalGasStationIcon style={{color: '#0147AB', marginRight:'5px'}}/>
                        <Typography>Gasoline</Typography>
                    </Box>
                    <Box style={{display:"flex", marginTop:'12px'}}>
                        <SpeedIcon style={{color: '#0147AB', marginRight:'5px'}}/>
                        <Typography>{car.average}</Typography>
                    </Box>
                    <Box style={{display:"flex", marginTop:'12px'}}>
                    <SettingsIcon style={{color: '#0147AB', marginRight:'5px'}}/>
                    <Typography>Automatic</Typography>
                    </Box>
                    <Box style={{display:'flex', marginTop:"12px", marginLeft:"10px"}}>
                    <Typography fontSize={20} fontWeight={600}>${car.rent}/</Typography><Typography style={{marginTop: 'auto'}} fontWeight={600} fontSize={13}>month</Typography>
                    </Box>
                    <div style={{height: '1px',marginTop:'6px', width: '100%' ,background: 'linear-gradient(to right, transparent 0%, #000 50%, transparent 100%)'}}>
                    </div>
                    <Button variant="contained" style={{marginTop:'12px'}}>Rent now</Button>
                </RightContainer>
              </CardContent>
            </CardComponent>
          </Grid>
        ))}
      </Grid>
    
    </div>
  );
};

export default CarsList;