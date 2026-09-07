import React from 'react';
import { Typography } from 'antd';
import { Registration } from '../components/client/Registration';
import { TaskResults } from '../components/client/TaskResults';
import { SiteNav } from '../components/SiteNav';

const { Title } = Typography;

export const ClientPortal: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Title level={2} className="mb-4">CipherBridge Client Portal</Title>
        <p className="text-gray-600 text-lg">Manage your encrypted financial data and privacy computing tasks</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0 w-full space-y-8">
          <Registration />
          <TaskResults />
        </div>
        <SiteNav />
      </div>
    </div>
  );
};