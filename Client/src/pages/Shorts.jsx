import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
function Shorts() {
  return (
    <div className=" text-white font-bold  h-full w-full flex gap-2  items-start pt-4 px-4">
      {/* left */}
      <div className="leftSide h-[85%] w-full   flex flex-col gap-1 justify-end py-12 px-8">
        <div className=" flex gap-4 items-center ">
          <img src="/" alt="" className="h-8 w-8 rounded-full border" />
          <span className="text-lg font-bold">username</span>
          <button className="bg-white text-gray-700 rounded-xl px-2 py-1 w-auto h-8">
            Subscribe
          </button>
        </div>
        <div className="text-xl font-semibold  overflow-hidden text-ellipsis ">
          video discription and music | Motivational Video  
        </div>
        <div className="text-lg font-semibold ">hashTags</div>
      </div>

      {/* middle */}
      <div className="h-[85%] min-w-[370px]  rounded-3xl">
        <video
          src=""
          className="w-full h-full rounded-3xl object-cover"
          controls
        ></video>
      </div>

      {/* right */}
      <div className="rightSide h-[85%] w-full  flex flex-col justify-start px-2 pt-10  items-start gap-2">
        <button className="h-12 w-12 rounded-full border flex items-center justify-center text-2xl text-white">
          <BiLike />
        </button>
        <span className="text-md ml-2">Like</span>
        <button className="h-12 w-12 rounded-full border flex items-center justify-center text-2xl text-white">
          <BiDislike />
        </button>
        <span className="text-md ml-2">Dislike</span>
        <button className="h-12 w-12 rounded-full border flex items-center justify-center text-2xl text-white">
          <LiaCommentSolid />
        </button>
        <span className="text-md ml-2">Comment</span>
        <button className="h-12 w-12 rounded-full border flex items-center justify-center text-2xl text-white">
          <FaShare />
        </button>
        <span className="text-md ml-2">Share</span>
      </div>
    </div>
  );
}

export default Shorts;