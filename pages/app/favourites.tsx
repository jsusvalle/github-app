import type { FC } from 'react';

import { Layout, ViewRepositories } from "components/templates";

export const FavouritesPage: FC = () => {
    return (
        <Layout>
            <ViewRepositories isFavouritePage={true} />
        </Layout>
    )
}

export default FavouritesPage;