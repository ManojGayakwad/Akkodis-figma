import React from "react";

import { MenuItem } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const SummaryOperationTabOneRowrectanglefive = (props) => {
  return (
    <>
      <MenuItem
        icon={
          <Img
            className="h-6 w-6"
            src="images/img_menudashboard.svg"
            alt="menusummaryoper"
          />
        }
      >
        <Line className="bg-gray-800 h-9 mb-2 rounded-[3px] w-1.5" />
        <Text className="capitalize font-medium font-roboto ml-3 text-base text-white-A700 w-auto">
          {props?.text}
        </Text>
      </MenuItem>
    </>
  );
};

SummaryOperationTabOneRowrectanglefive.defaultProps = {
  text: "Summary Operations",
};

export default SummaryOperationTabOneRowrectanglefive;
