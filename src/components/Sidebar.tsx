import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaUserFriends, FaWarehouse } from 'react-icons/fa';
import { BiSolidPurchaseTag } from 'react-icons/bi';

import { TbMessageReportFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { RiStockFill } from 'react-icons/ri';

interface TextSidebarComponentProps {
  logo?: React.ReactNode;
  link: string;
  title?: string;
}

const TextSidebarComponent: React.FC<TextSidebarComponentProps> = ({ logo, link, title }) => {
  return (
    <NavLink to={link} className={({ isActive }) => `grid grid-cols-12 px-5 py-2 items-center ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`}>
      <div className="col-span-2 text-2xl">{logo}</div>
      <div className="col-span-10 text-xl">{title}</div>
    </NavLink>
  );
};
const Sidebar = () => {
  return (
    <div className="relative min-h-screen w-[250px] bg-blue-800 text-white   py-5">
      <TextSidebarComponent logo={<MdDashboard />} link="/" title="Dashboard" />
      <TextSidebarComponent logo={<BiSolidPurchaseTag />} link="/pembelian" title="Pembelian" />
      <TextSidebarComponent logo={<FaWarehouse />} link="/gudang" title="Gudang" />
      <TextSidebarComponent logo={<TbMessageReportFilled />} link="/laporan" title="Laporan" />
      <TextSidebarComponent logo={<FaUserFriends />} link="/anggota" title="Anggota" />
      <TextSidebarComponent logo={<RiStockFill />} link="/stok" title="Stok" />
    </div>
  );
};

export default Sidebar;
