import React from "react";

import { Text } from "components";

const SiteSummaryTabTwoRadiobutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-orange-A100 border-solid flex flex-col h-[31px] items-center justify-start p-[7px] rounded-[15px] w-[31px]">
          <div className="bg-orange-A100 border-[50px] border-solid border-white-A700 h-[15px] rounded-[7px] w-[15px]"></div>
        </div>
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

SiteSummaryTabTwoRadiobutton.defaultProps = { dailytext: "Daily" };

export default SiteSummaryTabTwoRadiobutton;
