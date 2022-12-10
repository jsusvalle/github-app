import React from 'react';

import { Header } from 'components/organism';

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <>
            <Header />

            {children}
        </>
    )
}
