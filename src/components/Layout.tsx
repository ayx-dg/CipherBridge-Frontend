import React, { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { ClientWalletModal } from './wallet/ClientWalletModal';
import { BankWalletModal } from './wallet/BankWalletModal';

const { Header, Content } = AntLayout;

const navItems = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'client', label: 'Client Portal', to: '/client' },
  { key: 'bank', label: 'Bank Portal', to: '/bank' },
];

const desktopLinkClass = (isActive: boolean) =>
  'px-4 py-2 text-base font-medium whitespace-nowrap transition-colors border-b-2 ' +
  (isActive
    ? 'border-[#6750A4] text-[#6750A4] font-semibold'
    : 'border-transparent text-[#49454F] hover:text-[#6750A4] hover:bg-[#6750A4]/5');

const mobileLinkClass = (isActive: boolean) =>
  'block px-6 py-3 text-base font-medium transition-colors border-l-2 ' +
  (isActive
    ? 'border-[#6750A4] bg-[#6750A4]/10 text-[#6750A4] font-semibold'
    : 'border-transparent text-[#49454F] hover:bg-[#6750A4]/5');

export const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header className="ant-layout-header">
        <Link to="/" className="flex items-center gap-0 shrink-0">
          <span className="text-xl font-bold tracking-tight text-[#1C1B1F] whitespace-nowrap">
            Cipher
          </span>
          <span className="text-xl font-bold tracking-tight text-[#6750A4] whitespace-nowrap">
            Bridge
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 ml-8">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => desktopLinkClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ClientWalletModal />
          <BankWalletModal />
          <button
            className="md:hidden block p-2 rounded-lg text-[#1C1B1F] hover:bg-[#6750A4]/10 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
          </button>
        </div>
      </Header>

      {/* Mobile navigation panel */}
      <div className={(menuOpen ? '' : 'hidden ') + 'md:hidden bg-white border-b border-[#CAC4D0] shadow-sm'}>
        <nav className="flex flex-col py-1">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => mobileLinkClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <Content>
        <Outlet />
      </Content>
    </AntLayout>
  );
};
