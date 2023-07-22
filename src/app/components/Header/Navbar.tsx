import React from "react";
import Avatar from "./Avatar";
import Language from "./Language";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <Avatar />
      </div>
      <div className="flex gap-4 items-center">
        <Language />
      </div>
    </div>
  );
};
