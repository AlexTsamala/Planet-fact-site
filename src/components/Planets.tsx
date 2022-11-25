import styled from "styled-components";
import Overview from "./Overview";
import { useState } from "react";
import information from "../data.json";
import sourceIcon from "../images/icon-source.svg";
import { useParams } from "react-router-dom";

const Planets = () => {
  const [name, setName] = useState<string>("OVERVIEW");
  const { planet } = useParams();
  const planetName = planet ? planet : "";
  const planetObj = information.find(
    (item) => item.name.toLowerCase() === planetName.toLowerCase()
  );
  return (
    <>
      <Overview name={name} setName={setName} planetObj={planetObj} />
      {planetObj ? (
        <Container>
          {name === "OVERVIEW" || name === "SURFACE" ? (
            <Planet
              alt={planetObj.name}
              src={process.env.PUBLIC_URL + planetObj.images.planet}
            />
          ) : (
            <Planet
              alt={planetObj.name}
              src={process.env.PUBLIC_URL + planetObj.images.internal}
            />
          )}
          {name === "SURFACE" ? (
            <SurfaceImg
              alt={planetObj.name}
              src={process.env.PUBLIC_URL + planetObj.images.geology}
            />
          ) : (
            <></>
          )}
          <h1>{planetObj.name}</h1>
          <TextAboutPlanet>{planetObj.geology.content}</TextAboutPlanet>
          <SourceSection>
            <SourceText>Source :</SourceText>
            <a href={planetObj.geology.source}>Wikipedia</a>
            <img alt="source" src={sourceIcon} />
          </SourceSection>
          <StatisticSection>
            <StatisticDiv>
              <StatisticDescription>ROTATION TIME</StatisticDescription>
              <StatisticResult>{planetObj.rotation}</StatisticResult>
            </StatisticDiv>
            <StatisticDiv>
              <StatisticDescription>REVOLUTION TIME</StatisticDescription>
              <StatisticResult>{planetObj.revolution}</StatisticResult>
            </StatisticDiv>
            <StatisticDiv>
              <StatisticDescription>RADIUS</StatisticDescription>
              <StatisticResult>{planetObj.radius}</StatisticResult>
            </StatisticDiv>
            <StatisticDiv>
              <StatisticDescription>AVERAGE TEMP.</StatisticDescription>
              <StatisticResult>{planetObj.temperature}</StatisticResult>
            </StatisticDiv>
          </StatisticSection>
        </Container>
      ) : null}
    </>
  );
};

export default Planets;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 24px 47px;
  position: relative;
  h1 {
    font-family: "Antonio";
    font-size: 40px;
    font-weight: 400;
    line-height: 52px;
    color: #ffffff;
    margin-bottom: 16px;
  }
`;

const Planet = styled.img`
  height: 111px;
  width: 111px;
  margin-bottom: 98px;
`;
const TextAboutPlanet = styled.p`
  font-family: "League Spartan";
  font-size: 11px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  width: 327px;
  margin-bottom: 32px;
`;
const SourceText = styled.span`
  font-family: "Antonio";
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  opacity: 0.5;
`;
const SourceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 28px;
  a {
    font-family: "League Spartan";
    padding-left: 10px;
    opacity: 0.5;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
  }
`;
const StatisticSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const StatisticDiv = styled.div`
  height: 48px;
  width: 327px;
  left: 24px;
  top: 855px;
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;
const StatisticDescription = styled.span`
  font-family: "League Spartan";
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const StatisticResult = styled.span`
  font-family: "Antonio";
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
`;

const SurfaceImg = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 85px;
`;
