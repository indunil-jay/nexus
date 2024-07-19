import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";

import Button from "@/components/ui/button";
import GradientTag from "@/components/ui/gradient-tag";
import { heroImage } from "@/constants/images";

const Hero = () => {
  return (
    <section className="flex flex-col items-center pt-16 sm:pt-24 pb-80">
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
      <div className="mx-3 max-w-screen-lg absolute top-[30rem] sm:top-[34rem] shadow-2xl my-12  rounded-lg  shadow-primary/30">
        <Image
          src={heroImage}
          alt="landing-hero-image"
          className="object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
