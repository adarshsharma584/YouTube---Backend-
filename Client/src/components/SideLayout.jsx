import React from "react";
import VideoLayout from "./VideoLayout.jsx";

function SideLayout({ open }) {
  // Mock video data array
  const videos = [
    { id: 1, title: "Build a YouTube Clone", description: "Learn to build a fullstack YouTube clone.", thumbnail: "/assets/thumb1.jpg", avatar: "/assets/avatar1.jpg" },
    { id: 2, title: "React Tutorial", description: "React basics and hooks.", thumbnail: "/assets/thumb2.jpg", avatar: "/assets/avatar2.jpg" },
    { id: 3, title: "Node.js Crash Course", description: "Backend development with Node.js", thumbnail: "/assets/thumb3.jpg", avatar: "/assets/avatar3.jpg" },
    { id: 4, title: "Tailwind CSS Tips", description: "Design faster with Tailwind.", thumbnail: "/assets/thumb4.jpg", avatar: "/assets/avatar4.jpg" },
    { id: 5, title: "Deployment Guide", description: "Deploy apps to production.", thumbnail: "/assets/thumb5.jpg", avatar: "/assets/avatar5.jpg" },
    { id: 6, title: "Testing with Jest", description: "Write unit tests for your JS code.", thumbnail: "/assets/thumb6.jpg", avatar: "/assets/avatar6.jpg" },
    { id: 7, title: "Performance Optimization", description: "Make your app faster.", thumbnail: "/assets/thumb7.jpg", avatar: "/assets/avatar7.jpg" }
  ];

  return (
    <div className={`flex p-4 flex-wrap gap-4 justify-center ${open ? "w-11/12" : "w-full"}`}>
      {videos.map((video) => (
        <VideoLayout
          key={video.id}
          open={open}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
          avatar={video.avatar}
        />
      ))}
    </div>
  );
}

export default SideLayout;
