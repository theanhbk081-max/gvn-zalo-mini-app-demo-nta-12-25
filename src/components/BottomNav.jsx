import React from 'react';
import { NavLink } from 'react-router-dom';
import { Monitor, Wrench, Users, Gift } from 'lucide-react';

const navItems = [
  { path: '/my-gear', label: 'My Gear', icon: Monitor },
  { path: '/services', label: 'Services', icon: Wrench },
  { path: '/community', label: 'Community', icon: Users },
  { path: '/member', label: 'Rewards', icon: Gift },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gearvn-black/95 backdrop-blur-lg border-t border-white/10 safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? 'active' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`nav-icon w-6 h-6 mb-1 transition-all duration-300 ${
                    isActive ? 'text-gearvn-red' : 'text-gray-500'
                  }`}
                />
                <span className={`text-xs font-medium ${isActive ? 'text-gearvn-red' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
