import { useInView } from "framer-motion";
import { useRef } from "react";

export const useAddTrasition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return { ref, isInView };
};
