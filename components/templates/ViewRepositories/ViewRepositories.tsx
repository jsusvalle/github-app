import { FC, useState } from "react";

import { useSession } from "hooks";

import { Box, Spacer, Loader } from "components/atoms";
import { ListRepositories, TextFieldSearch, GitHubButton } from "components/organism";

import { Container } from "./ViewRepositories.styles";

import { useDebounce } from "hooks";

type ViewRepositoriesProps = {
    isFavouritePage: boolean;
}

export const ViewRepositories: FC<ViewRepositoriesProps> = ({ isFavouritePage }) => {
    const { githubSession, loginGitHub } = useSession();
    
    const [dataList, setDataList] = useState([]);
    const [value, setValue] = useState("");
    const valueDebounce = useDebounce(value, 500);

    if(githubSession === "loading") {
        return <Loader paddingTop="10rem" loading={true} color="blueDark"></Loader>
    }

    if(githubSession === "unauthenticated") {
        return (
            <Container>
                <GitHubButton onSignInGitHub={loginGitHub} />
            </Container>
        )
    }

    return (
        <Container>
            <Box>
                {!isFavouritePage && <TextFieldSearch value={value} onChange={setValue} />}

                <Spacer spacing={6} />

                <ListRepositories valueDebounce={valueDebounce} dataList={dataList as []} setDataList={setDataList} isFavouritePage={isFavouritePage} />
            </Box>
        </Container>
    );
};
