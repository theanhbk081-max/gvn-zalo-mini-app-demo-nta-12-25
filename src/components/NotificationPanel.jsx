import React from 'react';
import { X, Bell, Package, Tag, Star, AlertTriangle } from 'lucide-react';
import { useUser } from '../context/UserContext';

const iconMap = {
  warranty: Package,
  promo: Tag,
  points: Star,
  alert: AlertTriangle,
};

function NotificationPanel({ onClose }) {
  const { notifications, markNotificationRead } = useUser();

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-gearvn-gray rounded-t-3xl max-h-[80vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-gearvn-red" />
            Thông báo
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-[60vh] p-4 space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Không có thông báo mới</p>
            </div>
          ) : (
            notifications.map((notif) => {
              const Icon = iconMap[notif.type] || Bell;
              return (
                <div
                  key={notif.id}
                  onClick={() => markNotificationRead(notif.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    notif.read
                      ? 'bg-white/5 border-white/5'
                      : 'bg-gearvn-red/10 border-gearvn-red/30'
                  }`}
                >
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notif.read ? 'bg-white/10' : 'bg-gearvn-red/20'
                    }`}>
                      <Icon className={`w-5 h-5 ${notif.read ? 'text-gray-400' : 'text-gearvn-red'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{notif.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{notif.message}</p>
                      <span className="text-xs text-gray-500 mt-2 block">{notif.time}</span>
                    </div>
                    {!notif.read && (
                      <div className="w-2 h-2 rounded-full bg-gearvn-red mt-2" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationPanel;
