import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryPenal = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box className="w-64 h-full bg-white shadow-md">
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="text-lg font-semibold">Shop by Categories</h3>
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-xl"
        />
      </div>
      <div className="overflow-y-auto h-[calc(100%-3.5rem)] no-scrollbar">
        <ul className="flex flex-col gap-4 p-4">
          {/* Category Example */}
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left font-medium  text-zinc-600 link transition"
                onClick={() => openSubmenu(0)}
              >
                Fashion
              </Link>
              {submenuIndex === 0 ? (
                <FaRegSquareMinus
                  className="text-lg cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-lg cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              )}
            </div>

            {/* Submenu */}
            {submenuIndex === 0 && (
              <ul className="pl-4 mt-2">
                <li className="relative">
                  <div className="flex items-center justify-between">
                    <Link
                      className="w-full text-left  font-medium capitalize"
                      onClick={() => openInnerSubmenu(0)}
                    >
                      Apparel
                    </Link>
                    {innerSubmenuIndex === 0 ? (
                      <FaRegSquareMinus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="w-full text-left  font-medium capitalize"
                      onClick={() => openInnerSubmenu(1)}
                    >
                      Outerwear
                    </Link>
                    {innerSubmenuIndex === 1 ? (
                      <FaRegSquareMinus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="w-full text-left  font-medium capitalize"
                      onClick={() => openInnerSubmenu(2)}
                    >
                      Footwear
                    </Link>
                    {innerSubmenuIndex === 2 ? (
                      <FaRegSquareMinus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(2)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(2)}
                      />
                    )}
                  </div>

                  {/* Inner Submenu */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="pl-6 mt-2 text-gray-700">
                      <li>
                        <Link to="/" className="block py-1 link">
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Leather Watch
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="pl-6 mt-2 text-gray-700">
                      <li>
                        <Link to="/" className="block py-1 link">
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Leather Watch
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                  {innerSubmenuIndex === 2 && (
                    <ul className="pl-6 mt-2 text-gray-700">
                      <li>
                        <Link to="/" className="block py-1 link">
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Leather Watch
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Jewellery
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Watches
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left font-medium  text-zinc-600 link transition"
                onClick={() => openSubmenu(1)}
              >
                Outerwear
              </Link>
              {submenuIndex === 1 ? (
                <FaRegSquareMinus
                  className="text-lg cursor-pointer"
                  onClick={() => openSubmenu(1)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-lg cursor-pointer"
                  onClick={() => openSubmenu(1)}
                />
              )}
            </div>

            {/* Submenu */}
            {submenuIndex === 1 && (
              <ul className="pl-4 mt-2">
                <li className="relative">
                  <div className="flex items-center justify-between">
                    <Link
                      className="w-full text-left  font-medium capitalize"
                      onClick={() => openInnerSubmenu(1)}
                    >
                      Apparel
                    </Link>
                    {innerSubmenuIndex === 1 ? (
                      <FaRegSquareMinus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="text-lg cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    )}
                  </div>

                  {/* Inner Submenu */}
                  {innerSubmenuIndex === 1 && (
                    <ul className="pl-6 mt-2 text-gray-700">
                      <li>
                        <Link to="/" className="block py-1 link">
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Leather Watch
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block py-1 link">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Cosmetics
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Accessories
              </Link>
            </div>
          </li>

          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Electronic
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Furniture
              </Link>
            </div>
          </li>

          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Sunglassess
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Rolling Diamond
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Xbox controller
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Leather Watch
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Smart Tablet
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link
                className="w-full text-left text-gray-600 font-medium capitalize link transition"
                onClick={() => openSubmenu(1)}
              >
                Purse
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPenal;
