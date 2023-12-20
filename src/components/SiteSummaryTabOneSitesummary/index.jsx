import React from "react";

import { MenuItem } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const SiteSummaryTabOneSitesummary = (props) => {
  return (
    <>
      <MenuItem
        icon={
          <Img
            className="h-[25px] w-[26px]"
            src="images/img_close_white_a700_25x26.svg"
            alt="close"
          />
        }
        active={window.location.pathname === "/sitesummarytab"}
      >
        <Line className="bg-gray-800 h-9 mb-2 rounded-[3px] w-1.5" />
        <Text className="capitalize font-medium font-roboto ml-3 text-base text-white-A700 w-auto">
          {props?.text}
        </Text>
      </MenuItem>
    </>
  );
};

SiteSummaryTabOneSitesummary.defaultProps = { text: "Site Summary " };

export default SiteSummaryTabOneSitesummary;
