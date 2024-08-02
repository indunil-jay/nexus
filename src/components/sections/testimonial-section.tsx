"use client";
import {
  HiArrowSmallRight,
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { testimonials } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motionTransition } from "@/utils/ui-transition";
import { useAddTrasition } from "@/hooks/use-transition";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { isInView, ref } = useAddTrasition();

  return (
    <section ref={ref}>
      <motion.div
        style={motionTransition(isInView, "translateX(200px)")}
        className="grid gap-14 grid-cols-1 lg:grid-cols-2 items-center section"
      >
        <div className="flex flex-col justify-center">
          <Tag>Testimonials</Tag>
          <h2 className="heading-2 lg:w-4/5 mt-3">
            Thousands of Users are Delighted with Our Platform
          </h2>
          <p className="sub-text-2 md:w-[90%] lg:w-4/5 mt-5 mb-4">
            It has been proven by our users that our platform is very helpful
            for those who have trouble managing tasks.
          </p>
          <div>
            <Button>
              <span className="flex gap-2 items-center">
                <span>Get started</span>
                <HiArrowSmallRight />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            className="w-full sm:max-w-[26rem]"
          >
            <div className="absolute w-[6rem] top-6 right-6  items-center px-4">
              <div className="flex gap-12">
                <HiOutlineArrowLongLeft className="swiper-button-prev swiper-button-prev-custom text-[2rem] text-dark-900 cursor-pointer transition hover:text-black" />
                <HiOutlineArrowLongRight className="swiper-button-next swiper-button-next-custom text-[2rem] text-dark-900 cursor-pointer transition hover:text-black" />
              </div>
            </div>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative bg-dark-0 border-type-1 outline outline-2 outline-dark-200/15 rounded-xl p-6 md:p-10 shadow-md max-w-[26rem] h-[23rem] mx-auto">
                  <div className="h-[3.6rem] aspect-square rounded-full relative overflow-clip mb-3">
                    <Image
                      src={testimonial.img}
                      alt="testimonial-user-image"
                      className="h-[3.6rem] aspect-square"
                    />
                  </div>
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-dark-600 capitalize">
                      {testimonial.name}
                    </h4>
                    <h5 className="text-dark-400 font-medium capitalize text-[11px]">
                      {testimonial.occupation}
                    </h5>
                  </div>

                  <div className="flex gap-1 mb-3.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        <IoStarSharp className="text-primary-lighter" />
                      </span>
                    ))}
                  </div>

                  <blockquote className="text-black text-lg line-clamp-6 leading-6 font-medium indent-4 hyphens-auto">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-0 w-full flex justify-center pb-4">
            <div className="swiper-pagination swiper-pagination-bullet "></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
