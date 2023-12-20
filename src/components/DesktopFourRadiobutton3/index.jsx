import React from "react";

import { Text } from "components";

const DesktopFourRadiobutton3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[31px] rounded-[15px] w-[31px]"></div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[18.6px] text-black-900"
            size="txtRobotoRomanSemiBold186"
          >
            {props?.dayofweek}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopFourRadiobutton3.defaultProps = { dayofweek: "Day of Week" };

export default DesktopFourRadiobutton3;
