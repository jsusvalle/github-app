import type { FC } from 'react'

import { Box, Text, Button, Spacer } from "components/atoms";

export type GitHubButtonProps = {
    onSignInGitHub: () => void;
}

export const GitHubButton: FC<GitHubButtonProps> = ({ onSignInGitHub }) => {
    return (
        <Box>
            <Text weight='bold' size='lg'>
                Ingresa a GitHub para poder ver tus repositorios
            </Text>

            <Spacer spacing={5} />

            <Button
                color="blueDark"
                height="3rem"
                width='100%'
                borderRadius="0.5rem"
                onClick={onSignInGitHub}
            >
                <Text size="md" textAlign="center" color="white">
                    Ingresar a GitHub
                </Text>
            </Button>
        </Box>
    );
}
