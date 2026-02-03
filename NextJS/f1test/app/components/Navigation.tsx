import Link from "next/link";

const Navigation = () => {
  let username = "username";
  return (
    <div className="flex h-[60px] bg-racing-red font-bold items-center justify-between px-5">
      <Link href={"/"}>
        <p>Logo</p>
      </Link>
      <Link href={"/profile"}>
        <div className="avatar avatar-online avatar-placeholder">
          <div className="bg-carbon-fiber text-neutral-content w-12 rounded-full">
            <span className="text-sm">{username[0].toUpperCase()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
