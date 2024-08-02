"use client";

import { useState } from "react";
import clsx from "clsx";
import { HiMiniCheck } from "react-icons/hi2";
import Button from "@/components/ui/button";
import GradientTag from "@/components/ui/gradient-tag";
import { pricingPlans } from "@/constants";
import { useAddTrasition } from "@/hooks/use-transition";
import { motion } from "framer-motion";
import { motionTransition } from "@/utils/ui-transition";

const Pricing = () => {
  const [togglePrice, setTogglePrice] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const { isInView, ref } = useAddTrasition();
  return (
    <section id="pricing" ref={ref} className="section">
      <motion.div
        style={motionTransition(isInView, "translateY(200px)")}
        className="flex flex-col items-center"
      >
        <div className="flex items-center flex-col justify-center text-center pb-10 w-full">
          <div className="w-fit mx-auto">
            <GradientTag>Simplify</GradientTag>
          </div>

          <h2 className="heading-2 lg:w-4/5 mt-3">Flexible Pricing</h2>
          <p className="sub-text-2 md:w-[90%] lg:w-4/5  mt-5 mb-4">
            Choose the perfect plan that suit your needs.
          </p>

          <div className="border-2 border-dark-950 flex divide-x-2 divide-dark-950 rounded-lg">
            <div
              onClick={() => setTogglePrice("monthly")}
              className={clsx(
                "px-7 py-3 cursor-pointer transition-all",
                togglePrice === "monthly" &&
                  "bg-dark-950 text-dark-0 cursor-not-allowed"
              )}
            >
              Monthly
            </div>
            <div
              onClick={() => setTogglePrice("yearly")}
              className={clsx(
                "px-7 py-3 cursor-pointer transition-all",
                togglePrice === "yearly" &&
                  "bg-dark-950 text-dark-0 cursor-not-allowed"
              )}
            >
              Yearly
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[repeat(3,21rem)] gap-4 min-h-[30rem]">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="border border-dark-950/50 rounded-lg shadow-md flex flex-col  p-6 transition hover:scale-105"
            >
              <h3 className="font-semibold text-base">{plan.name}</h3>
              <p className="text-sm border-b border-dark-950/50 pb-5">
                {plan.describe}
              </p>
              <span className="text-[3rem] font-semibold py-6 block">
                {togglePrice === "yearly"
                  ? (plan.price * 12).toFixed(2)
                  : plan.price}
                &#47;mo
              </span>
              <Button>{plan.btnText}</Button>

              <ul className="border-t border-dark-950/50 mt-6 py-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <HiMiniCheck className="text-base" />
                    <span className="ml-2 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
