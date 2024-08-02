"use client";
import clsx from "clsx";
import Button from "@/components/ui/button";
import { BsSendFill } from "react-icons/bs";
import { motionTransition } from "@/utils/ui-transition";
import { useAddTrasition } from "@/hooks/use-transition";
import { motion } from "framer-motion";

const ContactUs = () => {
  const { isInView, ref } = useAddTrasition();
  return (
    <section ref={ref} className="section ">
      <motion.div
        style={motionTransition(isInView, "translateX(-200px)")}
        className="text-center flex flex-col gap-5 mb-20  max-w-md mx-auto"
      >
        <h2 className="heading-2 lg:w-full mt-3">Get started with us Today!</h2>
        <p className="sub-text-2 mt-1 mb-4">
          Thousend people already use provy to improve task management in less
          time.
        </p>

        <label className="flex flex-col items-center sm:flex-row gap-2 ">
          <div className="flex-1">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="youremail@gmail.com"
              className={clsx(
                "border border-dark-950/10  font-medium max-w-[360px]  sm:max-w-md w-full h-[3rem] rounded-md shadow-sm px-5 caret-dark-950 text-dark-950",
                "focus:outline-none focus:border-dark-950/30 foucs:ring-2 focus:ring-dark-950 focus:ring-offset-[6px]",
                "placeholder:text-dark-300 placeholder:font-light",
                " disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              )}
            />
          </div>
          <div>
            <Button>
              <div className="flex items-center gap-2">
                <span className="py-[2px]">send</span>
                <BsSendFill className="text-white" />
              </div>
            </Button>
          </div>
        </label>
      </motion.div>
    </section>
  );
};

export default ContactUs;
