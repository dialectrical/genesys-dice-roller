import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledLogCard = styled(Card)`
  height: "100%";
  padding: "30%";
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 7%;
    padding: 0;
    width: 53vw;
  }
`;
