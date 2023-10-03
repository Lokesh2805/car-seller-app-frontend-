import styled from '@emotion/styled';
import React, { useState } from 'react';
import {Box, InputBase, List, ListItem, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { carData } from './Data';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from './Redux/Action_and_Reducer'
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Searchcontainer = styled(Box)`
backround-color: #eff3f9;
height: 40px;
margin: 10px 10px;
padding : 10px 10px;
border: 1px solid #ccc;
border-radius: 20px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
overflow: hidden;
display: flex`

const Inputsearchbase = styled(InputBase)`
background-color: white;
border-radius: 30px;
margin: 0.5px 15px;
width: 40%;
font-size: unset;`
function Header() {

  const [text, setText] = useState('');
  const getText = (text) =>{
    setText(text);
    const filteredResults = carData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    dispatch(setSearchResults(filteredResults));  
}
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  const handleSearch = () => {

    const filteredResults = carData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    dispatch(setSearchResults(filteredResults));
  };
  
  return (
   
<Searchcontainer>
<Inputsearchbase placeholder='   Search...' style={{ width: '35rem' }} 
startAdornment={(
  <InputAdornment position="end">
    <IconButton edge="end" aria-label="search">
      <SearchIcon style={{color:'gray'}} />
    </IconButton>
  </InputAdornment>
)} onChange={(e) => getText(e.target.value)} value={text}
onClick={handleSearch}
/>
  {text && <List>
    {searchResults.map((result) => (
      <ListItem key={result.id}>Results:{result.name}</ListItem>
    ))}
  </List>
    }
<Box style={{display: 'flex', margin: '5px 35px'}}>
<Typography style={{color: '#5A5A5A'}}>Relevance</Typography> <ArrowDropDownIcon style={{color:'#768094'}}/>
</Box>
<Box style={{display: 'flex', margin: ' 5px 5px'}}>
<Typography style={{color: '#5A5A5A'}}>All brands</Typography> <ArrowDropDownIcon style={{color:'#768094'}}/>
</Box>
</Searchcontainer> 
 )
}
export default Header;
