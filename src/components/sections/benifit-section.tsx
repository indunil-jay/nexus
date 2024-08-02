import { HiMiniCheck } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Tag from "@/components/ui/tag";
import CheckboxGroup from "@/components/ui/checkbox-group";
import Window from "@/components/ui/window";

const Benifits = () => {
  return (
    <section id="benefits">
      <div className="section">
        <div className="grid gap-14 gird-cols-1 lg:grid-cols-2 items-center">
          <div className="flex flex-col ">
            <Tag>Benefits</Tag>
            <h2 className="heading-2 lg:w-4/5 mt-3">
              Achieve More in Less Time Today
            </h2>
            <p className="sub-text-2 md:w-[90%] lg:w-4/5  mt-5 mb-4">
              You can easily manage and prioritize your tasks, set deadlines and
              track progress in real-time.
            </p>

            <ul className="list-none flex flex-col gap-5">
              <li className="flex gap-2 items-center">
                <span className="flex relative items-center justify-center">
                  <span className="h-[20px] aspect-square rounded-full bg-primary/30"></span>
                  <HiMiniCheck className="absolute text-primary p-px" />
                </span>

                <p className="sub-text-3">
                  Prioritize Your Work with Customizable Task Lists
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex relative items-center justify-center">
                  <span className="h-[20px] aspect-square rounded-full bg-primary/30"></span>
                  <HiMiniCheck className="absolute text-primary p-px" />
                </span>

                <p className="sub-text-3">
                  Stay on Track with Real-Time Task Updates
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex relative items-center justify-center">
                  <span className="h-[20px] aspect-square rounded-full bg-primary/30"></span>
                  <HiMiniCheck className="absolute text-primary p-px" />
                </span>

                <p className="sub-text-3">Collaborate with Teams Seamlessly</p>
              </li>
            </ul>
          </div>

          <Window>
            <div className="flex flex-col px-5">
              <div className="flex justify-between items-center py-4 border-b">
                <h4 className="heading-4">SasS Project 🚀</h4>
                <HiOutlineDotsHorizontal className="text-dark-700" />
              </div>
              <div className="flex flex-col">
                <h5 className="heading-5 py-4">Tasks</h5>
                <div className="flex flex-col gap-y-2.5">
                  <CheckboxGroup />
                </div>
              </div>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
