import styled from "styled-components";

const Overview = () => {
    return ( 
    <Container>
        <hr></hr>
            <ButtonsContainer>
                <h2>OVERVIEW</h2>
                <h2>STRUCTURE</h2>
                <h2>SURFACE</h2>
            </ButtonsContainer>
        <hr></hr>
    </Container>
     );
}
 
export default Overview;

const Container = styled.div`
    hr{
        background-color: #ffffff;
        height:1px;
        border:none;
        opacity: 0.2;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px 24px;
        h2{
            font-family: Spartan;
            font-size: 9px;
            font-weight: 700;
            line-height: 10px;
            letter-spacing: 1.9285714626312256px;
            text-align: center;
            color:#ffffff
        }
`