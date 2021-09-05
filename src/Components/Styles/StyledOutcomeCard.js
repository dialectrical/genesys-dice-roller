import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledOutcomeCard = styled(Card)`
  height: "100%";
  padding: "33%";
  @media (max-width: 960px) {
    padding: 0%;
    text-align: left;
  }
`;
