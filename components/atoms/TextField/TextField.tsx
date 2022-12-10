import React from "react";

import { ContainerForm, ContainerTextField, ContainerError, InputTextField, LabelContainer, Label } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";

const handleChange = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => any }) => (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange(e);
};

export const TextField: React.FC<TextFieldProps> = React.forwardRef(
  (
    {
      type="text",
      bgColor="grayDark",
      color="black",
      spacing,
      value,
      onChange,
      name="",
      label="",
      error="",
      helperText="",
      placeholder="",
      autocomplete,
      ...restProps
    },
    ref
  ) => {
    return (
      <ContainerForm>
        <LabelContainer>  
          <Label>{label}</Label>
        </LabelContainer>
      
        <ContainerTextField error={error} {...restProps}>
          <InputTextField
            ref={ref}
            type={type}
            value={value}
            onChange={handleChange({ onChange })}
            placeholder={placeholder}
            color={color}
            bgColor={bgColor}
            spacing={spacing}
            name={name}
            autocomplete={autocomplete}
            role="input"
          />
        </ContainerTextField>

        <ContainerError>{helperText && helperText}</ContainerError>
      </ContainerForm>
    );
  }
);

TextField.displayName = 'TextField';