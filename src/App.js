import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <Container style={{ paddingTop: '86px' }}>
      <Navbar />
      <CountriesList />
    </Container>
  );
}

export default App;
