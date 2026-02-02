import React from "react";

const Navigation = () => {
  return (
    <div className="flex h-[55px] bg-racing-red font-bold items-center justify-between px-5">
      <p>Logo</p>
      <div className="avatar avatar-online avatar-placeholder">
        <div className="bg-carbon-fiber text-neutral-content w-12 rounded-full">
          <span className="text-sm">Jonas</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
