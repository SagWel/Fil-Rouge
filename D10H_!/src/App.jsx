import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import BarNav from './composants/BarNav2.jsx';
import Favoris from './pages/Favoris.jsx';
import PageAcceuil from './pages/PageAcceuil.jsx';
import PartitionsGuitare from './pages/guitare/PartitionsGuitare.jsx';
import ListeInstruments from './pages/ListeInstruments.jsx';
import Morceau from './pages/PageMorceau.jsx';
import './index.css'; 

function App() {

  const NAV_WIDTH = "271px";
  const PLAYER_HEIGHT = "80px";
  const HEADER_HEIGHT = "80px";

  return (
    <Grid
      
      bg={"#0F0D13"}
      height="100vh"
      templateRows={`${HEADER_HEIGHT} 1fr ${PLAYER_HEIGHT}`}
      templateColumns={`${NAV_WIDTH} 1fr`}
      templateAreas={`
        "nav header"
        "nav main"
        "playeur playeur"
      `}
    >
      <Box gridArea={"nav"}>
        <BarNav />
      </Box>
      <Box gridArea={"header"}>

      </Box>
      <Box gridArea={"main"}>
        <Routes>

          <Route path='/' element={<PageAcceuil />} />

          <Route path='/Instruments' element={<ListeInstruments />} />

          <Route path='/Partitions/guitare' element={<PartitionsGuitare />} />

          <Route path='/Favoris' element={<Favoris />} />

          <Route path='/Morceau/:id' element={<Morceau />} />

        </Routes>
      </Box>
      <Box gridArea={"playeur"}>
        
      </Box>
    </Grid>
  )
}

export default App