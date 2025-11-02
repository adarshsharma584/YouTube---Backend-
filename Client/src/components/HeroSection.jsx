import React from "react";
import VideoLayout from "./VideoLayout.jsx";

function HeroSection({ open }) {
  // Mock video data array
  const videos = [
    {
      id: 1,
      title: "Build a YouTube Clone",
      description: "Learn to build a fullstack YouTube clone.",
      thumbnail:
        "https://imgs.search.brave.com/WU08UQZ98gkvZLB-E8urH2X3wt7CKwL-6Ko7JeUO-mk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHYVgy/bzlzVk0vMS8wLzE2/MDB3L2NhbnZhLXJl/ZC1hbmQteWVsbG93/LW1vZGVybi1zaG9j/a2luZy1tb21lbnRz/LXlvdXR1YmUtdGh1/bWJuYWlsLTNZQUp1/WGp1N05BLmpwZw",
      avatar: "/assets/avatar1.jpg",
    },
    {
      id: 2,
      title: "React Tutorial",
      description: "React basics and hooks.",
      thumbnail:
        "https://imgs.search.brave.com/Z98pm6SqNul1wddmHzbzee4dd7hZBKkrcSYNjiEAZYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/ODFkZmYwNjg3MjY4/YWI2NmRkOWMyNmUv/Njg1NTViOTk2ZjA1/M2QwYTYzZGY1NTE2/X0NsaWNrYmFpdCUy/MHRoYXQlMjB3b3Jr/cy5wbmc",
      avatar: "",
    },
    {
      id: 3,
      title: "Node.js Crash Course",
      description: "Backend development with Node.js",
      thumbnail:
        "https://imgs.search.brave.com/blmHPB5WN-BAjIINN75q4gaxwE-8siuPEdO6WIQNhRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y3JlYXRpdmUteW91/dHViZS10aHVtYm5h/aWwtZGVzaWduXzEw/MTM4NTQtMzgzOC5q/cGc_c2VtdD1haXNf/aW5jb21pbmcmdz03/NDAmcT04MA",
      avatar: "/assets/avatar3.jpg",
    },
    {
      id: 4,
      title: "Tailwind CSS Tips",
      description: "Design faster with Tailwind.",
      thumbnail:
        "https://imgs.search.brave.com/l-kjAfH-DM8ap13MwNaDsBA0cZ_LFqqHb91mr0qNR8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjY3MWI4MDBjMzY3/ZTFmZDQ2YzU0YmMv/NjZkNzk1OWVhMDdj/NGY4ZTgwNDE4YWMx/XzY2OTViNjkzM2Ri/NWI2YTQ1NDk0MzQ2/OF9jYW52YS1yZWQt/Y29sb3JmdWwtdGlw/cy15b3V0dWJlLXRo/dW1ibmFpbC1IWXFL/eU1oNDB6WS5hdmlm",
      avatar: "/assets/avatar4.jpg",
    },
    {
      id: 5,
      title: "Deployment Guide",
      description: "Deploy apps to production.",
      thumbnail:
        "https://imgs.search.brave.com/woGlqZC8kSZ3n6r4VexpfQ6SQY74z6Byw7dGr9ZtTik/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucmZzdGF0LmNv/bS9yZW5kZXJmb3Jl/c3QvaW1hZ2VzL3Yy/L2xhbmRpbmctcGlj/cy9ncmFwaGljLXlv/dXR1YmUvZWR1Y2F0/aW9uLmpwZw",
      avatar: "/assets/avatar5.jpg",
    },
    {
      id: 6,
      title: "Testing with Jest",
      description: "Write unit tests for your JS code.",
      thumbnail:
        "https://imgs.search.brave.com/MKfzsp7JYlRyUqkSoO94AGk5_7t2WKCcjgvRr1YW0Og/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMi9UU0MtdGh1/bWJuYWlsLWV4YW1w/bGUtMTAyNHg1NzYu/cG5n",
      avatar: "/assets/avatar6.jpg",
    },
    {
      id: 7,
      title: "Performance Optimization",
      description: "Make your app faster.",
      thumbnail:
        "https://imgs.search.brave.com/itC3919iHBLlFlHL1JnYaAOp5iRoGl4WVRP0chNShY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/bWFzdGVyLXlvdXIt/eW91dHViZS10aHVt/Ym5haWxzLWV5ZWNh/dGNoaW5nLWRlc2ln/bnMtcHNkLXRlbXBs/YXRlXzk5NDEzNS01/Mi5qcGc_c2VtdD1h/aXNfaW5jb21pbmcm/dz03NDAmcT04MA",
      avatar: "/assets/avatar7.jpg",
    },
    {
      id: 8,
      title: "Performance Optimization",
      description: "Make your app faster.",
      thumbnail:
        "https://imgs.search.brave.com/blmHPB5WN-BAjIINN75q4gaxwE-8siuPEdO6WIQNhRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/Y3JlYXRpdmUteW91/dHViZS10aHVtYm5h/aWwtZGVzaWduXzEw/MTM4NTQtMzgzOC5q/cGc_c2VtdD1haXNf/aW5jb21pbmcmdz03/NDAmcT04MA",
      avatar: "/assets/avatar7.jpg",
    },
    {
      id: 9,
      title: "Performance Optimization",
      description: "Make your app faster.",
      thumbnail:
        "https://imgs.search.brave.com/-84W8rbNVimsmP5QwkJXeawkQGRj10amw0LuOQZQkjc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bW9kZXJuLXlvdXR1/YmUtdGh1bWJuYWls/LWRlc2lnbi13aXRo/LWF3ZXNvbWUtdGV4/dC10ZW1wbGF0ZV8x/MzYxLTI3MzcuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
      avatar: "/assets/avatar7.jpg",
    },
  ];

  return (
    <div
      className={`flex flex-wrap p-2 gap-4  ${
        open ? "w-12/12" : "w-full"
      }`}
    >
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

export default HeroSection;
