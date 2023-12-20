import React from "react";

import { Text } from "components";

const SiteSummaryTabRadiobutton4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[31px] rounded-[15px] w-[31px]"></div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[18.76px] text-black-900"
            size="txtRobotoRomanSemiBold1876"
          >
            {props?.exceptonmaintenone}
          </Text>
        </div>
      </div>
    </>
  );
};

SiteSummaryTabRadiobutton4.defaultProps = {
  exceptonmaintenone: "Except on Maintenance Day",
};

export default SiteSummaryTabRadiobutton4;
