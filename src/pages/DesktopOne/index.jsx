import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const inputfieldtextOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopOnePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_ioniconbbuilddefault.svg"
          alt="ioniconbbuildde"
        />
      ),
      label: "Setting",
    },
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_iconsgnin.svg"
          alt="ioniconppersond"
        />
      ),
      label: "Profile",
    },
    {
      icon: (
        <Img
          className="h-[15px] w-[15px]"
          src="images/img_ioniconsstatschart.svg"
          alt="ioniconsstatsch"
        />
      ),
      label: "Charts",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 font-roboto h-[1024px] mx-auto pb-[25px] relative w-full">
        <div className="absolute sm:h-[1381px] h-[773px] md:h-[776px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[414px] mx-auto"
            src="images/img_background.svg"
            alt="background"
          />
          <div className="absolute sm:h-[1381px] h-[773px] md:h-[776px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[773px] m-auto object-cover w-full"
              src="images/img_14577184552762.png"
              alt="14577184552762"
            />
            <div className="absolute flex flex-col gap-[21px] items-center justify-start right-[1%] top-[4%] w-[79%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
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
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center shadow-bs3 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-start p-5 rounded-[20px] shadow-bs w-full">
                      <div className="h-[110px] relative w-[110px]">
                        <Text
                          className="ml-[35px] my-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtRobotoRomanBold30"
                        >
                          50
                        </Text>
                        <div className="absolute bg-gradient  h-[110px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs4 w-[110px]"></div>
                      </div>
                      <Text
                        className="mb-[3px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[1.00px]"
                        size="txtRobotoRomanBold26"
                      >
                        Stations Online
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-white-A700 flex flex-col gap-3.5 items-center justify-start p-5 rounded-[20px] shadow-bs w-full">
                      <div className="h-[110px] relative w-[110px]">
                        <Text
                          className="ml-[35px] my-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtRobotoRomanBold30"
                        >
                          70
                        </Text>
                        <div className="absolute bg-gradient  h-[110px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs4 w-[110px]"></div>
                      </div>
                      <Text
                        className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[1.00px]"
                        size="txtRobotoRomanBold26"
                      >
                        Stations In Use
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-start p-5 rounded-[20px] shadow-bs w-full">
                      <div className="h-[110px] relative w-[110px]">
                        <Text
                          className="ml-[35px] my-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtRobotoRomanBold30"
                        >
                          30
                        </Text>
                        <div className="absolute bg-gradient  h-[110px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs4 w-[110px]"></div>
                      </div>
                      <Text
                        className="mb-[3px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[1.00px]"
                        size="txtRobotoRomanBold26"
                      >
                        Stations Offline
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-white-A700 flex flex-col gap-3.5 items-center justify-start p-5 rounded-[20px] shadow-bs w-full">
                      <div className="h-[110px] relative w-[110px]">
                        <Text
                          className="ml-[35px] my-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtRobotoRomanBold30"
                        >
                          5
                        </Text>
                        <div className="absolute bg-gradient  h-[110px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs4 w-[110px]"></div>
                      </div>
                      <Text
                        className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[1.00px]"
                        size="txtRobotoRomanBold26"
                      >
                        Stations In Error
                      </Text>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900 flex flex-1 flex-col gap-[5px] items-center justify-start p-[17px] rounded-[20px] shadow-bs w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtRobotoRomanBold26WhiteA700"
                    >
                      283.23
                    </Text>
                    <Text
                      className="mb-0.5 text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[1.00px]"
                      size="txtRobotoRomanBold22"
                    >
                      Revenue Generated
                    </Text>
                  </div>
                  <div className="bg-gray-900 flex flex-1 flex-col gap-[7px] items-center justify-start p-[17px] rounded-[20px] shadow-bs w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtRobotoRomanBold26WhiteA700"
                    >
                      23%
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[1.00px]"
                      size="txtRobotoRomanBold22"
                    >
                      Station Usage
                    </Text>
                  </div>
                  <div className="bg-gray-900 flex flex-1 flex-col gap-2 items-center justify-start p-[17px] rounded-[20px] shadow-bs w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtRobotoRomanBold26WhiteA700"
                    >
                      104 min
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[1.00px]"
                      size="txtRobotoRomanBold22"
                    >
                      Average Session
                    </Text>
                  </div>
                  <div className="bg-gray-900 flex flex-1 flex-col gap-2 items-center justify-center p-[13px] rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtRobotoRomanBold26WhiteA700"
                    >
                      62.32 kWh
                    </Text>
                    <Text
                      className="mb-1 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[1.00px]"
                      size="txtRobotoRomanBold22"
                    >
                      Average Consumption
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute bottom-[2%] flex items-center justify-center md:px-5 right-[0] w-full">
          <div className="md:h-[1606px] h-[555px] relative w-full">
            <div className="h-[555px] m-auto shadow-bs5 w-full"></div>
            <div className="absolute md:h-[1606px] sm:h-[553px] h-[555px] inset-[0] justify-center m-auto w-full">
              <div className="md:h-[1606px] sm:h-[553px] h-[555px] m-auto w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between mb-[450px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start">
                      <Text
                        className="text-[22px] text-gray-800 sm:text-lg md:text-xl"
                        size="txtRobotoRomanBold22Bluegray900"
                      >
                        Site Details Summary
                      </Text>
                      <div className="flex flex-col items-start justify-center rounded-[5px] w-auto">
                        <div className="bg-gray-900 flex flex-col items-center justify-end p-[5px] rounded-[10px] shadow-bs6 w-full">
                          <SelectBox
                            className="mt-0.5 text-left text-sm text-white-A700 w-[86%] sm:w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[5px] w-2.5"
                                src="images/img_vector.svg"
                                alt="Vector"
                              />
                            }
                            isMulti={false}
                            name="inputfieldtext"
                            options={inputfieldtextOptionsList}
                            isSearchable={false}
                            placeholder="Select Station"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[74px] my-4 rounded-lg text-[10px] text-center"
                      size="sm"
                    >
                      SEE ALL
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[39px] justify-start w-full">
                      <Line className="bg-gray-300 h-0.5 w-full" />
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-6 md:ml-[0] w-[89%] md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanBold14">
                              Jio Charging Station
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[79px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">22KW</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-28 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-24 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[133px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-32 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[113px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[104px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">64%</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[26px] w-full">
                    <div className="flex flex-col gap-3.5 justify-start w-full">
                      <Line className="bg-gray-300 h-[3px] w-full" />
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-6 md:ml-[0] w-[89%] md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanBold14">
                              Ola hypercharge station
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[58px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">22KW</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-28 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-24 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[133px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-32 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[113px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[104px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">64%</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[18px] w-full">
                    <div className="flex flex-col gap-3.5 justify-start w-full">
                      <Line className="bg-gray-300 h-[3px] w-full" />
                      <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-6 md:ml-[0] w-[89%] md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanBold14">
                              Petrol station
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[123px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">24KW</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-28 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-24 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[133px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-32 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[113px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[104px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">64%</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-5 w-full">
                    <div className="flex flex-col gap-3.5 justify-start w-full">
                      <Line className="bg-gray-300 h-px w-full" />
                      <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-6 md:ml-[0] w-[89%] md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanBold14">Gas Station</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[131px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">22KW</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-28 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-24 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[133px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-32 md:ml-[0] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[113px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[104px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">64%</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[18px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Line className="bg-gray-300 h-px w-full" />
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-6 md:ml-[0] mt-2.5 w-[89%] md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="md:mt-0 mt-0.5 text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanBold14">
                              Coal Station
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[131px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">24KW</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-28 md:ml-[0] md:mt-0 mt-0.5 text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-24 md:ml-[0] md:mt-0 mt-0.5 text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[133px] md:mt-0 mt-0.5 text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-32 md:ml-[0] md:mt-0 mt-[3px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mb-[3px] md:ml-[0] ml-[113px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">0</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mb-[3px] md:ml-[0] ml-[104px] text-gray-600 text-sm"
                          >
                            <Text size="txtRobotoRomanRegular14">64%</Text>
                          </a>
                        </li>
                      </ul>
                      <Line className="bg-gray-300 h-[3px] mt-[34px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-full">
                <Line className="bg-gray-300 h-[3px] w-full" />
                <ul className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-6 sm:px-5 w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">SITE NAME</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[146px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">CHARGER SPEED</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[59px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">TOTAL</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[67px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">ONLINE NOW</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[69px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">IN USE NOW</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[68px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">IDLE NOW</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[67px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">OFFLINE</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[66px] text-[10px] text-gray-500 tracking-[1.00px]"
                    >
                      <Text size="txtRobotoRomanBold10">UTILIZATION</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[265px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start left-[1%] overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <Img
            className="h-6 md:h-auto mt-[30px] mx-9 object-cover w-[73%]"
            src="images/img_akkodislogo.png"
            alt="akkodislogo"
          />
          <Line className="bg-gradient1  h-px ml-3.5 mr-[17px] mt-[29px] w-[88%]" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "17px 17px 17px 22px",
                gap: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "0px 5px  14px 0px #0000000c",
                color: "#001f33",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "8px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  backgroundColor: "#001f33ff !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mt-1 pl-[21px] pr-6 pt-[17px] sm:px-5 w-[83%]"
          >
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_ioniconhhomedefault.svg"
                    alt="ioniconhhomedef"
                  />
                }
              >
                <Text>Dashboard</Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_ioniconddocumentdefault.svg"
                    alt="ioniconddocumen"
                  />
                }
              >
                <Text>Reports</Text>
              </MenuItem>
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-5 py-3 rounded-lg shadow-bs w-full">
              <div className="bg-yellow-700_d8 flex flex-1 flex-col items-center justify-start py-[7px] rounded-lg w-full">
                <div className="bg-white-A700 border border-solid border-yellow-700_d8 flex flex-col items-center justify-start rounded-lg w-full">
                  <Text
                    className="text-xs text-yellow-700_d8"
                    size="txtRobotoRomanBold12"
                  >
                    ?
                  </Text>
                </div>
              </div>
              <Text
                className="text-base text-gray-900"
                size="txtRobotoRomanBold16"
              >
                Help
              </Text>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-end mt-5 w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
          </Menu>
          {!collapsed && (
            <Text
              className="ml-[94px] mr-[104px] mt-[310px] text-gray-800 text-sm"
              size="txtRobotoRomanBold14Bluegray900"
            >
              Visit Us At
            </Text>
          )}
          <a
            href="www.akkodis.com"
            className="mb-[41px] ml-20 mr-[87px] mt-0.5 text-gray-600 text-xs"
            target="_blank"
            rel="noreferrer"
          >
            {!collapsed && (
              <Text size="txtRobotoRomanRegular12">www.akkodis.com</Text>
            )}
          </a>
        </Sidebar>
      </div>
    </>
  );
};

export default DesktopOnePage;
