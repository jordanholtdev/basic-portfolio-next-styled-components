import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-radius: 11px;
  color: ${(props) => props.theme.bg.lightShades};
  background-color: ${(props) => props.theme.bg.darkShades};
  background-image: radial-gradient(circle at top left, #223043, #223043);
`;

export default Card;
