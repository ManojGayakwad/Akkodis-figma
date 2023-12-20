import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import SiteSummaryTabOneSitesummary from "components/SiteSummaryTabOneSitesummary";

const inputfieldtextOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SiteSummaryTabOnePage = () => {
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
          src="images/img_close_white_a700_25x26.svg"
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
      <div className="bg-gray-50_02 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col gap-[19px] h-full justify-start ml-auto mr-[51px] mt-[140px] md:px-5 py-[37px] rounded-lg shadow-bs7 w-3/4">
          <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[49px] w-[26%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtRobotoRomanSemiBold24"
              >
                Site Details Summary
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center rounded-[5px] w-auto">
              <div className="bg-gray-900 flex flex-col items-center justify-end p-[5px] rounded-[10px] shadow-bs6 w-full">
                <SelectBox
                  className="mt-0.5 text-left text-sm text-white-A700 w-[86%] sm:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-[5px] w-2.5"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                  }
                  isMulti={false}
                  name="inputfieldtext"
                  options={inputfieldtextOptionsList}
                  isSearchable={false}
                  placeholder="Select Station"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-1 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Line className="bg-gray-300 h-[3px] w-full" />
              <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-6 sm:px-5 w-full">
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  SITE NAME
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  CHARGER SPEED
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  TOTAL
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  ONLINE NOW
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  IN USE NOW
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  IDLE NOW
                </Text>
                <Text
                  className="text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  OFFLINE
                </Text>
                <Text
                  className="mr-1.5 text-[10px] text-gray-500 tracking-[1.00px]"
                  size="txtRobotoRomanBold10"
                >
                  UTILIZATION
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-[9px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <Line className="bg-gray-300 h-[3px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-gray-600 text-sm w-[11%] sm:w-full"
                      size="txtRobotoRomanBold14"
                    >
                      Jio Charging Station
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] md:mt-0 mt-1 text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      22KW
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[105px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[135px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="ml-32 md:ml-[0] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[127px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      0
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[126px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      0
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[122px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      64%
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <Line className="bg-gray-300 h-[3px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-gray-600 text-sm w-[11%] sm:w-full"
                      size="txtRobotoRomanBold14"
                    >
                      Ola hypercharge station
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[57px] md:mt-0 mt-1 text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      22KW
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[105px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[135px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="ml-32 md:ml-[0] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      1
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[127px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      0
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[126px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      0
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[122px] md:mt-0 mt-[5px] text-gray-600 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      64%
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-start mx-auto p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group15.png')" }}
          >
            <Header className="flex flex-col items-center justify-center mb-3 mr-[27px] w-full" />
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
              <SiteSummaryTabOneSitesummary className="bg-orange-300 flex flex-row items-center justify-start rounded" />
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

export default SiteSummaryTabOnePage;
