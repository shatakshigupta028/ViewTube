import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material';

import {Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor: "#212121"}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:id" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
);
 
export default App

/* shortcut for path intellisense is ctrl space*/
/*ctrl click to go a component */