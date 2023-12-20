import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DesktopTwoHelpbutton from "components/DesktopTwoHelpbutton";

import { CloseSVG } from "../../assets/images";

const DesktopTwoPage = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 font-roboto h-[1024px] mx-auto pb-[93px] relative w-full">
        <div className="absolute md:h-[1798px] h-[773px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[414px] mx-auto"
            src="images/img_background.svg"
            alt="background"
          />
          <div className="absolute md:h-[1798px] h-[773px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[773px] m-auto object-cover w-full"
              src="images/img_14577184552762.png"
              alt="14577184552762"
            />
            <div className="absolute flex flex-col gap-8 items-center justify-start right-[1%] top-[4%] w-[78%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtRobotoRomanBold24"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[45%] md:w-full">
                  <Input
                    name="inputwithaddons"
                    placeholder="Type here..."
                    value={inputwithaddonsvalue}
                    onChange={(e) => setInputwithaddonsvalue(e)}
                    className="!placeholder:text-gray-500 !text-gray-500 p-0 sm:pr-5 text-left text-xs w-full"
                    wrapClassName="border border-gray-300 border-solid flex pr-[35px]"
                    prefix={
                      <Img
                        className="cursor-pointer my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#a0aec0"
                        className="cursor-pointer my-auto"
                        onClick={() => setInputwithaddonsvalue("")}
                        style={{
                          visibility:
                            inputwithaddonsvalue?.length <= 0
                              ? "hidden"
                              : "visible",
                        }}
                        height={39}
                        width={37}
                        viewBox="0 0 37 39"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-2.5 items-start justify-center">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconsgnin.svg"
                      alt="iconsgnin"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <a href="javascript:" className="text-white-A700 text-xl">
                        <Text size="txtRobotoRomanBold20">Sign In</Text>
                      </a>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconsetting.svg"
                    alt="iconsetting"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconnotification.svg"
                    alt="iconnotificatio"
                  />
                </div>
              </div>
              <div className="md:h-[1658px] h-[555px] sm:h-[611px] relative w-full">
                <div className="h-[555px] m-auto shadow-bs5 w-full"></div>
                <div className="absolute md:h-[1658px] h-[555px] sm:h-[611px] inset-[0] justify-center m-auto w-full">
                  <div className="md:h-[1658px] h-[555px] sm:h-[611px] m-auto w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[450px] w-[99%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start">
                          <Text
                            className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                            size="txtRobotoRomanBold22Bluegray900"
                          >
                            Site Details Summary
                          </Text>
                          <Input
                            name="inputwithaddons_One"
                            placeholder="Search Station..."
                            className="!placeholder:text-gray-500 !text-gray-500 md:h-auto p-0 sm:h-auto sm:pr-5 text-left text-xs w-full"
                            wrapClassName="border border-gray-300 border-solid flex pr-[35px] w-full"
                            prefix={
                              <Img
                                className="my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[74px] sm:mt-0 my-4 rounded-lg text-[10px] text-center"
                          size="sm"
                        >
                          SEE ALL
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-[13%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-auto w-full">
                      <List
                        className="flex flex-col gap-[27px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-9 items-center justify-start w-full">
                            <Line className="bg-gray-300 h-0.5 w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                43.3%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[78px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="mb-[3px] md:ml-[0] ml-[74px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[91px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[106px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="ml-28 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[102px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                              <Text
                                className="ml-20 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Line className="bg-gray-300 h-[3px] w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                63%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[90px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="mb-[3px] md:ml-[0] ml-[74px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[91px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[106px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="ml-28 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[102px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                              <Text
                                className="ml-20 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Line className="bg-gray-300 h-[3px] w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                43%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[90px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                24KW
                              </Text>
                              <Text
                                className="mb-[3px] md:ml-[0] ml-[74px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                24KW
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[91px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[106px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="ml-28 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[102px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                              <Text
                                className="ml-20 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start ml-1 my-0 w-full">
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Line className="bg-gray-300 h-px w-full" />
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanBold14"
                              >
                                63%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[86px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="mb-[3px] md:ml-[0] ml-[74px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                22KW
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[91px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[106px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="ml-28 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                1
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[102px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[99px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                0
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                              <Text
                                className="ml-20 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                                size="txtRobotoRomanRegular14"
                              >
                                64%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Img
                        className="h-[68px]"
                        src="images/img_row5.svg"
                        alt="rowFive"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-full">
                    <Line className="bg-gray-300 h-[3px] w-full" />
                    <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3 w-full">
                      <Text
                        className="leading-[12.00px] text-[10px] text-center text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        <>
                          UTILIZATION TODAY
                          <br />( SVC HR )
                        </>
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] sm:ml-[0] ml-[49px] text-[10px] text-center text-gray-500 tracking-[1.00px] w-[5%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        CHARGER SPEED
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] sm:ml-[0] ml-[58px] text-[10px] text-center text-gray-500 tracking-[1.00px] w-[5%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        SITE NAME
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[61px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        ADDRESS
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[65px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        STATE
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[71px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        COUNTRY
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] sm:ml-[0] ml-[67px] text-[10px] text-gray-500 tracking-[1.00px] w-[6%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        POST CODE
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[12.00px] ml-12 sm:ml-[0] text-[10px] text-center text-gray-500 tracking-[1.00px] w-[6%] sm:w-full"
                        size="txtRobotoRomanBold10"
                      >
                        NUM CHARGES
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[45px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        AVAILABILITY
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[31px] mr-[7px] text-[10px] text-gray-500 tracking-[1.00px]"
                        size="txtRobotoRomanBold10"
                      >
                        AVAILABILITY
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-[900px] items-center justify-start left-[1%] p-3.5 md:px-5 shadow-bs top-[3%] w-[19%]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[293px] items-center justify-start mb-[27px] mt-[15px] w-[99%] md:w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-full"
                    src="images/img_akkodislogo.png"
                    alt="akkodislogo"
                  />
                </div>
                <Line className="bg-gradient1  h-px w-full" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="dashboard_One"
                    placeholder="Dashboard"
                    className="!placeholder:text-gray-800 !text-gray-800 font-bold p-0 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-0.5 mb-px h-[15px] mr-[19px]"
                        src="images/img_ioniconhhomedefault.svg"
                        alt="IONIcon/H/home/default"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="reports"
                    placeholder="Reports"
                    className="font-bold p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-0.5 h-[15px] mr-5"
                        src="images/img_ioniconddocumentdefault.svg"
                        alt="IONIcon/D/document/default"
                      />
                    }
                    shape="round"
                    color="gray_900"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <DesktopTwoHelpbutton className="flex flex-col items-center justify-start w-full" />
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="setting"
                    placeholder="Setting"
                    className="font-bold p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-px mb-0.5 h-[15px] mr-[19px]"
                        src="images/img_ioniconbbuilddefault.svg"
                        alt="IONIcon/B/build/default"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="profile"
                    placeholder="Profile"
                    className="font-bold p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-[3px] mb-px h-[15px] mr-5"
                        src="images/img_iconsgnin.svg"
                        alt="IONIcon/P/person/default"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="chart"
                    placeholder="Charts"
                    className="font-bold p-0 placeholder:text-gray-900 text-base text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-0.5 mb-px h-[15px] mr-5"
                        src="images/img_ioniconsstatschart.svg"
                        alt="IONIcon/S/stats/chart"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRomanBold14Bluegray900"
                  >
                    Visit Us At
                  </Text>
                  <a
                    href="www.akkodis.com"
                    className="mt-0.5 text-gray-600 text-xs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text size="txtRobotoRomanRegular12">www.akkodis.com</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
