import React from "react";

import { Text } from "components";

const DesktopFourRadiobutton2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[18.55px] text-black-900"
            size="txtRobotoRomanSemiBold1855"
          >
            {props?.dayofmonth}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopFourRadiobutton2.defaultProps = { dayofmonth: "Day of Month" };

export default DesktopFourRadiobutton2;
