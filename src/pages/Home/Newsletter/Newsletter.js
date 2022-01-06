import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Details from "./Details";
import SideImage from "./SideImage";

const NewsLetterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
`;

const NewsletterStyled = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  position: relative;
  background-color: lightgreen;
`;

const Newsletter = () => {
  return (
    <Box sx={ { flexGrow: 1, padding: 5 } }>
      <Container sx={ { mt: 4 } }>
        <NewsLetterContainer>
          <NewsletterStyled>
            <Details />
            <SideImage />
          </NewsletterStyled>
        </NewsLetterContainer>
      </Container>
    </Box>
  );
};

export default Newsletter;
