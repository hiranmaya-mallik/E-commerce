import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiRocketLaunch } from "react-icons/pi";
import CategoryPenal from "./categorypenal";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPenal = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex justify-between items-center ">
          <div className="col_1 w-[18%]">
            <Button
              className="!text-black font-[500] gap-3 w-full"
              onClick={openCategoryPenal}
            >
              <RiMenu2Fill className="text-[17px]" />
              Shop By Categories
              <FaAngleDown className="ml-auto font-bold" />
            </Button>
          </div>
          <div className="col_2 w-[50%] ">
            <ul className="flex items-center gap-8 font-[500]">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Fashion
                </Link>
              </li>


              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Footwear
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[22%] pl-9">
            <p className="flex items-center gap-6 text-[14px] font-[500]">
              <PiRocketLaunch className="text-[20px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* category penal content starts here*/}

      <CategoryPenal
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
