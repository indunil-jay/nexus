import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  HiArrowLongRight,
  HiMiniCheck,
  HiOutlineMinusSmall,
} from "react-icons/hi2";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import Window from "@/components/ui/window";

const Features = () => {
  return (
    <section className="bg-dark-50 ">
      <div className="grid gap-14 gird-cols-1 lg:grid-cols-2 items-center section">
        <div className="order-3">
          <Window>
            <div className="flex flex-col px-5">
              <div className="flex justify-between items-center py-4 border-b">
                <h4 className="heading-4">Task Completed Today 🔥</h4>
                <HiOutlineDotsHorizontal className="text-dark-700" />
              </div>
              <div className="flex flex-col gap-3 py-4 pl-4">
                <div className="flex gap-3">
                  <span className="flex items-center justify-center">
                    <span className="h-[20px] aspect-square rounded-full bg-green-500"></span>
                    <HiMiniCheck className="absolute text-dark-0 p-px" />
                  </span>
                  <div className="border rounded-md py-0.5 px-2.5 line-clamp-1 w-full">
                    <span className="text-dark-300">09:00AM</span>
                    <span className="sub-text-3"> - Meeting with client</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center">
                    <span className="h-[20px] aspect-square rounded-full bg-green-500"></span>
                    <HiMiniCheck className="absolute text-dark-0 p-px" />
                  </span>
                  <div className="border rounded-md py-0.5 px-2.5  line-clamp-1 w-full">
                    <span className="text-dark-300">12:00AM</span>
                    <span className="sub-text-3">
                      {" "}
                      - Descuss the brieft with project workflow
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center">
                    <span className="h-[20px] aspect-square rounded-full bg-green-500"></span>
                    <HiMiniCheck className="absolute text-dark-0 p-px" />
                  </span>
                  <div className="border rounded-md py-0.5 px-2.5  line-clamp-1 w-full">
                    <span className="text-dark-300">13:00PM</span>
                    <span className="sub-text-3"> - Create wireframes</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center">
                    <span className="h-[20px] aspect-square rounded-full bg-dark-500"></span>

                    <HiOutlineMinusSmall className="absolute text-dark-0 p-px" />
                  </span>
                  <div className="border rounded-md py-0.5 px-2.5  line-clamp-1 w-full">
                    <span className="text-dark-300">3:00PM</span>
                    <span className="sub-text-3">
                      {" "}
                      - Discuss with project developers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Window>
        </div>

        <div className="flex flex-col ">
          <Tag>Features</Tag>
          <h2 className="heading-2 lg:w-[90%] mt-3">
            Get a Progress Report That You have Achieved
          </h2>
          <p className="sub-text-2 md:w-[90%] lg:w-4/5  mt-5 mb-4">
            You will get a progress report that you have achieved so far all in
            a single unified dashboard.
          </p>

          <div>
            <Button variation="ghost">
              <span className="flex items-center gap-2 text-primary/90 font-semibold">
                <span className="group-hover:text-primary">Learn more</span>

                <HiArrowLongRight className="group-hover:text-primary group-hover:scale-110" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
