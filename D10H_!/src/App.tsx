import { Grid, Box } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchProvider from './context/SearchContext.tsx'

import PageAcceuil from './pages/PageAcceuil.jsx';
import PageSearchPartitions from './pages/PageSearch.tsx'
import ListeInstruments from './pages/PageListeInstruments.jsx';
import PageSearchPartitionsInstrument from './pages/PageSearchInstrument.tsx'
import Morceau from './pages/PageMorceau.jsx';
import Favoris from './pages/PageFavoris.jsx';
import History from './pages/PageHistory.jsx';
import Scorbraries from './pages/PageScorbaries.jsx'
import Scorbrary from './pages/PageScorbrary.jsx';
import Tools from './composants/Tools.jsx';
import BarNav from './composants/BarNav.tsx';
import Header from './composants/Header.tsx';
import Playeur from './composants/Playeur.jsx';
import BarNavMin from './composants/BarNavMin.jsx';
import HeaderMin from './composants/HeaderMin.jsx';
import PlayeurMin from './composants/PlayeurMin.jsx';

import './index.css'; 

function App() {

  const [searchResult, setSearchResult] = useState<IDeezerTrack[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleSearch (query: string) {
    try {
      setIsLoading(true)

      const safeQuery = encodeURIComponent(query)
      const apiURL = `https://api.deezer.com/search?q=${safeQuery}`

      const response = await fetch(apiURL);
      const responseJson = await response.json() as IDeezerSearchResponse

      setSearchResult(responseJson.data)

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  const NAV_WIDTH = "272px";
  const PLAYER_HEIGHT = "80px";
  const HEADER_HEIGHT = "80px";
  const NAV_MIN_WIDTH = "80px";
  const PLAYEUR_MIN_HEIGHT = "40px"
  const HEADER_MIN_HEIGHT = "40px";
  const TOOLS_WIDTH = "50px"

  const location = useLocation()
  const pathSegment = location.pathname.split('/').filter(segment => segment.length > 0);
  const onPageMorceau = (pathSegment[0] === "partitions" && pathSegment.length === 3)

  if (onPageMorceau) {
    return (
    <Grid

      bg={"#000000"}
      height="100vh"
      templateRows={`${HEADER_MIN_HEIGHT} 1fr ${PLAYEUR_MIN_HEIGHT}`}
      templateColumns={`${NAV_MIN_WIDTH} 1fr ${TOOLS_WIDTH}`}
      templateAreas={`
        "nav header tools"
        "nav main tools"
        "playeur playeur playeur"
        `}
      >
        <Box gridArea={"nav"} bg={"#141216"} borderRight={"solid #4e4c51 0.0625rem"}>
          <BarNavMin />
        </Box>
        <Box gridArea={"header"} zIndex={"200"}>
          <HeaderMin />
        </Box>
        <Box gridArea={"main"} bg={"#000000"} width={"100%"}>
          <SearchProvider>
            <Routes>
    
              <Route path='/' element={<PageAcceuil />} />

              <Route path='/search/' element={<PageSearchPartitions />} />
    
              <Route path='/instruments' element={<ListeInstruments />} />
    
              <Route path='/partitions/:instrumentId' element={<PageSearchPartitionsInstrument />} />
    
              <Route path='/partitions/:instrumentId/:morceauId' element={<Morceau />} />
    
              <Route path='/favoris' element={<Favoris />} />

              <Route path='/favoris/scorbraries' element={<Scorbraries />} />
    
              <Route path='/favoris/scorbraries/:scorbraryId' element={<Scorbrary />} />

              <Route path='/favoris/history' element={<History />} />
    
            </Routes>
          </SearchProvider>
        </Box>
        <Box gridArea={"tools"} zIndex={"200"} marginTop={"2.5rem"} marginBottom={"8rem"} position={"fixed"} right={"0"} overflow={"hidden"}>
          <Tools />
        </Box>
        <Box gridArea={"playeur"} zIndex={"10"}
        position={"fixed"} right={"0"} bottom={"0"} left={"0"}>
          <PlayeurMin />
        </Box>
      </Grid>

  )} else {
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
          <Header userName={"Visiteur"} isLoggedIn={false} onSearchSubmit={handleSearch} />
        </Box>
        <Box gridArea={"main"} bg={"#000000"} width={"100%"}>
          <SearchProvider>
            <Routes>
    
              <Route path='/' element={<PageAcceuil />} />

              <Route path='/search/' element={<PageSearchPartitions />} />
    
              <Route path='/instruments' element={<ListeInstruments />} />
    
              <Route path='/partitions/:instrumentId' element={<PageSearchPartitionsInstrument />} />
    
              <Route path='/partitions/:instrumentId/:morceauId' element={<Morceau />} />
    
              <Route path='/favoris' element={<Favoris />} />

              <Route path='/favoris/scorbraries' element={<Scorbraries />} />
    
              <Route path='/favoris/scorbraries/:scorbraryId' element={<Scorbrary />} />

              <Route path='/favoris/history' element={<History />} />
    
            </Routes>
          </SearchProvider>
        </Box>
        <Box gridArea={"playeur"} zIndex={"9999"}
        position={"fixed"} right={"0"} bottom={"0"} left={"0"}>
          <Playeur />
        </Box>
      </Grid>
    )
  }
}

export default App