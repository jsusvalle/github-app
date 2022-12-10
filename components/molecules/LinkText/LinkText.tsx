import type { FC, ReactNode } from "react";
import Link from "next/link";

import { Text } from "components/atoms";

type LinkTextProps = {
  href?: string,
  children: ReactNode,
}

export const LinkText: FC<LinkTextProps> = ({ href="/", children, ...restProps }) => {
  return (
    <Link href={href} passHref>
      <Text {...restProps}>{children}</Text>
    </Link>
  );
};
