import type { FC } from 'react';

import { useSession } from "hooks";

import { Text, Button } from "components/atoms";
import { LinkText } from "components/molecules";

import {
    ContainerHeader,
    Navbar,
    UnorderedList,
    ItemList,
} from "./Header.styles";

const navBarItems = [
    { name: "Inicio", href: "/app/home" },
    { name: "Favoritos", href: "/app/favourites" },
];

export const Header: FC = () => {
    const { signOutSessions } = useSession();

    return (
        <ContainerHeader>
            <Navbar>
                <Text weight='bold' size='lg'>
                    Hola, usuario
                </Text>

                <UnorderedList>
                    {navBarItems && navBarItems.map((item) => (
                        <ItemList key={item.name}>
                            <LinkText
                                href={item.href}
                                size="md"
                                color="grayDark"
                                weight="medium"
                                spacing={3}
                                >
                                {item.name}
                            </LinkText>
                        </ItemList>
                    ))}
                </UnorderedList>

                <Button
                    color="blueDark"
                    height="2.5rem"
                    width='10rem'
                    borderRadius="0.5rem"
                    onClick={signOutSessions}
                >
                    <Text size="md" textAlign="center" color="white">
                        Salir
                    </Text>
                </Button>
            </Navbar>
        </ContainerHeader>
    );
}
