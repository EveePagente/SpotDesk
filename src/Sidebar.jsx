// Sidebar.jsx
import React from 'react';
import { HomeIcon, UserIcon, SettingsIcon } from '@heroicons/react/outline'; // Example icons from Heroicons
import { cn } from 'shadcn/utils'; // Example utility from ShadCN

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
        <span className="text-xl font-semibold">MyApp</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <SidebarItem icon={<HomeIcon className="h-6 w-6" />} text="Home" />
        <SidebarItem icon={<UserIcon className="h-6 w-6" />} text="Profile" />
        <SidebarItem icon={<SettingsIcon className="h-6 w-6" />} text="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <div className={cn(
      "flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200",
      "rounded-md cursor-pointer"
    )}>
      {icon}
      <span className="ml-4">{text}</span>
    </div>
  );
};

export default Sidebar;
