import { trustedCompanies } from "@/constants";
import Image from "next/image";

const Company = () => {
  return (
    <section className="flex  flex-col items-center pt-[5rem] sm:pt-[20rem] lg:pt-[32rem]">
      <div className="max-w-screen-xl mx-auto overflow-clip p-6">
        <h3 className=" text-center heading-3">
          Trusted by the fastest growing companies
        </h3>

        <div className="mt-10 ">
          <ul className="flex items-center  gap-16 flex-none overflow-clip">
            {trustedCompanies.map((company) => (
              <li key={company.id} className="flex-none">
                <Image
                  src={company.img}
                  alt={`${company.name}-${company.id}`}
                  className="h-8 w-auto "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Company;
