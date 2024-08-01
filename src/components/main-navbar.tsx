import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import DesktopNav from "@/components/desktop-nav";

const MainNav = () => {
  return (
    <header className="px-2 py-2 md:px-10 sticky top-0 bg-white/20 backdrop-blur z-[99999]">
      <div className="flex gap-3 items-center justify-between ">
        <Logo />
        <DesktopNav />
        <Button>Get started</Button>
      </div>
    </header>
  );
};

export default MainNav;
