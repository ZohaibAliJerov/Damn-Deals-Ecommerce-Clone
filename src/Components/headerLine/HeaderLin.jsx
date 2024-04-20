import styled from "styled-components";

const HeaderLine = () => {
  return (
    <ColorLineContainer>
      <ColorLineSegment style={{ backgroundColor: "orange" }} />
      <ColorLineSegment style={{ backgroundColor: "green" }} />
      <ColorLineSegment style={{ backgroundColor: "brown" }} />
      <ColorLineSegment style={{ backgroundColor: "orange" }} />
      <ColorLineSegment style={{ backgroundColor: "green" }} />
    </ColorLineContainer>
  );
};

export default HeaderLine;
const ColorLineContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const ColorLineSegment = styled.span`
  height: 2px;
  width: 20%;
  max-width: 280px;
`;
