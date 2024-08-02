"use client";
import Logo from "@/components/ui/logo";
import { useAddTrasition } from "@/hooks/use-transition";
import { motionTransition } from "@/utils/ui-transition";
import { motion } from "framer-motion";

const Footer = () => {
  const { isInView, ref } = useAddTrasition();

  return (
    <footer
      ref={ref}
      className="relative h-[19rem] bg-gradient-to-br from-black to-dark-950 text-dark-0 px-10 flex items-center flex-col justify-center overflow-hidden"
    >
      <motion.div style={motionTransition(isInView, "translateY(200px)")}>
        <div className="flex flex-col justify-between items-center py-14 lg:py-10 text-center">
          <Logo variation="light" />
          <span className="text-sm font-light">
            Transform Your Workflow with Our Task Managemenet Software.
          </span>
          <span className="text-sm font-light">
            contact us{" "}
            <span className="underline underline-offset-2 text-primary cursor-pointer">
              nexus.info@gmail.com
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row text-sm font-light items-center sm:justify-between border-t border-dark-800 py-4 w-full">
          <p className="">© 2024 Nexus. All Rights Reserved</p>
          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>

        <span className="absolute top-1/2 leading-none tracking-wider -translate-x-1/2 left-1/2 -translate-y-1/2 text-[6.2rem] sm:text-[12rem] font-semibold opacity-10 z-10 ">
          NEXUS
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
