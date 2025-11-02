// // Sidebar.jsx

import "../styles/Sidebar.css"
import {
  FaHome,
  FaUser,
  FaHistory,
  FaList,
  FaClock,
  FaThumbsUp,
} from 'react-icons/fa';
import { MdSubscriptions, MdOutlineMenuBook } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';


import { NavLink } from 'react-router-dom';


const Sidebar = ({ open }) => {
  const links = [
    { to: '/', icon: <FaHome className="sidebar-icons" />, label: 'Home' },
    { to: '/shorts', icon: <GiFilmSpool className="sidebar-icons" />, label: 'Shorts' },
    { to: '/subscriptions', icon: <MdSubscriptions className="sidebar-icons" />, label: 'Subscriptions' },
    { to: '/history', icon: <FaHistory className="sidebar-icons" />, label: 'History' },
    { to: '/playlists', icon: <FaList className="sidebar-icons" />, label: 'Playlists' },
    { to: '/courses', icon: <MdOutlineMenuBook className="sidebar-icons" />, label: 'Your courses' },
    { to: '/watch-later', icon: <FaClock className="sidebar-icons" />, label: 'Watch later' },
    { to: '/liked', icon: <FaThumbsUp className="sidebar-icons" />, label: 'Liked videos' },
  ];

  return (
    <div
      className={`${
        open ? 'w-56' : 'w-13'
      } hamburger-div text-white min-h-screen  transition-all duration-300`}
    >
      <ul className="space-y-4">
        {links.slice(0, 3).map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-4 ${isActive ? 'active-li' : ''}`
              }
            >
              {link.icon}
              {open && <span>{link.label}</span>}
            </NavLink>
          </li>
        ))}

        <hr className="border-gray-700 my-4" />

        {open && <p className="text-sm text-gray-400">You</p>}
        {links.slice(3).map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-4 ${isActive ? 'active-li' : ''}`
              }
            >
              {link.icon}
              {open && <span>{link.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
 export default Sidebar;