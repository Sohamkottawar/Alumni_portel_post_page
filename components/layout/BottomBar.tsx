"use client";

import React from "react";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaDesktop } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

const BottomBar = () => {
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
    <div>
      <div className="bg-white border flex flex-row h-14 items-center justify-around md:hidden fixed bottom-0 left-0 right-0 z-10">
        {SidebarData.slice(0, 2).map((val, key) => (
          <div
            key={key}
            onClick={() => router.push(`${val.link}`)}
            className={`${
              pathName === val.value ? "text-[#327AB0]" : "text-gray-800"
            }`}
          >
            {val.icon}
          </div>
        ))}
        <div
          className="rounded-full bg-[#45A0CF] w-10 h-10 flex justify-center items-center"
          onClick={() => router.push("/post")}
        >
          <span className="text-white">
            <FaPlus />
          </span>
        </div>
        {SidebarData.slice(2).map((val, key) => (
          <div
            key={key}
            onClick={() => router.push(`${val.link}`)}
            className={`${
              pathName === val.value ? "text-[#327AB0]" : "text-gray-800"
            }`}
          >
            {val.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
