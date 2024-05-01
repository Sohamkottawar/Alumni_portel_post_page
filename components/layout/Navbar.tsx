"use client";

import { useState } from "react";
import { color } from "@/constants";
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import api from "@/api/api";
import Image from "next/image";
import logo from "@/public/assets/Logo.png";
import profile from "@/public/assets/profile.png";

const Navbar = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(true); // State to manage the visibility of the search input

  const handleSearchSubmit = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await api.get(
        `/profile/search/${encodeURIComponent(searchTerm)}`
      );
      console.log("Search Results:", response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const toggleSearch = () => {
    if (window.innerWidth < 640) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex flex-row justify-between items-center bg-white h-20 border-b">
        <div className="flex-grow-2 w-28 pl-2 flex items-center justify-center xl:w-64">
          <Image
            src={logo}
            alt="logo"
            className="w-28 hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="flex items-center space-x-2 w-1/2 px-3 sm:px-20">
          <FaSearch
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={handleSearchSubmit}
          />
          {isOpen && (
            <input
              type="text"
              placeholder="Search"
              className={`text-black w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-[${color.lightBlue}]`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress} //See what the issue is here. Call the other new component to display all the users
            />
          )}
        </div>

        <div className="flex-grow-3 lg:mr-20 flex items-center justify-around w-1/4 xl:w-1/6">
          <button
            className={`bg-[${color.lightBlue}] text-white border h-10 pl-3 pr-3 pt-2 pb-2 rounded-md md:flex flex-row items-center hidden`}
            onClick={() => router.push("/post")}
          >
            <CiCirclePlus className="pr-2 text-3xl" />
            Add Post
          </button>
          <div className="text-xl">
            <FaBell className="text-gray-500 hover:cursor-pointer h-4 w-4" />
          </div>
          <div onClick={() => router.push("/profile")}>
            <Image
              src={profile}
              alt="profile pic"
              className="rounded-full w-12 h-12 hover:cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
