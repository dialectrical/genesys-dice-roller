import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const StyledOutcomeCard = styled(Card)`
  height: "100%";
  @media (max-width: 960px) {
    padding: 0%;
    text-align: left;
    margin-left: 30%;
    width: 100%;
  }
`;
