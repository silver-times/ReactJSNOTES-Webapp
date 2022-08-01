import React from "react";

import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="flex items-center bg-[#E6E6E5] rounded-xl p-[5px] mb-[1.5em]">
      <MdSearch className="ml-2" size="1.3em" />
      <input
        className="ml-5 bg-[#E6E6E5] placeholder:text-neutral-600 placeholder:text-lg border-none focus:outline-none w-full"
        type="text"
        placeholder="search notes..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
