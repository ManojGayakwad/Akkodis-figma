import React from "react";

import { Text } from "components";

const DesktopTwoHelpbutton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start p-3 rounded-lg shadow-bs w-full">
          <div className="bg-yellow-700_d8 flex flex-col h-[30px] items-center justify-start ml-1 p-[7px] rounded-lg w-[30px]">
            <div className="bg-white-A700 border border-solid border-yellow-700_d8 flex flex-col h-4 items-center justify-start px-[5px] rounded-[50%] w-4">
              <Text
                className="text-xs text-yellow-700_d8"
                size="txtRobotoRomanBold12"
              >
                {props?.three}
              </Text>
            </div>
          </div>
          <Text className="text-base text-gray-900" size="txtRobotoRomanBold16">
            {props?.helptext}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopTwoHelpbutton.defaultProps = { three: "?", helptext: "Help" };

export default DesktopTwoHelpbutton;
