import React from 'react';
import SportiveSection from './SportiveSection/SportiveSection';
import CasualSection from './CasualSection/CasualSection';
import DetailsCasual from './DetailsCasual/DetailsCasual';
import { Main } from './Main/Main';
import SectionDetails from './SectionDetails/SectionDetails';

const Home = () => {
  return (
    <>
      <Main />
      <SectionDetails />
      <SportiveSection />
      <CasualSection />
      <DetailsCasual />
    </>
  );
};

export default Home;
