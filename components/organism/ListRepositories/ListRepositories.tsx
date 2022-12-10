import { FC, useEffect, useState, useMemo } from "react";
import { useSession as useSessionNextAuth } from "next-auth/react";

import { Grid, Box, Loader } from "components/atoms";
import { ItemRepository } from "components/molecules";

import { RepositoryData } from "types";

import { useGetRepositories } from "graphql/endpoints";

import { chargeDataLocalStorage, addOrRemoveToFavourite } from "utils/localstorage";

type ListRepositoriesProps = {
    dataList: any[];
    setDataList: (array: any[]) => void;
    isFavouritePage: boolean;
    valueDebounce: string;
}

export const ListRepositories: FC<ListRepositoriesProps> = ({ valueDebounce="", dataList, setDataList, isFavouritePage }) => {  
    const { data: dataUser } = useSessionNextAuth();
    const { data, isLoading } = useGetRepositories(dataUser?.user?.name as string);

    const [dataFavourite, setDataFavourite] = useState([]);

    useEffect(() => {
        if(data?.user?.repositories) {
            setDataList(data?.user?.repositories?.edges);
        }
    }, [data, setDataList]);

    useEffect(() => {
        setDataFavourite(chargeDataLocalStorage("favourites"));
    }, []);

    const filterData: RepositoryData[] = useMemo(() => {
        if(valueDebounce.trim().length > 0) {
            const dataFiltered = dataList.filter(({node}) => node.name.toLowerCase().indexOf(valueDebounce) !== -1)
            return dataFiltered;
        }

        return dataList;
    }, [valueDebounce, dataList]);

    const onClickFavourite = (action: "remove" | "add", idItem: string) => {
        setDataFavourite(addOrRemoveToFavourite(action, idItem))
    }
    
    return (
        <Box>
            <Loader loading={isLoading}>
                <Grid>
                    { isFavouritePage ? dataFavourite.map((id: string) => {
                        const findItem: any = filterData.find(({node}: any) => node.id === id);

                        return findItem ? <ItemRepository key={findItem.node.id} idItem={findItem.node.id} name={findItem.node.name} url={findItem.node.url} dataFavourite={dataFavourite} onClickFavourite={onClickFavourite} /> : null;
                    }) : 
                        filterData.map(({node}: any) => (
                            <ItemRepository key={node.id} idItem={node.id} name={node.name}  url={node.url} dataFavourite={dataFavourite} onClickFavourite={onClickFavourite} />
                        )
                    )}
                </Grid>
            </Loader>
        </Box>
    );
};
