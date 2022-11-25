import styled from "styled-components";


const Overview = (props: any) => {

    const nameHandler = (name:string) => {
        props.setName(name)
    }

    return ( 
    <Container>
        <hr></hr>
            <ButtonsContainer>
                <h2 onClick={() => nameHandler("OVERVIEW")} style={props.name==="OVERVIEW" ? {borderBottom:"2px solid yellow"}:{}}>OVERVIEW</h2>
                <h2 onClick={() => nameHandler("STRUCTURE")} style={props.name==="STRUCTURE" ? {borderBottom:"2px solid yellow"}:{}}>STRUCTURE</h2>
                <h2 onClick={() => nameHandler("SURFACE")} style={props.name==="SURFACE" ? {borderBottom:"2px solid yellow"}:{}}>SURFACE</h2>
            </ButtonsContainer>
        <hr></hr>
    </Container>
     );
}
 
export default Overview;

const Container = styled.div`
    margin-bottom: 95px;
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
    padding:20px 24px 0;
        h2{
            font-family: 'League Spartan';
            font-size: 9px;
            font-weight: 700;
            line-height: 10px;
            letter-spacing: 1.9285714626312256px;
            text-align: center;
            color:#ffffff;
            height: 30px;
            cursor: pointer;
        }
`