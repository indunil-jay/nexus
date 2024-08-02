"use client";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import DesktopNav from "@/components/desktop-nav";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motionTransition } from "@/utils/ui-transition";

const MainNav = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <header
      ref={ref}
      className="px-2 py-2 md:px-10 sticky top-0 left-0 right-0 bg-white/20 backdrop-blur z-[99999]    border-b border-black/10"
    >
      <div
        style={motionTransition(isInView, "translateY(-200px)")}
        className="flex gap-3 items-center justify-between "
      >
        <Logo />
        <DesktopNav />
        <Button>Get started</Button>
      </div>
    </header>
  );
};

export default MainNav;
