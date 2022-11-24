import styled from "styled-components";
import Overview from "./Overview";
import {useState} from "react";
import information from "../data.json"
import sourceIcon from "../images/icon-source.svg"

const Planets = () => {
    return ( 
        <>
            <Overview/>
            <Container>
                <Planet alt={information[0].name} src={information[0].images.planet}/>
                <h1>{information[0].name}</h1>
                <TextAboutPlanet>{information[0].geology.content}</TextAboutPlanet>
                <SourceSection>
                    <SourceText>Source :</SourceText>
                    <a href={information[0].geology.source}>Wikipedia</a>
                    <img alt="source" src={sourceIcon}/>
                </SourceSection>
                <StatisticSection>
                    <div>
                        <span>ROTATION TIME</span>
                        <span>{information[0].rotation}</span>
                    </div>    
                    <div>
                        <span>REVOLUTION TIME</span>
                        <span>{information[0].revolution}</span>
                    </div>
                    <div>
                        <span>RADIUS</span>
                        <span>{information[0].radius}</span>
                    </div>
                    <div>
                        <span>AVERAGE TEMP.</span>
                        <span>{information[0].temperature}</span>
                    </div>
                </StatisticSection>
            </Container>
        </>
     );
}
 
export default Planets;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin:0 24px 47px;
    h1{
        font-family: "Antonio";
        font-size: 40px;
        font-weight: 400;
        line-height: 52px;
        color: #FFFFFF;
        margin-bottom:16px;
    }
`

const Planet = styled.img`
    height: 111px;
    width: 111px;
    margin-bottom:98px;
`
const TextAboutPlanet = styled.p`
    font-family: 'League Spartan';
    font-size: 11px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFFFFF;
    width: 327px;
    margin-bottom:32px;
`
const SourceText = styled.span`
    font-family: "Antonio";
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color:#ffffff;
    opacity: 0.5;
`
const SourceSection = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    a{
        font-family: 'League Spartan';
        padding-left:10px;
        opacity: 0.5;
        color:#ffffff;
        font-family: Spartan;
        font-size: 12px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;
    }
`
const StatisticSection = styled.div`
    
`