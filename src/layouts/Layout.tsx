import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: React.ReactNode;

}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mx-1  w-full">
          {/* <div className="text-3xl mb-3">{title}</div> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
