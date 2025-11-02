import React from 'react'

function Shorts() {
  return (
    <div className=" text-white font-bold bg-red-400 h-full w-full flex gap-2  items-start pt-4 px-4">
      <div className="leftSide h-[85%] w-full bg-green-700  flex flex-col gap-1 justify-end py-12 px-8">
        <div className=" flex gap-4 items-center ">
          <img src="/" alt="" className="h-8 w-8 rounded-full border" />
          <span className="text-md font-bold">username</span>
          <button className="bg-white text-gray-700 rounded-xl px-2 py-1 w-auto h-8">
            Subscribe
          </button>
        </div>
        <div className ="text-xl font-bold ">video discription and music</div>
        <div className ="text-lg font-semibold ">hashTags</div>
      </div>
      <div className="h-[85%] min-w-[370px] bg-yellow-600 rounded-3xl">
        <video
          src=""
          className="w-full h-full rounded-3xl object-cover"
          controls
        ></video>
      </div>


      {/* right */}
      <div className="rightSide h-[85%] w-full bg-blue-700 flex flex-col justify-start px-2 pt-10  items-start gap-4">
        <button className = "h-12 w-12 rounded-full border flex items-center justify-center text-xl text-gray-800">l</button>
        <button className = "h-12 w-12 rounded-full border flex items-center justify-center text-xl text-gray-800">d</button>
        <button className = "h-12 w-12 rounded-full border flex items-center justify-center text-xl text-gray-800">c</button>
        <button className = "h-12 w-12 rounded-full border flex items-center justify-center text-xl text-gray-800">s</button>
      </div>
    </div>
  );
}

export default Shorts;