type WindowProps = {
  children: React.ReactNode;
};

const Window = ({ children }: WindowProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-h-[18rem] bg-dark-0 relative  max-w-[25rem] outline outline-4 outline-dark-50 rounded-lg border-type-1 overflow-hidden">
        <div className="relative ml-7  mt-10 min-h-[calc(100%-2.5rem)] border-dark-200/60  border-t border-l rounded-tl-lg overflow-hidden">
          <div className="bg-dark-50  h-6 rounded-tl-[7px] flex gap-1 items-center pl-4">
            <div className="bg-red-500 h-[5px] aspect-square rounded-full"></div>
            <div className="bg-yellow-500 h-[5px] aspect-square rounded-full"></div>
            <div className="bg-green-500 h-[5px] aspect-square rounded-full"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;
