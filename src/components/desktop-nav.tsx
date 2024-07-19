"use client";

import { navigations } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex items-center gap-2 ">
      {navigations.map((item) => (
        <Link
          href={item.url}
          key={item.name}
          className={clsx(
            item.url === pathname && "text-dark-900 bg-dark-100/50 rounded-3xl",
            "px-2.5 py-1.5 text-sm  font-semibold text-dark-400 uppercase transition-all hover:text-dark-800"
          )}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default DesktopNav;
