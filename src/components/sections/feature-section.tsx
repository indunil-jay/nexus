"use client";

import { useAddTrasition } from "@/hooks/use-transition";
import { FeatureBlockOne, FeatureBlockTwo } from "@/components/features";

const Features = () => {
  const { isInView, ref, iobsRef } = useAddTrasition("#features", 0.5);
  return (
    <section id="features" ref={iobsRef} className="bg-dark-50 scroll-mt-24 ">
      <div ref={ref} className="overflow-hidden">
        <FeatureBlockTwo isInView={isInView} />
        <FeatureBlockOne isInView={isInView} />
      </div>
    </section>
  );
};

export default Features;
