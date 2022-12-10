import { FC } from "react";

import { TextField, Box } from "components/atoms";

type TextFieldSearchProps = {
    onChange: (value: string) => void;
    value: string;
}

export const TextFieldSearch: FC<TextFieldSearchProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <Box width="full" display="flex" style={{ alignItems: "center" }}>
            <Box width="full">
                <TextField
                    onChange={handleChange}
                    value={value}
                    name="repository_name"
                    bgColor="grayMain"
                    spacing={0}
                    id="repository_name"
                    type="text"
                    placeholder="Buscar por nombre de repositorio"
                />
            </Box>
        </Box>
    );
};
