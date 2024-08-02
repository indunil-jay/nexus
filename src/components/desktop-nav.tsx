"use client";

import { navigations } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";

const DesktopNav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <ul className="hidden md:flex items-center gap-2 ">
      {navigations.map((item) => (
        <li key={item.name} className="relative">
          <Link
            href={item.url}
            className={clsx(
              item.url === activeSection && "text-dark-950 ",
              "px-3 py-1.5 text-sm font-semibold text-dark-400 uppercase transition-all hover:text-dark-800"
            )}
            onClick={() => {
              setActiveSection(item.url), setTimeOfLastClick(Date.now());
            }}
          >
            {item.name}
            {item.url === activeSection && (
              <motion.span
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className="bg-dark-100/40 rounded-3xl absolute inset-0 -z-10"
              ></motion.span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
