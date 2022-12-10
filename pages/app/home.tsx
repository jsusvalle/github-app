import type { FC } from 'react';

import { Layout, ViewRepositories } from "components/templates";

export const HomePage: FC = () => {

    return (
        <Layout>
            <ViewRepositories isFavouritePage={false} />
        </Layout>
    )
}

export default HomePage;