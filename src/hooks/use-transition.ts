import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView as useInViewIObs } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { navigations } from "@/constants";

export const useAddTrasition = (
  activeSection?: (typeof navigations)[number]["url"],
  thresholdValue?: number
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: iobsRef, inView } = useInViewIObs({
    threshold: thresholdValue || 0.7,
  });
  const router = useRouter();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection || "#home");
      router.push(activeSection || "#home");
    }
  }, [
    inView,
    activeSection,
    thresholdValue,
    setActiveSection,
    timeOfLastClick,
  ]);

  return { ref, isInView, iobsRef };
};
