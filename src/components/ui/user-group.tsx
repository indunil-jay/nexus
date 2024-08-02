import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type UserGroupProps = {
  size?: number;
  users: StaticImageData[];
};
const UserGroup = ({ size, users }: UserGroupProps) => {
  return (
    <div className="flex items-center justify-center relative -space-x-3 ">
      {users.map((user, index) => (
        <div
          key={index + 1}
          className={clsx(
            size ? `${size}px` : "h-5",
            "aspect-square border border-dark-0 rounded-full bg-dark-100 relative overflow-clip"
          )}
        >
          <Image src={user} alt={`${user}-${index + 1}`} className="h-5 w-5" />
        </div>
      ))}
    </div>
  );
};

export default UserGroup;
