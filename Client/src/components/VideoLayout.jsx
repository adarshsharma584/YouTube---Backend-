


function VideoLayout({open,avatar,title,description,thumbnail}) {
  return (
    <div className={`video-layout   rounded-xl  flex flex-col items-center m-2 hover:bg-gray-800 hover:cursor-pointer ${open ? 'min-w-[325px] max-w-[325px]' : 'min-w-[375px] max-w-[375px]'}`}>
      <img className='w-full h-[220px] object-cover rounded-lg' src={thumbnail }  alt="video thumbnail"/>
        <div className="flex items-center  mt-2  w-full gap-2   bg-transparent">
          
          <img className='w-12 h-12 rounded-full m-2 ' src={avatar} alt=""/>
          <div className="flex flex-col justify-center">

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
          </div>

        </div>
    </div>
  )
}

export default VideoLayout