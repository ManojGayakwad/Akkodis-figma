import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopThreePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard"
        />
      ),
      label: "Summary Operations",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard_One"
        />
      ),
      label: "Add Site",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard_Two"
        />
      ),
      label: "Site Summary ",
      href: "/sitesummarytab",
      active: window.location.pathname === "/sitesummarytab",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard_gray_800.svg"
          alt="menudashboard_Three"
        />
      ),
      label: "Add Charger",
      href: "/addchargertab",
      active: window.location.pathname === "/addchargertab",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-start justify-start ml-auto mr-[63px] mt-[147px] p-[37px] md:px-5 rounded-lg shadow-bs7 w-[76%]">
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-start justify-between p-[9px] rounded-lg shadow-bs1 w-[59%] sm:w-full">
              <div className="flex flex-col items-start justify-start ml-3.5 mt-[3px]">
                <Text
                  className="text-gray-500 text-xs"
                  size="txtRobotoRomanRegular12Bluegray200"
                >
                  Select Site
                </Text>
              </div>
              <Img
                className="h-5 md:h-auto mr-2.5 mt-0.5 object-cover w-5"
                src="images/img_dropdownarrow.png"
                alt="dropdownarrow"
              />
            </div>
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
            className="cursor-pointer mb-[19px] min-w-[121px] md:ml-[0] ml-[286px] mt-[41px] text-base text-center"
            shape="round"
            color="gray_700"
          >
            Add Charger
          </Button>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[27px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group30.png')" }}
          >
            <header className="flex flex-col items-center justify-center mb-1 mr-[23px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtRobotoRomanRegular24"
                  >
                    ADD CHARGER
                  </Text>
                </div>
                <Img
                  className="h-[30px] md:ml-[0] ml-[776px] w-[30px]"
                  src="images/img_claritynotific.svg"
                  alt="claritynotific"
                />
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[50px] shadow-bs3 w-[8%] md:w-full">
                  <Img
                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                    src="images/img_profile.png"
                    alt="profile"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_bxsdownarrow.svg"
                    alt="bxsdownarrow"
                  />
                </div>
              </div>
            </header>
          </div>
          <Sidebar1 className="!sticky !w-[254px] bg-gray-900 flex h-screen md:hidden justify-start mb-auto mt-[-104px] overflow-auto shadow-bs2 top-[0] z-[1]" />
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
