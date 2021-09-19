import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const StyledPaper = styled(Paper)`
  margin: 5% 30% 10% 30%;
  padding: 0px 20px 0px 20px;
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 0vw;
    margin-right: 0vw;
    margin-top: 25vw;
  }
`;
