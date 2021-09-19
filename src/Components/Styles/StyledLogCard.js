import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledLogCard = styled(Card)`
  height: "100%";
  width: 98.3%;
  @media (max-width: 960px) {
    height: 58vw;
    text-align: left;
    width: 100%;
    margin-left: 10%;
  }
`;
