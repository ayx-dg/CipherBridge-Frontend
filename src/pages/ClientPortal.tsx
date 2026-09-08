import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Registration } from '../components/client/Registration';
import { TaskResults } from '../components/client/TaskResults';

const { Title } = Typography;

export const ClientPortal: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/">
          <Button type="text" icon={<ArrowLeftOutlined />} className="px-0 text-[#6750A4] hover:text-[#21005D]">
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="text-center mb-12">
        <Title level={2} className="mb-4">CipherBridge Client Portal</Title>
        <p className="text-gray-600 text-lg">Manage your encrypted financial data and privacy computing tasks</p>
      </div>

      <div className="flex-1 min-w-0 w-full space-y-8">
        <Registration />
        <TaskResults />
      </div>
    </div>
  );
};