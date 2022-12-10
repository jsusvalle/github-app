import { FC } from "react";
import Link from "next/link";

import { Box, Text, Button } from "components/atoms";
import { IconFavourite } from "public/assets/icons";

type ItemRepositoryProps = {
    name?: string;
    url: string;
    idItem: string;
    dataFavourite: string[];
    onClickFavourite: (action: "remove" | "add", idItem: string) => void
}

export const ItemRepository: FC<ItemRepositoryProps> = ({ name="Repository 1", url="", idItem, dataFavourite, onClickFavourite }) => {
    const isFavourite = dataFavourite.find((id: string) => id === idItem);

    const onClick = () => {
        onClickFavourite(isFavourite ? "remove" : "add", idItem)
    }

    return (
        <Box color="gray" display="flex" radius="2xl" padding={4} style={{alignItems: "center"}}>
            <Text>{name}</Text>

            <Link href={url} target="_blank">Link</Link>

            <Button onClick={onClick} width="auto" color="none">
                <IconFavourite color={isFavourite ? "red" : "black"} />
            </Button>
        </Box>
    );
};
