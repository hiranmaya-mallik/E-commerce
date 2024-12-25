import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "../Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time's only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex gap-2">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="link text-[12px] font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="link text-[12px] font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-5 border-b-[1px] border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/logo.jpg" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center gap-3 w-full justify-end">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="link transition text-[15px] font-[500] pl-5"
                >
                  Login
                </Link>{" "}
                | &nbsp;
                <Link
                  to={"/register"}
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <GoGitCompare className="link transition" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <GoHeart className="link transition" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <AiOutlineShoppingCart className="link transition" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    </header>
  );
};

export default Header;
