"use client";
import { faqs } from "@/constants";
import { useAddTrasition } from "@/hooks/use-transition";
import { useState } from "react";
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import { motionTransition } from "@/utils/ui-transition";

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const { isInView, ref, iobsRef } = useAddTrasition("#faq");

  const toggleFaq = (id: number) => {
    setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
  };

  return (
    <section id="faq" ref={ref} className="bg-dark-50/30 scroll-mt-24">
      <motion.div
        ref={iobsRef}
        className="section "
        style={motionTransition(isInView, "translateX(-200px)")}
      >
        <div className="text-center flex flex-col gap-5">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p className="sub-text-1 max-w-md mx-auto">
            Have some questions before you get started? Check out our FAQs below
            or contact us at{" "}
            <span className="underline lowercase underline-offset-2 text-primary cursor-pointer">
              nexus.info@gmail.com
            </span>
          </p>
        </div>
        <div className="mt-10 max-w-screen-md mx-auto">
          <ul className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <li
                key={faq.id}
                className="relative border px-3 md:px-7 py-3 rounded-lg bg-dark-0"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-dark-900 font-semibold">
                    {faq.question}
                  </h3>
                  {faq.id === openId ? (
                    <HiMiniMinusCircle className="text-primary/90 sm:text-[24px]" />
                  ) : (
                    <HiMiniPlusCircle className="text-primary/90 text-[34px] sm:text-[24px]" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openId === faq.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-dark-600 mt-2">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQs;
