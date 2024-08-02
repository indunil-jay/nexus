"use client";

import { useAddTrasition } from "@/hooks/use-transition";
import { FeatureBlockOne, FeatureBlockTwo } from "@/components/features";

const Features = () => {
  const { isInView, ref } = useAddTrasition();
  return (
    <section id="features" ref={ref} className="bg-dark-50 overflow-hidden ">
      <FeatureBlockOne isInView={isInView} />
      <FeatureBlockTwo isInView={isInView} />
    </section>
  );
};

export default Features;
