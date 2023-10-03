import React from "react";
import { Box, Pagination, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { useState } from "react";
import CarsList from "./CarListTemplate";

const Footercontainer = styled(Box)`

height: 40px;
margin: 10px 10px;
padding : 10px 10px;
border: 1px solid #ccc;
border-radius: 20px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
overflow: hidden;
display: flex;
backround-color: #eff3f9`

function Footer() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Total number of pages
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
      
    };

    const openPage = (props)=>{
        const {children, page, index} = props;
        return(
            <div hidden={page !== index}>
                {page === index  && <Box>{children}</Box>}
            </div>
        )
    }
  return (
<Footercontainer>

<Typography gutterBottom style={{justifyContent:'start', marginLeft:"5px", fontSize:"15px",  marginTop:"8px", color: '#5A5A5A'}}>
  Page {currentPage} from {totalPages}
</Typography>
<Pagination 
  count={totalPages}
  page={currentPage}
  onChange={handlePageChange}
  color="primary"
  size="large"
  boundaryCount={2}
  variant="outlined" shape="rounded"
  style={{marginLeft:"54rem"}}
  sx={{
    "Button.MuiPaginationItem-bounded.Mui-selected":{
        bgcolor:"white",
        color:"#fffffff"
    }
  }
  }
  renderItem={(item) => (
    <PaginationItem
      component={Link}
      to={`/page/${item.page}`}
      {...item}
    />
  )}
/>

</Footercontainer>  )
}

export default Footer;