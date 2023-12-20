import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import DesktopFourRadiobutton from "components/DesktopFourRadiobutton";
import DesktopFourRadiobutton1 from "components/DesktopFourRadiobutton1";
import DesktopFourRadiobutton2 from "components/DesktopFourRadiobutton2";
import DesktopFourRadiobutton3 from "components/DesktopFourRadiobutton3";
import DesktopFourRadiobutton4 from "components/DesktopFourRadiobutton4";
import Sidebar1 from "components/Sidebar1";

const DesktopFourPage = () => {
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
          src="images/img_menudashboard_gray_800.svg"
          alt="menuaddsite"
        />
      ),
      label: "Add Site",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menudashboard.svg"
          alt="menudashboard_One"
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
          src="images/img_menudashboard.svg"
          alt="menudashboard_Two"
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
        <div className="flex flex-col h-full items-start justify-start ml-auto mr-[70px] my-auto md:px-5 w-3/4">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[34px] sm:px-5 rounded-lg shadow-bs7 w-full">
            <div className="flex flex-col items-start justify-start mb-[47px] w-[98%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                  size="txtRobotoRomanSemiBold24"
                >
                  Add Site Details
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between mt-14 w-full">
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Name
                  </Text>
                  <Input
                    name="inputwithaddons"
                    placeholder="Enter Site Name"
                    className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                    wrapClassName="border border-gray-300 border-solid shadow-bs1"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Address
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext"
                      placeholder="Enter Address"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between mt-[30px] w-full">
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    State
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext_One"
                      placeholder="Enter State"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Postcode
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext_Two"
                      placeholder="Enter Postcode"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between mt-[30px] w-full">
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Country
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext_Three"
                      placeholder="Enter Country"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Timezone
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext_Four"
                      placeholder="Enter Time Zone"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between mt-[30px] w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Site Telephone
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1 sm:w-full">
                    <Input
                      name="inputfieldtext_Five"
                      placeholder="Enter Telephone"
                      className="p-0 placeholder:text-gray-500 text-gray-500 text-left text-xs w-full"
                      wrapClassName="md:ml-[0] ml-[13px] mt-0.5 w-[57%]"
                      type="number"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-center justify-between w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtRobotoRomanRegular18"
                  >
                    Site Type
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-start justify-between p-2 rounded-lg shadow-bs1 w-3/5">
                    <div className="flex flex-col items-start justify-start ml-[15px] mt-1 pr-0.5 pt-0.5">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtRobotoRomanRegular12Bluegray200"
                      >
                        Select Site Type
                      </Text>
                    </div>
                    <Img
                      className="h-5 md:h-auto mr-3 mt-1 object-cover w-5"
                      src="images/img_dropdownarrow.png"
                      alt="dropdownarrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[30px] p-8 sm:px-5 rounded-lg shadow-bs7 w-full">
            <div className="flex flex-col gap-[13px] justify-start mb-[15px] mt-[5px] w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                  size="txtRobotoRomanSemiBold24"
                >
                  Availability Schedule
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-3 rounded-[12px] w-[13%] md:w-full">
                  <DesktopFourRadiobutton className="flex flex-row gap-[22.4px] items-center justify-center rounded-[12px] w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[11px] rounded-[12px] shadow-bs5 w-[14%] md:w-full">
                  <DesktopFourRadiobutton1 className="flex flex-row gap-[23.41px] items-center justify-center w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-3 rounded-[12px] shadow-bs5 w-1/5 md:w-full">
                  <DesktopFourRadiobutton2 className="flex flex-row gap-[23.19px] items-center justify-center w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-3 rounded-[12px] shadow-bs5 w-[19%] md:w-full">
                  <DesktopFourRadiobutton3 className="flex flex-row gap-[23.25px] items-center justify-center w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[7px] rounded-[12px] shadow-bs5 w-[31%] md:w-full">
                  <DesktopFourRadiobutton4 className="flex flex-row gap-[23.72px] items-center justify-center my-[3px] w-auto" />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer min-w-[121px] md:ml-[0] ml-[959px] mt-10 text-base text-center"
            shape="round"
            color="gray_700"
          >
            Add Site
          </Button>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[27px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group30.png')" }}
          >
            <header className="flex flex-col items-center justify-center mb-1 mr-[23px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtRobotoRomanRegular24"
                  >
                    ADD SITE
                  </Text>
                </div>
                <Img
                  className="h-[30px] md:ml-[0] ml-[805px] w-[30px]"
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

export default DesktopFourPage;
