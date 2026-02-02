import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex h-[60px] bg-racing-red font-bold items-center justify-between px-5">
      <Link href={"/"}>
        <p>Logo</p>
      </Link>
      <div className="avatar avatar-online avatar-placeholder">
        <div className="bg-carbon-fiber text-neutral-content w-12 rounded-full">
          <Link href={"/profile"}>
            <span className="text-sm">Jonas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
