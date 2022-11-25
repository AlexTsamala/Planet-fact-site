import styled from "styled-components";
import information from "../data.json";
import React from "react";
import arrow from "../images/Path 3.png"

const SandwichOfPlanet = () => {

    return ( 
        <Container>
            {information.map((planet,index) =>{
            return  <React.Fragment key={index}>
                        <MainSection>
                            <SectionOfCirclePlanet>
                                <Circle color={planet.color}></Circle>
                                <Title>{planet.name}</Title>
                            </SectionOfCirclePlanet>
                            <Arrow alt="arrow" src={arrow}/>
                        </MainSection>
                        <hr></hr>
                    </React.Fragment>
                })
            }
        </Container> 
    );
}
 
export default SandwichOfPlanet;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top:35px;
    hr{
        background-color: #ffffff;
        height:1px;
        border:none;
        opacity: 0.1;
    }
`
const Title = styled.span`
     text-transform: uppercase;
     font-family: 'League Spartan';
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.3636363744735718px;
    text-align: center;
    color:#ffffff;
`
const Circle = styled.span`
    width:20px;
    height:20px;
    background-color: ${props => props.color};
    margin-left:24px;
    border-radius: 20px;
`
const SectionOfCirclePlanet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`
const Arrow = styled.img`
    width:8px;
    height:12px;
    margin-right:26px;
    cursor: pointer;
`
const MainSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`