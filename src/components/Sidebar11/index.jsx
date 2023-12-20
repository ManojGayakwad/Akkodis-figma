import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar11 = (props) => {
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
          src="images/img_close_1.svg"
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              fontFamily: "Roboto",
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
                <Text
                  className="text-[17.88px] text-white-A700"
                  size="txtRobotoRomanRegular1788"
                >
                  www.akkodis.com
                </Text>
              </div>
            </div>
          </div>
        )}
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
