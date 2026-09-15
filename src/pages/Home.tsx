import React from 'react';
import { Card, Button } from 'antd';
import { UserOutlined, BankOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col bg-[#F7F6FC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* decorative gradients */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#7A5AF8]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-[#45D6EE]/15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1A1740]">
              看清风险，
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A5AF8] to-[#4B2FB8]">
                不看隐私。
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#514D6B] max-w-xl mx-auto md:mx-0">
              用隐私计算技术，为中小企业构建更公平、更安全的融资环境。
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/client">
                <Button type="primary" size="large" shape="round" icon={<ArrowRightOutlined />} iconPosition="end" className="h-12 px-8 text-base w-full sm:w-auto">
                  开始体验
                </Button>
              </Link>
              <Link to="/bank">
                <Button size="large" shape="round" className="h-12 px-8 text-base w-full sm:w-auto border-[#5B3CC4] text-[#5B3CC4]">
                  银行端入口
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: glass prism panel */}
          <div className="relative">
            <div className="relative rounded-3xl border border-white/70 bg-white/40 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(91,60,196,0.55)] px-8 py-12 sm:px-12 sm:py-16">
              <img
                src="/logo.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 -bottom-6 h-40 w-auto opacity-[0.07]"
              />
              <div className="relative text-right">
                <p className="text-2xl sm:text-3xl font-semibold leading-relaxed text-[#1A1740]">
                  数据有界
                  <br />
                  信任无界
                  <br />
                  让更多可能发生
                </p>
                <div className="mt-8 ml-auto h-px w-16 bg-[#5B3CC4]/40" />
                <p className="mt-4 text-[11px] sm:text-xs tracking-[0.28em] text-[#5B3CC4] font-semibold">
                  MORE POSSIBILITIES
                  <br />
                  FOR SMES
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Entrances */}
      <section className="max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <Card hoverable className="transform transition-all duration-300 hover:scale-[1.02]">
            <div className="p-6 sm:p-8 text-center">
              <div className="bg-[#EDE8FC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserOutlined className="text-4xl text-[#5B3CC4]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1740] mb-4">客户端</h2>
              <p className="text-[#514D6B] mb-8 text-base">
                管理您的加密金融数据，发起隐私计算任务并查看结果
              </p>
              <Link to="/client">
                <Button type="primary" size="large" shape="round" className="h-12 px-6 sm:px-8 text-base">
                  进入客户端
                </Button>
              </Link>
            </div>
          </Card>

          <Card hoverable className="transform transition-all duration-300 hover:scale-[1.02]">
            <div className="p-6 sm:p-8 text-center">
              <div className="bg-[#EDE8FC] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BankOutlined className="text-4xl text-[#5B3CC4]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1740] mb-4">银行端</h2>
              <p className="text-[#514D6B] mb-8 text-base">
                管理隐私计算任务，处理加密数据并完成业务审批
              </p>
              <Link to="/bank">
                <Button type="primary" size="large" shape="round" className="h-12 px-6 sm:px-8 text-base">
                  进入银行端
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#E4E0F5] bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="融鉴 FinLens" className="h-6 w-auto" />
            <span className="text-sm font-semibold text-[#1A1740]">融鉴 FinLens</span>
          </div>
          <p className="text-xs tracking-[0.18em] text-[#9C97B8] text-center">
            PRIVACY-PRESERVING RISK CONTROL FOR SMES
          </p>
        </div>
      </footer>
    </div>
  );
};
