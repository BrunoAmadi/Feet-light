import React from 'react';
import Header from './components/Header/Header';
import './app.css';
import { Main } from './components/Main/Main';
import CasualSection from './components/CasualSection/CasualSection';
import SectionDetails from './components/SectionDetails/SectionDetails';
import SportiveSection from './components/SportiveSection/SportiveSection';
import DetailsCasual from './components/DetailsCasual/DetailsCasual';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Main />
      <SectionDetails />
      <SportiveSection />
      <CasualSection />
      <DetailsCasual />
    </GlobalStorage>
  );
}

export default App;
