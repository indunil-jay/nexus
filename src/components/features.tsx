"use client";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  HiArrowLongRight,
  HiArrowSmallRight,
  HiMiniCheck,
  HiOutlineMinusSmall,
} from "react-icons/hi2";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import UserGroup from "@/components/ui/user-group";
import { users } from "@/constants";
import Window from "@/components/ui/window";
import { motionTransition } from "@/utils/ui-transition";

export const FeatureBlockOne = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="bg-dark-0">
      <div className="grid gap-14 gird-cols-1 lg:grid-cols-2 items-center section ">
        <div
          style={motionTransition(isInView, "translateX(-200px)")}
          className="flex flex-col justify-center "
        >
          <Tag>Features</Tag>
          <h2 className="heading-2 lg:w-4/5 mt-3">
            Maintain Organization and Control at all Times
          </h2>
          <p className="sub-text-2 md:w-[90%] lg:w-4/5  mt-5 mb-4">
            Create private and comment &mdash; only projects for sensitive work,
            so it&apos;s seen by right people and your data stays inact.
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

        <div style={motionTransition(isInView, "translateX(200px)")}>
          <Window>
            <div className="flex flex-col px-5 overflow-hidden">
              <div className="flex justify-between items-center py-4 border-b">
                <h4 className="text-dark-700 text-sm font-medium">
                  Task Completation Progress 🧑‍💻
                </h4>
                <HiOutlineDotsHorizontal className="text-dark-700" />
              </div>

              <div className="flex flex-col gap-3 py-4 md:pl-4">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-2 w-10 border rounded-full flex flex-col justify-center items-center">
                    <span className="text-dark-900 text-[20px]">08</span>
                    <span className="text-dark-400 text-xs">FEB</span>
                  </div>

                  <div className="">
                    <span className="text-dark-400 text-xs">Today</span>
                    <p className="text-sm">Assigned Task completation</p>
                    <div className="flex gap-2 items-center">
                      <div className="relative w-full h-[4px] rounded-full bg-slate-300 ">
                        <div className="absolute top-0 left-0 w-4/5 h-[4px] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-primary text-[10px]">80%</span>
                    </div>
                  </div>
                  <div className="hidden sm:inline-flex">
                    <UserGroup users={users} />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-3 py-2 w-10 border rounded-full flex flex-col justify-center items-center">
                    <span className="text-dark-900 text-[20px]">07</span>
                    <span className="text-dark-400 text-xs">FEB</span>
                  </div>

                  <div>
                    <span className="text-dark-400 text-xs">Yesterday</span>
                    <p className="text-sm">Assigned Task completation</p>
                    <div className="flex gap-2 items-center">
                      <div className="relative w-full h-[4px] rounded-full bg-slate-300 ">
                        <div className="absolute top-0 left-0 w-[96%] h-[4px] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-primary text-[10px]">96%</span>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex">
                    <UserGroup users={users} />
                  </div>
                </div>
              </div>
            </div>
          </Window>
        </div>
      </div>
    </div>
  );
};

export const FeatureBlockTwo = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="lg:grid flex flex-col gap-14 gird-cols-1 lg:grid-cols-2 items-center section">
      <div
        style={motionTransition(isInView, "translateX(-200px)")}
        className="flex flex-col order-1 lg:order-none"
      >
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

      <div
        className="order-5  lg:order-none"
        style={motionTransition(isInView, "translateX(200px)")}
      >
        <Tag>Features</Tag>
        <h2 className="heading-2 lg:w-[90%] mt-3">
          Get a Progress Report That You have Achieved
        </h2>
        <p className="sub-text-2 md:w-[90%] lg:w-4/5  mt-5 mb-4">
          You will get a progress report that you have achieved so far all in a
          single unified dashboard.
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
  );
};
