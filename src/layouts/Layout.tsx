import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mx-5 mt-[50px]">
          <div className="text-3xl mb-3">{title}</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
