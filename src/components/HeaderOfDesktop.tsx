import styled from "styled-components";
import information from "../data.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DesktopHeader = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState("Mercury");
  const statusHandler = (name: string) => {
    navigate("/planet/" + name);
    setClick(name);
  };
  return (
    <Container>
      <HeaderPlanetsSection>
        <h1>THE PLANETS</h1>
        <PlanetsSection>
          {information.map((planet, index) => {
            return (
              <Title
                color={planet.name === click ? planet.color : "#070724"}
                key={index}
                onClick={() => statusHandler(planet.name)}
              >
                {planet.name}
              </Title>
            );
          })}
        </PlanetsSection>
      </HeaderPlanetsSection>
      <hr></hr>
    </Container>
  );
};

export default DesktopHeader;

const Container = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
  hr {
    background-color: #ffffff;
    height: 1px;
    border: none;
    opacity: 0.2;
  }
  h1 {
    font-family: "Antonio";
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -1.0499999523162842px;
    text-align: left;
    color: #ffffff;
    margin-top: 25px;
  }
`;

const Title = styled.span`
  text-transform: uppercase;
  font-family: "League Spartan";
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3px;
  color: #ffffff;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: flex-end;
  border-top: 4px solid ${(props) => props.color};
`;
const HeaderPlanetsSection = styled.div`
  margin: 0 42px 27px 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlanetsSection = styled.div`
  margin-right: 65px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
