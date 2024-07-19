import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiArrowSmallRight } from "react-icons/hi2";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
import UserGroup from "@/components/ui/user-group";
import { users } from "@/constants";
import Window from "@/components/ui/window";

const Projects = () => {
  return (
    <section className="bg-dark-0">
      <div className="grid gap-14 gird-cols-1 lg:grid-cols-2 items-center section">
        <div className="flex flex-col justify-center ">
          <Tag>Projects</Tag>
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

        <Window>
          <div className="flex flex-col px-5">
            <div className="flex justify-between items-center py-4 border-b">
              <h4 className="text-dark-700 text-sm font-medium">
                Task Completation Progress 🧑‍💻
              </h4>
              <HiOutlineDotsHorizontal className="text-dark-700" />
            </div>
            <div className="flex flex-col gap-3 py-4 pl-4">
              <div className="flex items-center gap-4">
                <div className="px-3 py-2 w-10 border rounded-full flex flex-col justify-center items-center">
                  <span className="text-dark-900 text-[20px]">08</span>
                  <span className="text-dark-400 text-xs">FEB</span>
                </div>

                <div>
                  <span className="text-dark-400 text-xs">Today</span>
                  <p className="text-sm">Assigned Task completation</p>
                  <div className="flex gap-2 items-center">
                    <div className="relative w-full h-[4px] rounded-full bg-slate-300 ">
                      <div className="absolute top-0 left-0 w-4/5 h-[4px] rounded-full bg-primary"></div>
                    </div>
                    <span className="text-primary text-[10px]">80%</span>
                  </div>
                </div>

                <UserGroup users={users} />
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

                <UserGroup users={users} />
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Projects;
