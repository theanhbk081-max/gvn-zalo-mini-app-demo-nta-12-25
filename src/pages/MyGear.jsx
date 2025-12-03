import React, { useState } from 'react';
import {
  Monitor, Cpu, HardDrive, MemoryStick, Zap, AlertTriangle,
  TrendingUp, Shield, Phone, ChevronRight, Trophy, Gauge
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { userGear, upgradeSuggestions, benchmarkLeaderboard } from '../data/mockData';
import DigitalGarage from '../components/DigitalGarage';
import SOSButton from '../components/SOSButton';
import UpgradeCard from '../components/UpgradeCard';
import BenchmarkLeaderboard from '../components/BenchmarkLeaderboard';

function MyGear() {
  const { gear } = useUser();
  const [activeSection, setActiveSection] = useState('garage');

  const sections = [
    { id: 'garage', label: 'Dàn máy', icon: Monitor },
    { id: 'benchmark', label: 'Benchmark', icon: Gauge },
  ];

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Quick Actions - SOS & Warranty */}
      <div className="grid grid-cols-2 gap-3">
        <SOSButton />
        <button className="gear-card flex items-center gap-3 p-4 hover:border-gearvn-red/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-left">
            <p className="text-white font-medium text-sm">Bảo hành</p>
            <p className="text-xs text-gray-400">Tra cứu & Theo dõi</p>
          </div>
        </button>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeSection === section.id
                ? 'bg-gearvn-red text-white'
                : 'bg-gearvn-gray text-gray-400 hover:bg-gearvn-lightGray'
            }`}
          >
            <section.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      {activeSection === 'garage' && (
        <>
          {/* Digital Garage */}
          <DigitalGarage />

          {/* Health Alerts */}
          <HealthAlerts components={userGear.mainRig.components} />

          {/* Upgrade Suggestions */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gearvn-red" />
                Gợi ý nâng cấp
              </h2>
            </div>
            <div className="space-y-3">
              {upgradeSuggestions.map((upgrade) => (
                <UpgradeCard key={upgrade.id} upgrade={upgrade} />
              ))}
            </div>
          </section>
        </>
      )}

      {activeSection === 'benchmark' && (
        <BenchmarkLeaderboard />
      )}
    </div>
  );
}

// Health Alerts Component
function HealthAlerts({ components }) {
  const lowHealthItems = components.filter(c => c.health < 90);

  if (lowHealthItems.length === 0) return null;

  return (
    <section className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-4 border border-yellow-500/20">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-5 h-5 text-yellow-500" />
        <h3 className="font-semibold text-white">Cảnh báo vòng đời</h3>
      </div>
      <div className="space-y-2">
        {lowHealthItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-gray-400">Đã sử dụng {item.age} tháng</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.health >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.health}%` }}
                  />
                </div>
                <span className={`text-sm font-medium ${
                  item.health >= 80 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {item.health}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyGear;
