import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Planets from "./components/Planets";
import backgroundStars from "./images/background-stars.svg";
import SandwichOfPlanet from "./components/Sandwich";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import DesktopHeader from "./components/HeaderOfDesktop";

function App() {
  const [sandwichStatus, setSandwichStatus] = useState<boolean>(false);
  return (
    <>
      <GlobalStyle status={`${sandwichStatus ? "hidden" : null}`} />
      <Header
        sandwichStatus={sandwichStatus}
        setSandwichStatus={setSandwichStatus}
      />
      <DesktopHeader />
      {sandwichStatus ? (
        <SandwichOfPlanet setSandwichStatus={setSandwichStatus} />
      ) : null}
      <Routes>
        <Route
          path="/Planet-fact-site"
          element={<Navigate to="/Planet-fact-site/planet/mercury" replace />}
        />
        <Route path="/Planet-fact-site/planet/:planet" element={<Planets />} />
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
    overflow-x: hidden;
  }
`;
