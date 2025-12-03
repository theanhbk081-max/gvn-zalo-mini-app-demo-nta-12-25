import React, { useState } from 'react';
import { Monitor, ChevronDown, ChevronUp, Calendar, Shield, Clock } from 'lucide-react';
import { userGear } from '../data/mockData';

function DigitalGarage() {
  const [expandedRig, setExpandedRig] = useState(true);
  const [expandedPeripherals, setExpandedPeripherals] = useState(false);
  const { mainRig, peripherals } = userGear;

  return (
    <section className="space-y-4">
      {/* Main Rig Card */}
      <div className="gear-card overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setExpandedRig(!expandedRig)}
          className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gearvn-red/30 to-orange-500/30 flex items-center justify-center">
              <Monitor className="w-7 h-7 text-gearvn-red" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg">{mainRig.name}</h3>
              <p className="text-sm text-gray-400">
                {mainRig.components.length} linh kiện • {(mainRig.totalValue / 1000000).toFixed(0)}M VND
              </p>
            </div>
          </div>
          {expandedRig ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {/* Components List */}
        {expandedRig && (
          <div className="border-t border-white/5">
            {mainRig.components.map((component, index) => (
              <ComponentItem key={component.id} component={component} isLast={index === mainRig.components.length - 1} />
            ))}
          </div>
        )}
      </div>

      {/* Peripherals Card */}
      <div className="gear-card overflow-hidden">
        <button
          onClick={() => setExpandedPeripherals(!expandedPeripherals)}
          className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-2xl">
              ⌨️
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg">Phụ kiện</h3>
              <p className="text-sm text-gray-400">{peripherals.length} thiết bị</p>
            </div>
          </div>
          {expandedPeripherals ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {expandedPeripherals && (
          <div className="border-t border-white/5">
            {peripherals.map((item, index) => (
              <PeripheralItem key={item.id} item={item} isLast={index === peripherals.length - 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ComponentItem({ component, isLast }) {
  const warrantyDate = new Date(component.warranty);
  const isExpiring = warrantyDate < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${!isLast ? 'border-b border-white/5' : ''}`}>
      <span className="text-2xl w-10 text-center">{component.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-white text-sm truncate">{component.name}</p>
          {component.warrantyStatus === 'expiring' && (
            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">Sắp hết BH</span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(component.purchaseDate).toLocaleDateString('vi-VN')}
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            BH đến {new Date(component.warranty).toLocaleDateString('vi-VN')}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gearvn-red">{(component.price / 1000000).toFixed(1)}M</p>
      </div>
    </div>
  );
}

function PeripheralItem({ item, isLast }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${!isLast ? 'border-b border-white/5' : ''}`}>
      <span className="text-2xl w-10 text-center">{item.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-white text-sm truncate">{item.name}</p>
          {item.warrantyStatus === 'expiring' && (
            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">Sắp hết BH</span>
          )}
        </div>
        <p className="text-xs text-gray-500">{item.brand}</p>
      </div>
      <p className="text-sm font-medium text-gray-400">{(item.price / 1000000).toFixed(1)}M</p>
    </div>
  );
}

export default DigitalGarage;
