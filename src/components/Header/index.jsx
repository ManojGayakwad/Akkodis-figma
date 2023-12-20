import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
          <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
            <Text
              className="text-black-900 text-lg"
              size="txtRobotoRomanRegular18"
            >
              Tuesday, December 19, 2023 at 10:21:01 PM GMT+5.30
            </Text>
          </div>
          <Img
            className="h-[30px] md:ml-[0] ml-[347px] w-[30px]"
            src="images/img_claritynotific_black_900.svg"
            alt="claritynotific"
          />
          <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[50px] shadow-bs3 w-[8%] md:w-full">
            <Img
              className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
              src="images/img_profile.png"
              alt="profile"
            />
            <Img
              className="h-4 w-4"
              src="images/img_bxsdownarrow_black_900.svg"
              alt="bxsdownarrow"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
