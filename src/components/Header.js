import React from "react";

import { RiTodoFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <RiTodoFill className="text-5xl font-medium" />
      <h1 className="text-5xl font-medium">reactNOTES</h1>
    </div>
  );
};

export default Header;
