import styled from "styled-components";
import menu from '../images/Group.png'

const Header = (props: any) => {

    const statusHandler = () => props.setSandwichStatus(!props.sandwichStatus);

    return ( 
        <Container>
            <div>
                <h1>THE PLANETS</h1>
                <img onClick={statusHandler} alt="menu" src={menu}/>
            </div>
            <hr></hr>
        </Container>
     );
}
 
export default Header;

const Container = styled.div`
        div{
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            margin:16px 24px; 
        }
        hr{
            background-color: #ffffff;
            height:1px;
            border:none;
            opacity: 0.2;
        }
        h1{
            font-family: "Antonio";
            font-size: 28px;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: -1px;
            color:#ffffff;
        }
`