import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";
import SiteSummaryTabDropdown from "components/SiteSummaryTabDropdown";
import SiteSummaryTabRadiobutton from "components/SiteSummaryTabRadiobutton";
import SiteSummaryTabRadiobutton1 from "components/SiteSummaryTabRadiobutton1";
import SiteSummaryTabRadiobutton2 from "components/SiteSummaryTabRadiobutton2";
import SiteSummaryTabRadiobutton3 from "components/SiteSummaryTabRadiobutton3";
import SiteSummaryTabRadiobutton4 from "components/SiteSummaryTabRadiobutton4";

const SiteSummaryTabPage = () => {
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
          src="images/img_cart_white_a700.svg"
          alt="cart"
        />
      ),
      label: (
        <>
          <Line className="bg-gray-800 h-9 mb-[5px] rounded-[3px] w-1.5" />
          <Text className="capitalize w-auto">Add Site</Text>
        </>
      ),
    },
    {
      icon: (
        <Img
          className="h-[25px] w-[26px]"
          src="images/img_close_white_a700.svg"
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
      label: <Text className="w-auto">Add Charger</Text>,
      href: "/addchargertab",
      active: window.location.pathname === "/addchargertab",
    },
  ];

  return (
    <>
      <div className="bg-gray-50_02 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="flex flex-col gap-[30px] h-full items-start justify-start ml-auto mr-[70px] my-auto md:px-5 w-3/4">
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
                  <SiteSummaryTabDropdown className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-start justify-between p-2 rounded-lg shadow-bs1 w-3/5" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded-lg shadow-bs7 w-full">
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
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-2.5 rounded-[12px] shadow-bs5 w-[14%] md:w-full">
                  <SiteSummaryTabRadiobutton className="flex flex-row gap-[23.38px] items-center justify-center mt-0.5 w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-2.5 rounded-[12px] w-[13%] md:w-full">
                  <SiteSummaryTabRadiobutton1 className="flex flex-row gap-[23.46px] items-center justify-center md:ml-[0] ml-[3px] mt-0.5 w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-2.5 rounded-[12px] shadow-bs5 w-1/5 md:w-full">
                  <SiteSummaryTabRadiobutton2 className="flex flex-row gap-[23.38px] items-center justify-center mt-0.5 w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[9px] rounded-[12px] shadow-bs5 w-[19%] md:w-full">
                  <SiteSummaryTabRadiobutton3 className="flex flex-row gap-[23.25px] items-center justify-center my-0.5 w-auto" />
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[9px] rounded-[12px] shadow-bs5 w-[31%] md:w-full">
                  <SiteSummaryTabRadiobutton4 className="flex flex-row gap-[23.45px] items-center justify-center my-0.5 w-auto" />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer min-w-[121px] md:ml-[0] ml-[959px] text-base text-center"
            shape="round"
          >
            Add Site
          </Button>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group15.png')" }}
          >
            <Header className="flex flex-col items-center justify-center mb-3 mr-[27px] w-full" />
          </div>
          <Sidebar11 className="!sticky !w-[254px] bg-gray-900 flex h-screen md:hidden justify-start mb-auto mt-[-104px] overflow-auto shadow-bs2 top-[0] z-[1]" />
        </div>
      </div>
    </>
  );
};

export default SiteSummaryTabPage;
