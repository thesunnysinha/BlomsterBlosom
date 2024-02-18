import React from 'react'
import TabsComponent from './TabsComponent';
import { Box, Card, CardContent } from "@mui/material";
import styled from "styled-components";
import img from "./images/login.png";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled(Box)`
  img {
    max-width: 100%;
  }
`;


const LoginSignupPage = ({setAccessToken}) => {

    return (
        <>
            <Wrapper>
                <ImageWrapper>
                    <img src={img} alt="Login" />
                </ImageWrapper>
                <Box>
                    <Card sx={{ maxWidth: "400px", margin: "auto" }}>
                        {/* <Box sx={{ textAlign: "center", mt: 2 }}>
                            <h2>Welcome Back !</h2>
                        </Box> */}
                        <CardContent>
                            <TabsComponent setAccessToken= {setAccessToken}/>
                        </CardContent>
                    </Card>
                </Box>
            </Wrapper>
        </>
    );
};

export default LoginSignupPage;