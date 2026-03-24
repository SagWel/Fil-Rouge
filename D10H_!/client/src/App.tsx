import { Grid, Box} from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

/* Contexts imports */
import SearchProvider from './context/SearchContext.tsx'
import { PartitionProvider } from './context/PartitionContext.tsx';

// Pages imports
import PageHome from './pages/PageHome.tsx';
import PageSearchPartitions from './pages/PageSearch.tsx'
import AllInstruments from './pages/PageAllInstruments.tsx';
import PageSearchPartitionsInstrument from './pages/PageSearchInstrument.tsx'
import Morceau from './pages/PageMorceau.tsx';
import Favoris from './pages/PageFavoris.tsx';
import History from './pages/PageHistory.tsx';
import Scorbraries from './pages/PageScorbaries.tsx'
import Scorbrary from './pages/PageScorbrary.tsx';
import PageInfos from './pages/PageInfos.tsx';
import PageLogin from './pages/PageLogin.tsx';
import PageSignup from './pages/PageSignup.tsx';
import PageResetPassword from './pages/PageResetPassword.tsx'
import PageUserInstruments from './pages/PageUserInstruments.tsx'

// Components imports
import Tools from './components/Tools.tsx';
import BarNav from './components/BarNav.tsx';
import Header from './components/Header.tsx';
import Playeur from './components/Playeur.tsx';
import BarNavMin from './components/BarNavMin.tsx';
import HeaderMin from './components/HeaderMin.tsx';
import PlayeurMin from './components/PlayeurMin.tsx';

// Hooks imports
import useWindowWidth from './hooks/useWindowWidth.tsx'
import { useAuth } from './hooks/useAuth.tsx';

function App() {

  // Variables for grid dimensions
  const NAV_WIDTH = "272px";
  const PLAYER_HEIGHT = "80px";
  const HEADER_HEIGHT = "80px";
  const NAV_MIN_WIDTH = "80px";
  const PLAYEUR_MIN_HEIGHT = "40px"
  const HEADER_MIN_HEIGHT = "40px";
  const TOOLS_WIDTH = "50px"
  
  /* music play status management */
  const [onPlay, setOnPlay] = useState<boolean>(false)
  
  // Variables for Scores page identification
  const location = useLocation()
  const pathSegment = location.pathname.split('/').filter(segment => segment.length > 0);
  const onPageMorceau = (pathSegment[0] === "partitions" && pathSegment.length === 3)
  
  //Viariables for responsive
  const width = useWindowWidth()
  const Breakpoint = 1160
  const isMinimal = width <= Breakpoint
  const navResponsive = isMinimal ? NAV_MIN_WIDTH : NAV_WIDTH

  const handleOnPlay = () => {
    if (onPlay) {
      setOnPlay(false)
    } else {
      setOnPlay(true)
    }
  }

  /* authtification management from context by hook */
  const {isAuthenticated, user, loading} = useAuth()  

  // Scores page template
  if (onPageMorceau && isAuthenticated) {
    return (
      /* Search system distribution */
    <SearchProvider>
      {/* partition data distribution */}
      <PartitionProvider>
        <Grid
        bg={"#000000"}
        minH="100vh"
        templateRows={`${HEADER_MIN_HEIGHT} 1fr ${PLAYEUR_MIN_HEIGHT}`}
        templateColumns={`${NAV_MIN_WIDTH} 1fr ${TOOLS_WIDTH}`}

        /* layout of display areas */
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
                <HeaderMin/>
              </Box>
              <Box gridArea={"main"} bg={"#000000"} width={"100%"}>
                <Routes>
          
                    {/* Route for home page */}
                    <Route path='/' element={<PageHome />} />

                    {/* Route to display search results */}
                    <Route path='/search' element={<PageSearchPartitions />} />

                    {/* Routes to display instruments */}
                    <Route path='/instruments/user' element={<PageUserInstruments />} />
                    <Route path='/instruments/all' element={<AllInstruments />} />
                    
                    {/* Route to display partitions based on the selected instrument */}
                    <Route path='/partitions/:instrumentName' element={<PageSearchPartitionsInstrument />} />

                    {/* Route to display selected partition */}
                    <Route path='/partitions/:instrumentName/:morceauId' element={<Morceau onPlay={onPlay}/>} />
          
                    {/* Routes to display favorites */}
                    <Route path='/favoris' element={<Favoris />} />
                    <Route path='/favoris/scorbraries' element={<Scorbraries />} />          
                    <Route path='/favoris/scorbraries/:scorbraryId' element={<Scorbrary />} />
                    <Route path='/favoris/history' element={<History />} />
        
                </Routes>
              </Box>
            <Box gridArea={"tools"} zIndex={"200"} marginTop={HEADER_MIN_HEIGHT} marginBottom={PLAYEUR_MIN_HEIGHT} position={"fixed"} right={"0"} top={"0"} bottom={"0"}>
              <Tools />
            </Box>
            <Box gridArea={"playeur"} zIndex={"10"}
            position={"fixed"} right={"0"} bottom={"0"} left={"0"}>
              <PlayeurMin onClick={handleOnPlay}/>
            </Box>
        </Grid>
      </PartitionProvider>
    </SearchProvider>

  )} else if (isAuthenticated) {

    /* Access to pages after logging in */
    return (
      /* Search system distribution */
      <SearchProvider>
        {/* partition data distribution */}
        <PartitionProvider>
          <Grid
          bg={"#000000"}
          minH="100vh"

          /* layout of display areas */
          templateRows={`${HEADER_HEIGHT} 1fr ${PLAYER_HEIGHT}`}
          templateColumns={`${navResponsive} 1fr`}
          templateAreas={`
            "nav header"
            "nav main"
            "playeur playeur"
            `}
            >
            <Box gridArea={"nav"} bg={"#141216"} borderRight={"solid #4e4c51 0.0625rem"}>
              {/* Responsive display */}
              {isMinimal ? <BarNavMin  /> : <BarNav  />}
            </Box>
              <Box gridArea={"header"} zIndex={"200"}>
                <Header />
              </Box>
              <Box gridArea={"main"} bg={"#000000"} width={"100%"}>
                <Routes>
          
                  {/* Route for home page */}
                  <Route path='/' element={<PageHome />} />

                  {/* Route to display search results */}
                  <Route path='/search/' element={<PageSearchPartitions />} />
        
                  {/* Routes to display instruments */}
                  <Route path='/instruments/user' element={<PageUserInstruments />} />
                  <Route path='/instruments/all' element={<AllInstruments />} />
        
                  {/* Route to display partitions based on the selected instrument */}
                  <Route path='/partitions/:instrumentName' element={<PageSearchPartitionsInstrument />} />
        
                  {/* Route to display selected partition */}
                  <Route path='/partitions/:instrumentName/:morceauId' element={<Morceau onPlay={onPlay}/>} />
        
                  {/* Routes to display favorites */}
                  <Route path='/favoris' element={<Favoris />} />
                  <Route path='/favoris/scorbraries' element={<Scorbraries />} />        
                  <Route path='/favoris/scorbraries/:scorbraryId' element={<Scorbrary />} />
                  <Route path='/favoris/history' element={<History />} />
          
                </Routes>
              </Box>
            <Box gridArea={"playeur"} zIndex={"9999"}
            position={"fixed"} right={"0"} bottom={"0"} left={"0"}>
              <Playeur />
            </Box>
          </Grid>
        </PartitionProvider>
      </SearchProvider>
    )
  } else if (loading) {
    return (
      <Box h={"100%"} w={"100%"} bg={"#000000"}>
      </Box>
    )
  } else if (!user || !isAuthenticated) {
    /* pages for not logged in users */
    return (
      <Box bg={"#000000"} width={"100%"}>
        <Routes>

          {/* Route to informations about site */}
          <Route path='/' element={<PageInfos />} />

          {/* Route to login */}
          <Route path='/login' element={<PageLogin />} />

          {/* Route to resetpassword system */}
          <Route path='/resetpassword' element={<PageResetPassword />} />

          {/* Route to registering page */}
          <Route path='/signup/' element={<PageSignup />}/>
        </Routes>
      </Box>
    )
  }
}

export default App