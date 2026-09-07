import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'client', label: 'Client Portal', to: '/client' },
  { key: 'bank', label: 'Bank Portal', to: '/bank' },
];

export const SiteNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || 'home';

  return (
    <aside className="w-full md:w-64 bg-[#EADDFF] rounded-2xl p-6 shrink-0 order-first md:order-none">
      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6750A4] mb-4">
        Navigation
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const active = currentPath === item.key;
          return (
            <Link
              key={item.key}
              to={item.to}
              className={
                'block px-4 py-3 rounded-xl text-base transition-colors ' +
                (active
                  ? 'bg-[#6750A4]/15 text-[#6750A4] font-bold'
                  : 'text-[#21005D] font-medium hover:bg-[#6750A4]/10')
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
