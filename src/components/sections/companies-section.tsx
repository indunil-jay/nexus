"use client";
import { trustedCompanies } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <section className="section pb-0">
      <div className="max-w-screen-xl mx-auto overflow-clip p-6">
        <h3 className=" text-center heading-3">
          Trusted by the fastest growing companies
        </h3>

        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.ul
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {trustedCompanies.map((company) => (
              <li key={company.id} className="relative">
                <Image
                  src={company.img}
                  alt={`${company.name}-${company.id}`}
                  className="h-6 sm:h-8 w-auto "
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Company;
