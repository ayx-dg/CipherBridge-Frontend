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
        <Link to="/">
          <img src="/logo_nobg.png" alt="Logo" className="app-logo" style={{ margin: 0 }} />
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
