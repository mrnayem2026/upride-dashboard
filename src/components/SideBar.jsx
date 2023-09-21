import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import logo from "../assest/icons/logo.png";
import home from "../assest/icons/home.png";
import MyEarningLogo from "../assest/icons/MyEarningLogo.png";
import MyServices from "../assest/icons/MyServices.png";
import MyAssests from "../assest/icons/MyAssests.png";

const openSans = Open_Sans({ subsets: ["latin"] });

const SideBar = () => {
  return (
    <div className={openSans.className}>
      <div className="drawer h-[100vh]  lg:drawer-open sidebar-design">
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side  mt-5">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {/* Logo  */}
          <Image src={logo} className="pl-9" alt="logo"></Image>

          {/* Location Branch section Start  */}
          {/* TODO: Collaps Baki  */}
          {/* Location Branch section End  */}

          {/* Menu Content Start  */}
          <ul className="menu  pt-6 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {/* Home  */}
            <li className=" bg-[#D9D9D926]">
              <div className="pl-9 py-4 flex gap-7">
                <Image src={home} alt="home"></Image>
                <Link
                  href="/"
                  className="text-white font-semibold text-xl text-center"
                >
                  Home
                </Link>
              </div>
            </li>

            {/* My Earnings */}
            <li>
              <div className="pl-9 py-4 flex gap-7">
                <Image src={MyEarningLogo} alt="My Earning Logo"></Image>
                <Link
                  href="/"
                  className="text-white font-semibold text-xl text-center"
                >
                  My Earnings
                </Link>
              </div>
            </li>

            {/* My Services */}
            <li>
              <div className="pl-9 py-4 flex gap-7">
                <Image src={MyServices} alt="My Services"></Image>
                <Link
                  href="/"
                  className="text-white font-semibold text-xl text-center"
                >
                  My Services
                </Link>
              </div>
            </li>

            {/* My Assets */}
            <li>
              <div className="pl-9 py-4 flex gap-7">
                <Image src={MyAssests} alt="My Assests"></Image>
                <Link
                  href="/"
                  className="text-white font-semibold text-xl text-center"
                >
                  My Assets
                </Link>
              </div>
            </li>
          </ul>
          {/* Menu Content End  */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
