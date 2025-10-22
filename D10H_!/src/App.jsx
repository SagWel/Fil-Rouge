import { Grid, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import BarNav from './composants/BarNav2.jsx';
import Header from './composants/Header.jsx';
import Playeur from './composants/playeur.jsx';
import PageAcceuil from './pages/PageAcceuil.jsx';
import ListeInstruments from './pages/ListeInstruments.jsx';
import Research from './pages/PageResearch.jsx'
import Morceau from './pages/PageMorceau.jsx';
import Favoris from './pages/Favoris.jsx';
import Scorbrary from './pages/PageScorbrary.jsx';

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

          <Route path='/partitions/:instrumentId' element={<Research />} />

          <Route path='partitons/:instrumentId/morceauId' element={<Morceau />} />

          <Route path='/favoris' element={<Favoris />} />

          <Route path='/favoris/scorbrary' element={<Scorbrary />} />

        </Routes>
      </Box>
      <Box gridArea={"playeur"} zIndex={"9999"}
      position={"fixed"} right={"0"} bottom={"0"} left={"0"}>
        <Playeur />
      </Box>
    </Grid>
  )
}

export default App