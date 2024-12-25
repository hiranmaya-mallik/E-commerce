import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-md relative p-2">
      <input
        type="text"
        placeholder="Search products here..."
        className="w-full h-[35px] bg-inherit focus:outline-none p-2"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-black">
        <IoSearchSharp className="text-zinc-800 text-[20px]"/>
      </Button>
    </div>
  );
};

export default Search;
