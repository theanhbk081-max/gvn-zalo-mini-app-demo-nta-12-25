import React from 'react';
import { X, QrCode, Copy, Check } from 'lucide-react';
import { useUser } from '../context/UserContext';

function QRModal({ onClose }) {
  const { user, getTierInfo } = useUser();
  const tierInfo = getTierInfo();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.qrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-gradient-to-b from-gearvn-gray to-gearvn-black rounded-3xl overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Header Decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gearvn-red/20 to-transparent" />

        <div className="relative px-6 pt-8 pb-6">
          {/* Member Card */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                 style={{ backgroundColor: tierInfo.color }}>
              <span className="text-lg">{tierInfo.icon}</span>
              <span className="font-bold text-white">{tierInfo.name} Member</span>
            </div>
            <h3 className="text-xl font-bold text-white">{user.name}</h3>
            <p className="text-gray-400 text-sm">Member since {new Date(user.memberSince).toLocaleDateString('vi-VN')}</p>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-2xl p-6 mb-4">
            <div className="aspect-square flex items-center justify-center">
              {/* Simulated QR Code Pattern */}
              <div className="w-full h-full relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* QR Pattern Simulation */}
                  <rect x="10" y="10" width="20" height="20" fill="#1a1a1a" />
                  <rect x="70" y="10" width="20" height="20" fill="#1a1a1a" />
                  <rect x="10" y="70" width="20" height="20" fill="#1a1a1a" />
                  <rect x="12" y="12" width="16" height="16" fill="white" />
                  <rect x="72" y="12" width="16" height="16" fill="white" />
                  <rect x="12" y="72" width="16" height="16" fill="white" />
                  <rect x="15" y="15" width="10" height="10" fill="#1a1a1a" />
                  <rect x="75" y="15" width="10" height="10" fill="#1a1a1a" />
                  <rect x="15" y="75" width="10" height="10" fill="#1a1a1a" />

                  {/* Random pattern */}
                  {[...Array(50)].map((_, i) => (
                    <rect
                      key={i}
                      x={35 + (i % 7) * 5}
                      y={10 + Math.floor(i / 7) * 5}
                      width="4"
                      height="4"
                      fill={Math.random() > 0.5 ? '#1a1a1a' : 'white'}
                    />
                  ))}
                  {[...Array(35)].map((_, i) => (
                    <rect
                      key={i + 50}
                      x={10 + (i % 10) * 5}
                      y={35 + Math.floor(i / 10) * 5}
                      width="4"
                      height="4"
                      fill={Math.random() > 0.5 ? '#1a1a1a' : 'white'}
                    />
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <rect
                      key={i + 85}
                      x={35 + (i % 5) * 5}
                      y={70 + Math.floor(i / 5) * 5}
                      width="4"
                      height="4"
                      fill={Math.random() > 0.5 ? '#1a1a1a' : 'white'}
                    />
                  ))}

                  {/* Center logo */}
                  <circle cx="50" cy="50" r="10" fill="#E31837" />
                  <text x="50" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">G</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Member Code */}
          <div className="flex items-center justify-between bg-gearvn-gray rounded-xl px-4 py-3 mb-4">
            <div>
              <p className="text-xs text-gray-400">Mã thành viên</p>
              <p className="font-mono font-medium text-white">{user.qrCode}</p>
            </div>
            <button
              onClick={handleCopy}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Points Display */}
          <div className="text-center py-3 bg-gradient-to-r from-gearvn-red/20 to-orange-500/20 rounded-xl">
            <p className="text-sm text-gray-300">Điểm tích lũy</p>
            <p className="text-2xl font-bold gradient-text">{user.points.toLocaleString()}</p>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Quét mã để tích điểm tại showroom
          </p>
        </div>
      </div>
    </div>
  );
}

export default QRModal;
