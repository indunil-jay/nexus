type TagProps = { children: React.ReactNode };
const Tag = ({ children }: TagProps) => {
  return (
    <span className="uppercase font-semibold text-[13px] text-dark-400 border-l-2 border-l-primary-lighter/60 pl-2">
      {children}
    </span>
  );
};

export default Tag;
