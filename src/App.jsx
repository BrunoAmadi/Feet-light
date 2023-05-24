import React from 'react';
import Header from './components/Header/Header';
import './app.css';
import { Main } from './components/Main/Main';
import CasualSection from './components/CasualSection/CasualSection';
import SectionDetails from './components/SectionDetails/SectionDetails';
import SportiveSection from './components/SportiveSection/SportiveSection';

function App() {
  return (
    <>
      <Header />
      <Main />
      <SectionDetails />
      <SportiveSection />
      <CasualSection />
    </>
  );
}

export default App;
