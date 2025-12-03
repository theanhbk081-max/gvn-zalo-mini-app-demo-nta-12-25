import React, { useState } from 'react';
import { Bell, Search, QrCode } from 'lucide-react';
import { useUser } from '../context/UserContext';
import NotificationPanel from './NotificationPanel';
import QRModal from './QRModal';

function Header() {
  const { user, unreadCount, getTierInfo } = useUser();
  const [showNotifs, setShowNotifs] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const tierInfo = getTierInfo();

  return (
    <>
      <header className="bg-gearvn-black/95 backdrop-blur-lg border-b border-white/5 sticky top-0 z-50 safe-area-top">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & User */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gearvn-red to-red-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm">{user.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: tierInfo.color, color: tierInfo.name === 'ELITE' ? '#ffd700' : '#fff' }}
                  >
                    {tierInfo.icon} {tierInfo.name}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{user.points.toLocaleString()} điểm</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowQR(true)}
                className="w-10 h-10 rounded-full bg-gearvn-gray flex items-center justify-center
                         hover:bg-gearvn-lightGray transition-colors"
              >
                <QrCode className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => setShowNotifs(true)}
                className="w-10 h-10 rounded-full bg-gearvn-gray flex items-center justify-center
                         hover:bg-gearvn-lightGray transition-colors relative"
              >
                <Bell className="w-5 h-5 text-white" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gearvn-red rounded-full
                                 text-xs font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Panel */}
      {showNotifs && <NotificationPanel onClose={() => setShowNotifs(false)} />}

      {/* QR Modal */}
      {showQR && <QRModal onClose={() => setShowQR(false)} />}
    </>
  );
}

export default Header;
