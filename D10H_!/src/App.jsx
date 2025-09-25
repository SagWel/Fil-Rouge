/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg' */ 
/* import viteLogo from '/vite.svg'*/
/* import './App.css' */
import { Routes, Route } from 'react-router-dom';
import BarNav from './composants/BarNav.jsx';
import Connexion from './pages/Connexion.jsx';
import PageAcceuil from './pages/PageAcceuil.jsx';
import PartitionsGuitare from './pages/guitare/PartitionsGuitare.jsx';
import ListeInstruments from './pages/ListeInstruments.jsx';
import Morceau from './pages/PageMorceau.jsx';
import './index.css';

function App() {
    return (
    <div>

      <BarNav />

      <Routes>

        <Route path='/' element={<PageAcceuil />} />

        <Route path='/Instruments' element={<ListeInstruments />} />

        <Route path='/Partitions/guitare' element={<PartitionsGuitare />} />

        <Route path='/Connexion' element={<Connexion />} />

        <Route path='/mMrceau/:id' element={<Morceau />} />

      </Routes>
    </div>
  )
}

export default App
