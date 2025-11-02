import React from 'react'
import { Video } from './../../../server/models/video.model';

function VideoLayout({open,imageSrc,videoTitle,VideoDescription,videoImageSrc}) {
  return (
    <div className={`video-layout   rounded-xl shadow-lg flex flex-col items-center m-2 ${open ? 'w-[330px]' : 'w-[370px]'}`}>
      <img className='w-full h-40 object-cover rounded-t-lg' src={videoImageSrc }  alt="video thumbnail"/>
        <div className="flex items-center py-1 mt-2 w-full gap-2 border-t-2 border-t-gray-900   rounded-b-lg ">
          
          <img className='w-12 h-12 rounded-full m-2 ' src={imageSrc} alt=""/>
          <div className="flex flex-col justify-center">

              <h3 className="text-lg font-semibold">{videoTitle}</h3>
              <p className="text-sm text-gray-600">{VideoDescription}</p>
          </div>

        </div>
    </div>
  )
}

export default VideoLayout