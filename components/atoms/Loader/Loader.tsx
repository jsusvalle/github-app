import { FC } from "react";

import { LoaderContainer, CircleLoader } from "./Loader.styles";
import { LoaderProps } from "./Loader.types";

export const Loader: FC<LoaderProps> = ({
    color="blue",
    loading=true,
    width=40,
    paddingTop="0px",
    isIconButton=false,
    children,
    ...restProps
}) => {
    if (loading)
        return (
            <LoaderContainer paddingTop={paddingTop} {...restProps}>
                <CircleLoader
                    data-testid="circle-loader"
                    isIconButton={isIconButton}
                    color={color}
                    width={width}
                ></CircleLoader>
            </LoaderContainer>
    );

    return <>{children}</>;
};
