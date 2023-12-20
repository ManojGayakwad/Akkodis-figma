import React from "react";

import { Text } from "components";

const SiteSummaryTabRadiobutton1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[31px] rounded-[15px] w-[31px]"></div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[18.77px] text-black-900"
            size="txtRobotoRomanSemiBold1877"
          >
            {props?.dailytext}
          </Text>
        </div>
      </div>
    </>
  );
};

SiteSummaryTabRadiobutton1.defaultProps = { dailytext: "Daily" };

export default SiteSummaryTabRadiobutton1;
