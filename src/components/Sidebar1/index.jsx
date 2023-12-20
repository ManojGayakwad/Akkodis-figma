import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              padding: "11px 11px 11px 15px",
              gap: "12px",
              marginTop: "23px",
              color: "#ffffff",
              fontSize: "16px",
              fontFamily: "Roboto",
              borderRadius: "4px",
              [`&:hover, &.ps-active`]: {
                color: "#3a3a3a",
                fontWeight: "500 !important",
                backgroundColor: "#35fefcff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-11 pt-[15px] px-3 w-[91%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <div className="flex flex-col items-center justify-start mb-[159px] md:ml-[0] ml-[50px] mr-[58px] mt-[425px] w-[58%]">
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

Sidebar1.defaultProps = {};

export default Sidebar1;
