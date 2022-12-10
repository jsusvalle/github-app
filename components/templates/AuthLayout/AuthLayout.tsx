import React from 'react'

import { Box, Grid } from "components/atoms";

import { IconGithub } from "public/assets/icons";

import { FloatContainer } from "./AuthLayout.styles";

type AuthLayoutProps = {
    children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }): JSX.Element => {
    return (
        <Grid items={2}>
            <FloatContainer>
                <Box display='flex' style={{justifyContent: "center"}}>
                    <IconGithub />
                </Box>
            </FloatContainer>

            <FloatContainer>
                <Box display='flex' style={{justifyContent: "center"}}>
                    {children}
                </Box>
            </FloatContainer>
        </Grid>
    )
}
