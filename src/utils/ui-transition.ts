export const motionTransition = (isInView: boolean, translation: string) => {
  return {
    transform: isInView ? "none" : translation,
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
  };
};
