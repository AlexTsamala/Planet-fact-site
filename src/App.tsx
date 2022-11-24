import React from 'react';
import styled from 'styled-components'
import Header from './components/Header';
import information from './data.json'
import { createGlobalStyle} from 'styled-components';
import Overview from './components/Overview';


function App() {
  return (
      <>
        <GlobalStyle/> 
        <Header/>
        <Overview/>
      </>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #070724;
  }
`


