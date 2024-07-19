import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import DesktopNav from "@/components/desktop-nav";

const MainNav = () => {
  return (
    <header className="px-2 pt-2 md:px-10">
      <div className="flex gap-3 items-center justify-between ">
        <Logo />
        <DesktopNav />
        <Button>Get started</Button>
      </div>
    </header>
  );
};

export default MainNav;
