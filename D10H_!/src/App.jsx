import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import BarNav from './composants/BarNav2.jsx';
import Header from './composants/Header.jsx';
import Favoris from './pages/Favoris.jsx';
import PageAcceuil from './pages/PageAcceuil.jsx';
import ListeInstruments from './pages/ListeInstruments.jsx';
import Morceau from './pages/PageMorceau.jsx';
import Scorbrary from './pages/PageScorbrary.jsx';
import Playeur from './composants/playeur.jsx';

import './index.css'; 

function App() {

  const NAV_WIDTH = "272px";
  const PLAYER_HEIGHT = "80px";
  const HEADER_HEIGHT = "80px";

  return (
    <Grid
      
      bg={"#000000"}
      height="100vh"
      templateRows={`${HEADER_HEIGHT} 1fr ${PLAYER_HEIGHT}`}
      templateColumns={`${NAV_WIDTH} 1fr`}
      templateAreas={`
        "nav header"
        "nav main"
        "playeur playeur"
      `}
    >
      <Box gridArea={"nav"} bg={"#141216"} borderRight={"solid #4e4c51 0.0625rem"}>
        <BarNav />
      </Box>
      <Box gridArea={"header"} zIndex={"200"}>
        <Header />
      </Box>
      <Box gridArea={"main"} bg={"#000000"} width={"100%"}>
        <Routes>

          <Route path='/' element={<PageAcceuil />} />

          <Route path='/instruments' element={<ListeInstruments />} />

          <Route path='/favoris' element={<Favoris />} />

          <Route path='/scorbrary/:id' element={<Scorbrary />} />

          <Route path='/morceau/:id' element={<Morceau />} />

        </Routes>
      </Box>
      <Box gridArea={"playeur"} zIndex={"9999"}>
        <Playeur />
      </Box>
    </Grid>
  )
}

export default App