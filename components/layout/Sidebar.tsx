"use client";

import { FaPen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const pathName = path.slice(1, path.length);

  const SidebarData = [
    {
      title: "Home",
      value: "",
      link: "/",
      icon: <IoIosHome />,
    },
    {
      title: "Post",
      value: "post",
      link: "/post",
      icon: <IoIosMail />,
    },
    {
      title: "Work",
      value: "work",
      link: "/work",
      icon: <FaDesktop />,
    },
    {
      title: "Internship",
      value: "internship",
      link: "/internship",
      icon: <FaPen />,
    },
  ];

  return (
    <div className="flex flex-col h-96 mt-16">
      <ul className="grid w-full place-items-center">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            onClick={() => {
              router.push(val.link);
            }}
            className={`${
              pathName === val.value || pathName === "/"
                ? "bg-[#2377F4]/[0.1]"
                : ""
            } w-full text-left`}
          >
            <div
              className={`text-gray-500 flex h-12 items-center hover:cursor-pointer`}
            >
              <span
                className={`w-2/6 flex justify-end ${
                  pathName === val.value ? "text-[#327AB0]" : ""
                }`}
              >
                {val.icon}
              </span>
              <span
                className={`w-4/6 flex justify-start pl-3 ${
                  pathName === val.value ? "text-[#327AB0]" : ""
                }`}
              >
                {val.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
