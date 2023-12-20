import React from "react";

import { Img, Text } from "components";

const AddChargerTabSelectsite = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start ml-[15px] mt-1">
          <Text
            className="text-gray-500 text-xs"
            size="txtRobotoRomanRegular12Bluegray200"
          >
            {props?.language}
          </Text>
        </div>
        <Img
          className="h-5 md:h-auto mr-[17px] mt-1 object-cover w-5"
          src="images/img_dropdownarrow.png"
          alt="dropdownarrow"
        />
      </div>
    </>
  );
};

AddChargerTabSelectsite.defaultProps = { language: "Select Site " };

export default AddChargerTabSelectsite;
