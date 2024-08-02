import { ActiveSectionContext } from "@/contexts/active-section";
import { useContext } from "react";

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === undefined) {
    throw new Error(
      "Active Section Context was used outside of the ActiveSectionProvider"
    );
  }

  return context;
};
