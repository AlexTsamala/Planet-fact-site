import Header from './components/Header';
import { createGlobalStyle} from 'styled-components';
import Planets from './components/Planets';
import backgroundStars from "./images/background-stars.svg";

function App() {
  return (
      <>
        <GlobalStyle/> 
        <Header/>
        <Planets/>
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


