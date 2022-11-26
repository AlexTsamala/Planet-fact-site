import styled from "styled-components";

const DesktopOverview = (props: {
  name: string;
  setName: (name: string) => void;
  planetObj: { color: string };
}) => {
  const nameHandler = (name: string) => {
    props.setName(name);
  };

  return (
    <Container>
      <div
        onClick={() => nameHandler("OVERVIEW")}
        style={
          props.name === "OVERVIEW"
            ? { backgroundColor: props.planetObj.color }
            : {}
        }
      >
        <h2>
          <span>01</span> OVERVIEW
        </h2>
      </div>
      <div
        onClick={() => nameHandler("STRUCTURE")}
        style={
          props.name === "STRUCTURE"
            ? { backgroundColor: props.planetObj.color }
            : {}
        }
      >
        <h2>
          <span>02</span> STRUCTURE
        </h2>
      </div>
      <div
        onClick={() => nameHandler("SURFACE")}
        style={
          props.name === "SURFACE"
            ? { backgroundColor: props.planetObj.color }
            : {}
        }
      >
        <h2>
          <span>03</span> SURFACE
        </h2>
      </div>
    </Container>
  );
};

export default DesktopOverview;

const Container = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
  div {
    height: 48px;
    width: 350px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 18px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  span {
    font-family: "League Spartan";
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
    text-align: left;
    opacity: 0.5;
    color: #ffffff;
    margin-right: 20px;
  }
  h2 {
    font-family: "League Spartan";
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5px;
    text-align: left;
    color: #ffffff;
  }
`;
