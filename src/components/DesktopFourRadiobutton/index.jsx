import React from "react";

import { Text } from "components";

const DesktopFourRadiobutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[26px] border-gray-900 border-solid h-[29px] rounded-[14px] w-[29px]"></div>
        <div className="h-[21px] relative w-[49%]">
          <Text
            className="absolute h-full inset-y-[0] my-auto right-[22%] rotate-[-43deg] text-[17.92px] text-black-900"
            size="txtRobotoRomanSemiBold1792"
          >
            {props?.four}
          </Text>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-[17.92px] text-black-900 w-max"
            size="txtRobotoRomanSemiBold1792"
          >
            {props?.language}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopFourRadiobutton.defaultProps = { four: "+", language: "24    7" };

export default DesktopFourRadiobutton;
