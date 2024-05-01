"use client";

import { UserPost } from "@/types";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  IoEyeOutline,
  IoChatboxOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import Image from "next/image";
import profile from "@/public/assets/PFP.png";

type Props = {
  post: UserPost;
};

const UserPosts = ({ post }: Props) => {
  const router = useRouter();

  console.log(post);

  const convertCreatedAt = (data: string) => {
    const date = new Date(data);
    const localDate = date.toLocaleString();
    return localDate;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-2">
        <div className="flex gap-3">
          <Image
            src={post.profile_image || profile}
            height={50}
            width={50}
            className="rounded-full"
            alt="Profile"
          />
          <div className="flex flex-col">
            <p className="font-bold text-xl text-[#134467]">
              {post.first_name} {post.last_name}
            </p>
            <div className="text-[#A6A0A0] text-xs">
              {convertCreatedAt(post.created_at)}
            </div>
          </div>
        </div>
        <IoBookmarkOutline className="h-8 w-8 text-[#134467]" />
      </div>
      <h1 className="font-semibold text-xl text-[#555555] max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
        {post.title}
      </h1>
      <p>{post.content}</p>
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center ">
            <IoEyeOutline className="h-5 w-5 text-[#134467]" />
            <p>125</p>
          </div>
          <div className="flex justify-center items-center ">
            <IoChatboxOutline className="h-5 w-5 text-[#134467]" />
            <p>15</p>
          </div>
          <div className="flex justify-center items-center ">
            <FaHeart className="h-5 w-5 text-[#134467]" />
            <p>{post.likes}</p>
          </div>
        </div>
        <div
          onClick={() => router.push(`${post.link}`)}
          className="text-[#134467] font-semibold hover:cursor-pointer"
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
