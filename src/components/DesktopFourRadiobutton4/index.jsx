import React from "react";

import { Text } from "components";

const DesktopFourRadiobutton4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[27px] border-gray-900 border-solid h-[31px] rounded-[15px] w-[31px]"></div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[18.98px] text-black-900"
            size="txtRobotoRomanSemiBold1898"
          >
            {props?.exceptonmaintenOne}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopFourRadiobutton4.defaultProps = {
  exceptonmaintenOne: "Except on Maintenance Day",
};

export default DesktopFourRadiobutton4;
