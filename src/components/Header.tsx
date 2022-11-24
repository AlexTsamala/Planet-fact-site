import styled from "styled-components";
import menu from '../images/Group.png'

const Header = () => {
    return ( 
        <Container>
            <h1>THE PLANETS</h1>
            <img alt="menu" src={menu}/>
        </Container>
     );
}
 
export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin:16px 24px;
        h1{
            font-family: "Antonio";
            font-size: 28px;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: -1px;
            color:#ffffff;
        }
`