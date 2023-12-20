import React from "react";

import { Img, Text } from "components";

const SiteSummaryTabDropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start ml-[15px] mt-1 pr-0.5 pt-0.5">
          <Text
            className="text-gray-500 text-xs"
            size="txtRobotoRomanRegular12Bluegray200"
          >
            {props?.text}
          </Text>
        </div>
        <Img
          className="h-5 md:h-auto mr-3 mt-1 object-cover w-5"
          src="images/img_dropdownarrow.png"
          alt="dropdownarrow"
        />
      </div>
    </>
  );
};

SiteSummaryTabDropdown.defaultProps = { text: "Select Site Type" };

export default SiteSummaryTabDropdown;
