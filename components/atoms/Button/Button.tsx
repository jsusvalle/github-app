import React from "react";

import { ButtonContainer } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const handleClick =
  ({ onClick }: { onClick: (e: React.ChangeEvent<HTMLInputElement>) => any }) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    onClick(event);
  };

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      type="button",
      color="blue",
      spacing="1rem",
      loading=false,
      children,
      width="100%",
      height="100%",
      borderRadius="1rem",
      onClick,
      disabled,
      ...restProps
    },
    ref
  ) => {
    return (
      <ButtonContainer
        ref={ref}
        type={type}
        color={color}
        spacing={spacing}
        width={width}
        borderRadius={borderRadius}
        disabled={loading || disabled}
        height={height}
        loading={loading}
        onClick={onClick && handleClick({ onClick })}
        {...restProps}
      >
        {children}
      </ButtonContainer>
    );
  }
);

Button.displayName = "Button";
