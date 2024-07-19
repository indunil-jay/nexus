type GradientProps = {
  children: React.ReactNode;
};
const GradientTag = ({ children }: GradientProps) => {
  return (
    <div className="rounded-full bg-gradient-to-r from-primary-darker to-primary-lighter p-px shadow-sm w-fit">
      <div className="rounded-full bg-dark-0 px-2.5 py-[2px]">
        <span className="text-transparent text-sm font-medium capitalize bg-clip-text bg-gradient-to-r from-primary-darker to-primary-lighter">
          {children}
        </span>
      </div>
    </div>
  );
};

export default GradientTag;
