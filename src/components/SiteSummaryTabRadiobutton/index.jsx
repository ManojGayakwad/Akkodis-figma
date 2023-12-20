import React from "react";

import { Text } from "components";

const SiteSummaryTabRadiobutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[31px] rounded-[15px] w-[31px]"></div>
        <div className="h-[22px] relative w-[49%]">
          <Text
            className="absolute h-full inset-y-[0] my-auto right-[24%] rotate-[-43deg] text-[18.71px] text-black-900"
            size="txtRobotoRomanSemiBold1871"
          >
            {props?.rotation}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-[18.71px] text-black-900 w-max"
            size="txtRobotoRomanSemiBold1871"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

SiteSummaryTabRadiobutton.defaultProps = { rotation: "+", text: "24    7" };

export default SiteSummaryTabRadiobutton;
