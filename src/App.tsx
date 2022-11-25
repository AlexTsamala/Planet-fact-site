import Header from './components/Header';
import { createGlobalStyle} from 'styled-components';
import Planets from './components/Planets';
import backgroundStars from "./images/background-stars.svg";
import SandwichOfPlanet from './components/Sandwich';
import {useState} from "react"

function App() {
  const [sandwichStatus,setSandwichStatus] = useState<boolean>(false);
  return (
      <>
        <GlobalStyle/> 
        <Header sandwichStatus={sandwichStatus} setSandwichStatus={setSandwichStatus} />
        {
          sandwichStatus
          ?
          <SandwichOfPlanet/>
          :
          <Planets/>
        }
      </>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #070724;
    background-image: url(${backgroundStars});
  }
`


