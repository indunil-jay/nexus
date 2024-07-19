import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variation?: "primary" | "outline" | "ghost";
};

const variations = {
  primary: `px-5 sm:px-7 py-2.5 shadow-sm border bg-dark-950 text-dark-0/90 hover:text-dark-0 hover:bg-black border-dark-950/95`,
  outline: `px-5 sm:px-7 py-2.5 shadow-sm border bg-dark-0 text-dark-900 hover:text-dark-950 border-dark-950/65 `,
  ghost: `text-start p-0`,
} as const;

const Button = ({ children, variation = "primary" }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-dark-950 focus:border-dark-950/95 ",
        "rounded-lg text-sm font-medium uppercase  transition-all whitespace-nowrap ",
        "group ",
        variations[variation]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
