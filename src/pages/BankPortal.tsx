import React from 'react';
import { Typography, Card, Tabs, Button } from 'antd';
import { BankRegistration } from '../components/bank/BankRegistration';
import { TaskList } from '../components/bank/TaskList';
import { DataEncryption } from '../components/bank/DataEncryption';
import { ArrowLeftOutlined, DatabaseOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export const BankPortal: React.FC = () => {
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
        <Title level={2} className="mb-4">CipherBridge Bank Portal</Title>
        <p className="text-gray-600 text-lg">Manage privacy computing tasks and encrypted data processing</p>
      </div>

      <div className="flex-1 min-w-0 w-full space-y-6">
          {/* 身份认证区域 */}
          <Card className="mb-8 shadow-md">
            <BankRegistration />
          </Card>

          {/* 主功能区域 */}
          <Card className="shadow-md">
            <Tabs
              defaultActiveKey="tasks"
              items={[
                {
                  key: 'tasks',
                  label: (
                    <span className="flex items-center gap-2">
                      <DatabaseOutlined />
                      Business Tasks
                    </span>
                  ),
                  children: (
                    <div className="h-[400px] md:h-[600px] overflow-auto">
                      <TaskList />
                    </div>
                  ),
                },
                {
                  key: 'encryption',
                  label: (
                    <span className="flex items-center gap-2">
                      <LockOutlined />
                      Data Encryption
                    </span>
                  ),
                  children: (
                    <div className="flex flex-col h-[400px] md:h-[600px]">
                      <div className="mb-4">
                        <DataEncryption />
                      </div>
                      <div className="flex-1 overflow-auto">
                        {/* Encryption History will be rendered here */}
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </Card>
        </div>
    </div>
  );
};