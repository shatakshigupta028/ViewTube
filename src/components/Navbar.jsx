import React from 'react'
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import {logo} from '../utils/constants.js'
import SearchBar from './SearchBar';

const Navbar = () => (
   <Stack
    direction='row' 
    alignItems='center'
    p={2}
    sx={{position:'sticky',background:'#212121', top:0, justifyContent:'space-between'}}>
   <Link to='/' style={{display:'flex',alignItems:'center'}}>
   <img src={logo} alt="logo" height={45} />
   <span style={{ marginLeft: '8px',  fontFamily: 'Roboto',
  fontWeight: 'bold',
  color: 'white',
  fontSize: '20px' }}>ViewTube</span>
   </Link>
   <SearchBar/>
   </Stack>
)
   
  

export default Navbar






