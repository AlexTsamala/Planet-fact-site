import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Planets from "./components/Planets";
import backgroundStars from "./images/background-stars.svg";
import SandwichOfPlanet from "./components/Sandwich";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";

function App() {
  const [sandwichStatus, setSandwichStatus] = useState<boolean>(false);
  return (
    <>
      <GlobalStyle status={`${sandwichStatus ? "hidden" : null}`} />
      <Header
        sandwichStatus={sandwichStatus}
        setSandwichStatus={setSandwichStatus}
      />
      {sandwichStatus ? (
        <SandwichOfPlanet setSandwichStatus={setSandwichStatus} />
      ) : null}
      <Routes>
        <Route path="/" element={<Navigate to="/planet/mercury" replace />} />
        <Route path="/planet/:planet" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle<{
  status: string;
}>`
  body {
    background-color: #070724;
    background-image: url(${backgroundStars});
    overflow: ${(props) => props.status};
  }
`;
