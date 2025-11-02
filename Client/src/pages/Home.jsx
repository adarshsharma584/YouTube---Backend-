import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import SideLayout from "../components/SideLayout.jsx";
function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="home-page  w-full  px-4 ">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar open={sidebarOpen} />
        <SideLayout open={sidebarOpen} />
      </div>
    </div>
  );
}

export default Home;
