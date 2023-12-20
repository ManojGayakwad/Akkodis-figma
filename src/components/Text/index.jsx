import React from "react";

const sizeClasses = {
  txtRobotoRomanBold12: "font-bold font-roboto",
  txtRobotoRomanBold10: "font-bold font-roboto",
  txtRobotoRomanBold30: "font-bold font-roboto",
  txtRobotoRomanBold26WhiteA700: "font-bold font-roboto",
  txtRobotoRomanSemiBold1855: "font-roboto font-semibold",
  txtRobotoRomanSemiBold1877: "font-roboto font-semibold",
  txtRobotoRomanSemiBold24: "font-roboto font-semibold",
  txtRobotoRomanSemiBold1898: "font-roboto font-semibold",
  txtRobotoRomanSemiBold1876: "font-roboto font-semibold",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanBold14Bluegray900: "font-bold font-roboto",
  txtRobotoRomanBold14: "font-bold font-roboto",
  txtRobotoRomanRegular24: "font-normal font-roboto",
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanSemiBold1792: "font-roboto font-semibold",
  txtRobotoRomanBold22: "font-bold font-roboto",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtRobotoRomanSemiBold1873: "font-roboto font-semibold",
  txtRobotoRomanSemiBold1871: "font-roboto font-semibold",
  txtRobotoRomanRegular12Bluegray200: "font-normal font-roboto",
  txtRobotoRomanSemiBold186: "font-roboto font-semibold",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtRobotoRomanRegular1788: "font-normal font-roboto",
  txtRobotoRomanBold2086: "font-bold font-roboto",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanBold26: "font-bold font-roboto",
  txtRobotoRomanBold22Bluegray900: "font-bold font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
