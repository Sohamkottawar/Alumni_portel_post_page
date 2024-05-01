"use client";

import { color } from "@/constants";
import { IoMail } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProfileData, UserPost } from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import api from "@/api/api";
import Image from "next/image";
import profile from "@/public/assets/profile.png";
import EventsBar from "@/components/profile/EventsBar";
import UserPosts from "@/components/profile/UserPosts";

const Profile = () => {
  const router = useRouter();

  // fetch profile data
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    email: "",
    profileImgage: "",
    followers: 0,
    aboutMe: "",
    gitHubProfile: "",
    linkedinProfile: "",
    userResume: "",
    userName: "",
    portfolio: "",
    experience: "",
    suggestion: "",
    companies: [],
    domains: [],
    skills: [],
  });

  const [userPosts, setUserPosts] = useState<UserPost[] | null>([]);
  
  const getProfileData = async () => {
    try {
      const response = await api.get("/profile/2");
      const data = await response.data;
      const newProfileData = {
        ...profileData,
        firstName: data.profile.first_name,
        lastName: data.profile.last_name,
        email: data.profile.email,
        proileImage: data.profile.profile_image,
        followers: data.profile.followers,
        aboutMe: data.profile.about_me,
        experience: data.profile.experience,
        gitHubProfile: data.profile.git_profile,
        linkedinProfile: data.profile.linkedin,
        userName: data.profile.username,
        suggestion: data.profile.suggestion,
        companies: data.companies,
        domains: data.domains,
        skills: data.skills,
      };
      setProfileData(newProfileData);
    } catch (err: any) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  // user posts
  const getUserPosts = async () => {
    try {
      const response = await api.get("/posts/2");
      const data = await response.data;
      setUserPosts(data);
    } catch (err: any) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  const convertCreatedAt = (data: string) => {
    const date = new Date(data);
    const localDate = date.toLocaleDateString();
    return localDate;
  };

  return (
    <main>
      <div className="bg-[#FAFAFA] flex flex-col sm:flex-row m-6 gap-6">
        <div className="flex gap-10">
          <div className="bg-[#fff] border rounded-lg">
            <div
              className={`h-[5rem] sm:h-[10rem] w-full rounded-tl-lg 
            rounded-tr-lg bg-[${color.primaryBlue}]`}
            >
              <div className="flex flex-col justify-center items-center p-8 sm:pt-24 space-y-4">
                <Image
                  src={
                    profileData.profileImgage
                      ? profileData.profileImgage
                      : profile
                  }
                  height={75}
                  width={75}
                  className="ring-4 sm:h-32 sm:w-32 ring-[#EFEEEE] rounded-full"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="p-4 space-y-10">
              <div className="">
                <div className="flex items-center justify-between sm:flex-col sm:mt-14 z-20 sm:space-y-4">
                  <div className="flex flex-col justify-center items-center space-y-1 ">
                    <h1 className="text-lg font-semibold text-[#333333]">
                      {profileData.firstName} {profileData.lastName}
                    </h1>
                    <p className="text-[#7E7E7E] text-sm sm:text-lg font-medium">
                      {profileData &&
                        profileData.companies.map((company, index) => (
                          <div key={index} className="">
                            {company.job_role} @{company.company_name}
                          </div>
                        ))}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div className="flex gap-5 text-[#333333]">
                      <button
                        onClick={() =>
                          router.push(`${profileData.linkedinProfile}`)
                        }
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() =>
                          router.push(`${profileData.gitHubProfile}`)
                        }
                      >
                        <FaGithub className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => router.push(`${profileData.email}`)}
                      >
                        <IoMail className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="text-sm sm:text-lg text-[#333333]">
                      {profileData.followers} Followers
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#FAFAFA] border rounded-lg w-full p-10 space-y-6">
                  <div className="flex justify-center items-center text-2xl font-semibold text-[#333333] border-b-2 pb-5">
                    About Me
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="p-4 border rounded-lg text-[#333333] flex flex-col justify-start items-start space-y-4">
                      <span className="text-[#989898]">About me</span>
                      {profileData.aboutMe}
                      <span className="text-[#989898]">Suggestions</span>
                      {profileData.suggestion}
                    </div>
                    <div className="space-y-5">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-start items-center font-semibold text-xl text-[#333333]">
                          Bio
                        </div>
                        <ul
                          style={{ listStyleType: "disc", paddingLeft: "1em" }}
                          className="flex flex-col text-[#555555] font-medium"
                        >
                          {profileData &&
                            profileData.companies.map((company, index) => (
                              <li key={index}>
                                <div className="">
                                  {company.job_role} @{company.company_name}
                                </div>
                                <div className="">
                                  {convertCreatedAt(company.begin_date)} -{" "}
                                  {convertCreatedAt(company.last_date)}
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-start items-center font-semibold text-xl text-[#333333]">
                          Interests
                        </div>
                        {profileData.domains &&
                          profileData.domains.map((domain, index) => (
                            <ul
                              key={index}
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "1em",
                              }}
                              className="flex flex-col text-[#555555] font-medium"
                            >
                              <li>{domain.domain_name}</li>
                            </ul>
                          ))}
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-start items-center font-semibold text-xl text-[#333333]">
                          Exp
                        </div>
                        <ul
                          style={{ listStyleType: "disc", paddingLeft: "1em" }}
                          className="flex flex-col text-[#555555] font-medium"
                        >
                          <li>{profileData.experience}</li>
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-start items-center font-semibold text-xl text-[#333333]">
                          Skills
                        </div>
                        {profileData.skills &&
                          profileData.skills.map((skill, index) => (
                            <ul
                              key={index}
                              style={{
                                listStyleType: "disc",
                                paddingLeft: "1em",
                              }}
                              className="flex flex-col text-[#555555] font-medium"
                            >
                              <li>{skill.skill_name}</li>
                            </ul>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Users Posts  */}
                <div className="space-y-4">
                  {userPosts &&
                    userPosts.map((post, index) => (
                      <div
                        key={index}
                        className=" rounded-lg border w-full p-10 space-y-6"
                      >
                        <UserPosts post={post} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <EventsBar />
      </div>
    </main>
  );
};

export default Profile;
