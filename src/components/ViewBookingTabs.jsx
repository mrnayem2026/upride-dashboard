"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Pagination from "./Pagination";

const ViewBookingTabs = () => {
  const [dataArray, setDataArray] = useState({});
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  // Call API 
  useEffect(async () => {
    const response = await fetch(
      "https://upride-internships-default-rtdb.firebaseio.com/.json"
    );
    const data = await response.json();
    setDataArray(data.offline_bookings);
  }, []);

  // Convert Array from Object
  const arrayOfObjects = Object.keys(dataArray).map((key) => ({
    bookingID: key,
    ...dataArray[key],
  }));

  // Set SUCCESS Item
  const SUCCESS = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "SUCCESS"
  );

  // Paginattion  For SUCCESS
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPostsForSuccess = SUCCESS?.slice(firstPostIndex, lastPostIndex);

  // Set COMPLETED Item
  const COMPLETED = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "COMPLETED"
  );
  // Paginattion  For COMPLETED
  const lastPostIndexCOMPLETED = currentPage * postsPerPage;
  const firstPostIndexCOMPLETED = lastPostIndexCOMPLETED - postsPerPage;
  const currentPostsForSuccessCOMPLETED = COMPLETED?.slice(
    firstPostIndexCOMPLETED,
    lastPostIndexCOMPLETED
  );

  // Set CANCELLED Item
  const CANCELLED = arrayOfObjects.filter(
    (item) => item?.bookingStatus === "CANCELLED"
  );
  //  Paginattion  For CANCELLED
  const lastPostIndexCancelled = currentPage * postsPerPage;
  const firstPostIndexCancelled = lastPostIndexCancelled - postsPerPage;
  const currentPostsForPaginattion = CANCELLED?.slice(
    firstPostIndexCancelled,
    lastPostIndexCancelled
  );

  return (
    <div className="pl-9">
      <Tabs className="designForTads w-fit">
      <TabList className="flex space-x-4 pb-5">
      <Tab className={`px-4 py-2 text-base font-semibold ${activeTabIndex === 0 ? 'text-red-400 border-b-2 border-red-400 focus:outline-none focus:border-none' : 'text-green-500'}`}>
          Active
        </Tab>
        <Tab className={`px-4 py-2 text-base font-semibold ${activeTabIndex === 0 ? 'text-red-400 border-b-2 border-red-400 focus:outline-none focus:border-none' : 'text-gray-400'}`}>
          Completed
        </Tab>
        <Tab className={`px-4 py-2 text-base font-semibold ${activeTabIndex === 0 ? 'text-red-400 border-b-2 border-red-400 focus:outline-none focus:border-none' : 'text-gray-400'}`}>
          Cancelled
        </Tab>
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
                {currentPostsForSuccess?.map((item) => (
                  <tr key={item.bookingID}>
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
          <div className=" flex justify-center items-center">
                  <Pagination
                    totalPosts={SUCCESS.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
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
                {currentPostsForSuccessCOMPLETED?.map((item) => (
                  <tr key={item.bookingID}>
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
          <div className=" flex justify-center items-center">
                  <Pagination
                    totalPosts={CANCELLED.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
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
                {currentPostsForPaginattion?.map((item) => (
                  <tr key={item.bookingID}>
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
            
              
            <Pagination
                  totalPosts={CANCELLED.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ViewBookingTabs;
