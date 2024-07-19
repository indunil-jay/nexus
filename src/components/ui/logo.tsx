import clsx from "clsx";
import Link from "next/link";
import React from "react";

type LogoProps = {
  variation?: "dark" | "light";
};

const variations = {
  dark: "text-dark-950",
  light: "text-dark-0",
} as const;

const Logo = ({ variation = "dark" }: LogoProps) => {
  return (
    <div>
      <Link
        href="/ "
        className={clsx(
          "text-[2rem] sm:text-[2.25rem] lg:text-[3.125rem] font-medium font-AllertaStencil capitalize whitespace-nowrap",
          variations[variation]
        )}
      >
        Nexus
      </Link>
    </div>
  );
};

export default Logo;
