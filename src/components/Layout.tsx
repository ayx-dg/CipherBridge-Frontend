import React from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { Layout as AntLayout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, BankOutlined } from '@ant-design/icons';
import { ClientWalletModal } from './wallet/ClientWalletModal';
import { BankWalletModal } from './wallet/BankWalletModal';

const { Header, Content, Sider } = AntLayout;

export const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[1] || 'home';

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout>
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

      <Sider
        width={240}
        className="ant-layout-sider"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'auto' }}
      >
        <Menu
          mode="inline"
          selectedKeys={[currentPath]}
          onClick={({ key }) => navigate(`/${key === 'home' ? '' : key}`)}
          style={{ fontSize: '15px', fontWeight: 500, borderRight: 'none' }}
        >
          <Menu.Item key="home" icon={<HomeOutlined style={{ fontSize: '20px' }} />}>
            Home
          </Menu.Item>
          <Menu.Item key="client" icon={<UserOutlined style={{ fontSize: '20px' }} />}>
            Client Portal
          </Menu.Item>
          <Menu.Item key="bank" icon={<BankOutlined style={{ fontSize: '20px' }} />}>
            Bank Portal
          </Menu.Item>
        </Menu>
      </Sider>
    </AntLayout>
  );
};
