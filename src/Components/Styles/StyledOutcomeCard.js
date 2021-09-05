import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledOutcomeCard = styled(Card)`
  height: "100%";
  width: "33%";
  padding: "30%";
  @media (max-width: 960px) {
    width: "15%";
    text-align: left;
    padding: 0;
    margin-left: 0vw;
    margin-right: 0vw;
    margin-top: 0vw;
  }
`;
