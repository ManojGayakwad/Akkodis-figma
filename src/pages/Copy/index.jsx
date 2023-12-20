import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";
import Header from "components/Header";
import SiteSummaryTabOneSitesummary from "components/SiteSummaryTabOneSitesummary";

const CopyPage = () => {
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
          src="images/img_close_2.svg"
          alt="close"
        />
      ),
      label: (
        <>
          <Line className="bg-gray-800 h-9 mb-2 rounded-[3px] w-1.5" />
          <Text className="capitalize w-auto">Site Summary </Text>
        </>
      ),
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
      <div className="bg-white-A700 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="absolute bottom-[0] h-[1237px] md:h-[869px] sm:h-[872px] md:px-5 right-[0] w-4/5 md:w-full">
          <div className="absolute bg-orange-300_e0 flex flex-col items-start justify-end left-[0] p-[45px] md:px-10 sm:px-5 shadow-bs7 top-[0] w-[95%]">
            <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-1">
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtRobotoRomanSemiBold24"
              >
                Add Charger For Any Site
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[53px] w-[67%] md:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[30px] w-[67%] md:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[30px] w-[67%] md:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[30px] w-[67%] md:w-full">
              <Text
                className="text-black-900 text-lg"
                size="txtRobotoRomanRegular18"
              >
                Serial
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px] mt-0.5">
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtRobotoRomanRegular12Bluegray200"
                  >
                    Enter Serial
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[30px] w-[67%] md:w-full">
              <Text
                className="text-black-900 text-lg"
                size="txtRobotoRomanRegular18"
              >
                Capacity
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-[9px] rounded-lg shadow-bs1">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px] mt-0.5 pr-0.5 pt-0.5">
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtRobotoRomanRegular12Bluegray200"
                  >
                    Enter Capacity
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-end md:ml-[0] ml-[281px] mt-[41px] p-[9px] rounded shadow-bs5">
              <Text
                className="text-base text-white-A700"
                size="txtRobotoRomanRegular16"
              >
                Add Charger
              </Text>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-[869px] object-cover right-[0]"
            src="images/img_rectangle11.png"
            alt="rectangleEleven"
          />
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[27px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group15.png')" }}
          >
            <Header className="flex flex-col items-center justify-center mb-1 mr-[23px] w-full" />
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[254px] bg-gray-900 flex h-screen md:hidden justify-start mb-auto mt-[-104px] overflow-auto shadow-bs2 top-[0] z-[1]"
          >
            <div className="flex flex-col items-start justify-start md:ml-[0] mt-6 mx-[31px] w-auto">
              <div className="flex flex-col items-start justify-start px-2 py-2.5 w-auto">
                <Img
                  className="h-8 md:h-auto object-cover w-44 sm:w-full"
                  src="images/img_pngwing1.png"
                  alt="pngwingOne"
                />
              </div>
            </div>
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
              className="flex flex-col items-center justify-start mt-[53px] pt-[18px] px-3 w-[91%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
              <SiteSummaryTabOneSitesummary className="bg-orange-300_01 flex flex-row items-center justify-start rounded" />
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

export default CopyPage;
