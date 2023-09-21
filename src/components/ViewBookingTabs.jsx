"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ViewBookingTabs = () => {
  const [dataArray, setDataArray] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "https://upride-internships-default-rtdb.firebaseio.com/.json"
    );
    const data = await response.json();
    setDataArray(data.offline_bookings);
  }, []);

  const arrayOfObjects = Object.keys(dataArray).map((key) => ({
    bookingID: key,
    ...dataArray[key],
  }));

  const SUCCESS = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "SUCCESS"
  );
  const CANCELLED = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "CANCELLED"
  );
  const COMPLETED = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "COMPLETED"
  );
  console.log(COMPLETED);

  return (
    <div className="pl-9">
      <Tabs className="designForTads w-fit">
        <TabList>
          <Tab>Active </Tab>
          <Tab>Completed</Tab>
          <Tab>Cancelled</Tab>
        </TabList>
        {/* Tab Panel One  */}
        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="tableHead w-[524px] h-[40px]">
                  <th></th>
                  <th>Name</th>
                  <th>Date</th>
                  <th className="px-16">Package Details</th>
                  <th className="pr-10">Payment Mode</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {SUCCESS?.slice(0, 6)?.map((item) => (
                  <tr>
                    <td className="pt-6 pl-4">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.workshopImage}
                              alt="Workshop Image"
                              className="rounded-[20px]  w-6 h-6"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pl-4 text-xs font-bold">
                      {item?.clientName ? item?.clientName : "Unkown Person"}
                    </td>
                    <td className="px-28  text-xs font-normal">
                      {item?.clientID ? item?.clientID : "No date provided."}
                    </td>
                    <td>
                      {item?.packageTitle
                        ? item?.packageTitle
                        : "Have not a package title."}
                    </td>
                    <td>
                      {item?.paymentMode
                        ? item?.paymentMode
                        : "No Payment Mode provided."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>

        {/* Tab Panel Tow  */}
        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="tableHead w-[524px] h-[40px]">
                  <th></th>
                  <th>Name</th>
                  <th>Date</th>
                  <th className="px-16">Package Details</th>
                  <th className="pr-10">Payment Mode</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {COMPLETED?.slice(0, 6)?.map((item) => (
                  <tr>
                    <td className="pt-6 pl-4">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.workshopImage}
                              alt="Workshop Image"
                              className="rounded-[20px] w-6 h-6"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pl-4 text-xs font-bold">
                      {item?.clientName ? item?.clientName : "Unkown Person"}
                    </td>
                    <td className="px-28  text-xs font-normal">
                      {item?.clientID ? item?.clientID : "No date provided."}
                    </td>
                    <td>
                      {item?.packageTitle
                        ? item?.packageTitle
                        : "Have not a package title."}
                    </td>
                    <td>
                      {item?.paymentMode
                        ? item?.paymentMode
                        : "No Payment Mode provided."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>

        {/* Tab Panel There  */}
        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="tableHead w-[524px] h-[40px]">
                  <th></th>
                  <th>Name</th>
                  <th>Date</th>
                  <th className="px-16">Package Details</th>
                  <th className="pr-10">Payment Mode</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {CANCELLED?.slice(0, 6)?.map((item) => (
                  <tr>
                    <td className="pt-6 pl-4">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.workshopImage}
                              alt="Workshop Image"
                              className="rounded-[20px] w-6 h-6"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pl-4 text-xs font-bold">
                      {item?.clientName ? item?.clientName : "Unkown Person"}
                    </td>
                    <td className="px-28  text-xs font-normal">
                      {item?.clientID ? item?.clientID : "No date provided."}
                    </td>
                    <td>
                      {item?.packageTitle
                        ? item?.packageTitle
                        : "Have not a package title."}
                    </td>
                    <td>
                      {item?.paymentMode
                        ? item?.paymentMode
                        : "No Payment Mode provided."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default ViewBookingTabs;
