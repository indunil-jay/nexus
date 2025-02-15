"use client";
import Image from "next/image";

import { HiArrowSmallRight } from "react-icons/hi2";
import Button from "@/components/ui/button";
import GradientTag from "@/components/ui/gradient-tag";
import { heroImage } from "@/constants/images";
import { motionTransition } from "@/utils/ui-transition";
import { useAddTrasition } from "@/hooks/use-transition";

const Hero = () => {
  const { isInView, ref, iobsRef } = useAddTrasition("#home");
  return (
    <section
      id="home"
      ref={iobsRef}
      className="flex flex-col items-center scroll-mt-24  py-16"
    >
      <div ref={ref} className="overflow-hidden">
        <div
          style={motionTransition(isInView, "translateX(-200px)")}
          className="flex items-center flex-col"
        >
          <GradientTag>Streamline your workflow</GradientTag>

          <h1 className="heading-1 text-center mt-3">
            <span className="block">Revolutionize Your</span>
            <span className="block">Workflow with Our Task</span>
            <span className="block">Management Software</span>
          </h1>

          <div className="max-w-screen-sm  text-center mt-4 mx-3">
            <p className="sub-text-1">
              Streamline your workday with our cutting-edge task management
              software. Say goodbye to missed deadlines and hello to increased
              productivity.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <Button>
              <span className="flex gap-2 items-center">
                <span>Get started</span>
                <HiArrowSmallRight />
              </span>
            </Button>
            <Button variation="outline">Try Demo</Button>
          </div>
        </div>

        <div
          style={motionTransition(isInView, "translateY(200px)")}
          className="mx-3 max-w-screen-lg  shadow-2xl mt-12  rounded-lg  shadow-primary/30"
        >
          <Image
            src={heroImage}
            alt="landing-hero-image"
            className="object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
