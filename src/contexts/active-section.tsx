"use client";
import { navigations } from "@/constants";
import { OtherSections } from "@/hooks/use-transition";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type SectionTypes = (typeof navigations)[number]["url"] | OtherSections;

interface IActiveSectionContext {
  activeSection: SectionTypes;
  setActiveSection: Dispatch<SetStateAction<SectionTypes>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<
  IActiveSectionContext | undefined
>(undefined);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionTypes>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        setTimeOfLastClick,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
