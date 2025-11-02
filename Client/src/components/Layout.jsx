import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar open={sidebarOpen} />
        <main className="flex-1">
          {/* Provide open state to routed pages via Outlet context */}
          <Outlet context={{ open: sidebarOpen }} />
        </main>
      </div>
    </>
  );
}

export default Layout;
