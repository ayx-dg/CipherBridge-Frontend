import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import { ClientWalletModal } from './wallet/ClientWalletModal';
import { BankWalletModal } from './wallet/BankWalletModal';

const { Header, Content } = AntLayout;

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header className="ant-layout-header">
        <Link to="/" className="flex items-center gap-0">
          <span className="text-xl font-bold tracking-tight text-[#1C1B1F] whitespace-nowrap">
            Cipher
          </span>
          <span className="text-xl font-bold tracking-tight text-[#6750A4] whitespace-nowrap">
            Bridge
          </span>
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
          <ClientWalletModal />
          <BankWalletModal />
        </div>
      </Header>

      <Content>
        <Outlet />
      </Content>
    </AntLayout>
  );
};
