import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import AddChargerTabAddcharger from "components/AddChargerTabAddcharger";
import AddChargerTabSelectsite from "components/AddChargerTabSelectsite";

const AddchargerTabPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard"
        />
      ),
      label: <Text className="w-auto">Summary Operations</Text>,
    },
    {
      icon: (
        <Img
          className="h-[23px] w-[26px]"
          src="images/img_cart.svg"
          alt="cart"
        />
      ),
      label: <Text className="w-auto">Add Site</Text>,
    },
    {
      icon: (
        <Img
          className="h-[25px] w-[26px]"
          src="images/img_close.svg"
          alt="close"
        />
      ),
      label: <Text className="w-auto">Site Summary </Text>,
      href: "/sitesummarytab",
      active: window.location.pathname === "/sitesummarytab",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard_One"
        />
      ),
      label: (
        <>
          <Line className="bg-gray-800 h-9 mb-2 rounded-[3px] w-1.5" />
          <Text className="capitalize w-auto">Add Charger</Text>
        </>
      ),
      href: "/addchargertab",
      active: window.location.pathname === "/addchargertab",
    },
  ];

  return (
    <>
      <div className="bg-gray-50_02 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-start justify-start ml-auto mr-[63px] mt-[147px] p-[37px] md:px-5 rounded-[20px] shadow-bs7 w-[76%]">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px]">
            <Text
              className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
              size="txtRobotoRomanSemiBold24"
            >
              Add Charger For Any Site
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[53px] w-[66%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              Select Your Site
            </Text>
            <AddChargerTabSelectsite className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-start justify-between p-2 rounded-lg shadow-bs1 w-[59%] sm:w-full" />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[30px] w-[66%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              Local ID
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
              <Input
                name="inputfieldtext"
                placeholder="Enter Local ID"
                className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[41%]"
                size="xs"
              ></Input>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[30px] w-[66%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              MAC
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
              <Input
                name="inputfieldtext_One"
                placeholder="Enter Mac"
                className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[41%]"
                size="xs"
              ></Input>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[30px] w-[66%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              Serial
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
              <Input
                name="inputfieldtext_Two"
                placeholder="Enter Serial"
                className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[41%]"
                size="xs"
              ></Input>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[30px] w-[66%] md:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              Capacity
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
              <Input
                name="inputfieldtext_Three"
                placeholder="Enter Capacity"
                className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[41%]"
                size="xs"
              ></Input>
            </div>
          </div>
          <Button
            className="cursor-pointer mb-5 min-w-[121px] md:ml-[0] ml-[286px] mt-10 shadow-bs5 text-base text-center"
            shape="round"
          >
            Add Charger
          </Button>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[27px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group15.png')" }}
          >
            <header className="flex flex-col items-center justify-center mb-1 mr-[23px] w-full">
              <div className="md:h-[139px] h-[46px] relative w-full">
                <div className="header-row absolute">
                  <div className="absolute flex flex-row gap-5 h-full inset-y-[0] items-center justify-between my-auto right-[0] shadow-bs3">
                    <Img
                      className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                      src="images/img_profile.png"
                      alt="profile"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_bxsdownarrow_black_900.svg"
                      alt="bxsdownarrow"
                    />
                  </div>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <Img
                  className="absolute h-[30px] sm:hidden inset-y-[0] my-auto right-[12%] w-[30px]"
                  src="images/img_claritynotific_black_900.svg"
                  alt="claritynotific"
                />
                <div className="flex flex-col h-full sm:hidden items-start justify-start my-auto pr-0.5 pt-0.5">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Tuesday, December 19, 2023 at 10:21:01 PM GMT+5.30
                  </Text>
                </div>
                <div className="absolute flex flex-col h-full sm:hidden inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtRobotoRomanRegular18"
                      >
                        Tuesday, December 19, 2023 at 10:21:01 PM GMT+5.30
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] md:ml-[0] ml-[347px] w-[30px]"
                      src="images/img_claritynotific_black_900.svg"
                      alt="claritynotific_One"
                    />
                    <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[50px] shadow-bs3 w-[8%] md:w-full">
                      <Img
                        className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                        src="images/img_profile.png"
                        alt="profile_One"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_bxsdownarrow_black_900.svg"
                        alt="bxsdownarrow_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[254px] bg-gray-900 flex h-screen md:hidden justify-start mb-auto mt-[-104px] overflow-auto shadow-bs2 top-[0] z-[1]"
          >
            <Img
              className="h-14 md:ml-[0] mt-6 mx-[29px] w-[196px]"
              src="images/img_menu.svg"
              alt="menu"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "14px 14px 14px 15px",
                  gap: "12px",
                  marginTop: "23px",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderRadius: "4px",
                },
              }}
              className="flex flex-col items-center justify-start mt-[49px] pt-[18px] px-3 w-[91%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
              <AddChargerTabAddcharger className="bg-orange-300 flex flex-row items-center justify-start rounded" />
            </Menu>
            {!collapsed && (
              <div className="flex flex-col items-center justify-start mb-[159px] md:ml-[0] ml-[50px] mr-[58px] mt-[387px] w-[58%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="sm:text-[16.86px] md:text-[18.86px] text-[20.86px] text-white-A700"
                      size="txtRobotoRomanBold2086"
                    >
                      Visit Us At
                    </Text>
                    <a
                      href="www.akkodis.com"
                      className="text-[17.88px] text-white-A700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text size="txtRobotoRomanRegular1788">
                        www.akkodis.com
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default AddchargerTabPage;
