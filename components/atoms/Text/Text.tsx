import React from "react";

import { Font } from "./Text.styles";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = React.forwardRef(
  (
    {
      type="p",
      color="base",
      weight="grayDark",
      size="normal",
      width="full",
      spacing=0,
      textAlign="initial",
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <Font
        ref={ref}
        as={type}
        color={color}
        weight={weight}
        size={size}
        spacing={spacing}
        textAlign={textAlign}
        width={width}
        {...restProps}
      >
        {children}
      </Font>
    );
  }
);

Text.displayName = 'Text';