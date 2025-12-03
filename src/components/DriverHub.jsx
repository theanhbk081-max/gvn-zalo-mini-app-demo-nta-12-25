import React from 'react';
import { Download, CheckCircle, Cpu, HardDrive, Volume2, Settings, Star, Users, ChevronRight } from 'lucide-react';
import { driverDownloads, profilePresets } from '../data/mockData';

function DriverHub() {
  const iconMap = {
    VGA: '🎴',
    Chipset: '🔲',
    Audio: '🔊',
    Utility: '⚙️',
  };

  return (
    <div className="space-y-6">
      {/* Driver Downloads */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Driver chuẩn GEARVN</h2>
          <span className="text-xs text-gray-400">Đã test & verify</span>
        </div>

        <div className="space-y-3">
          {driverDownloads.map((driver) => (
            <div key={driver.id} className="gear-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                  {iconMap[driver.type] || '📁'}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-white">{driver.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{driver.size}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-400">{driver.date}</span>
                        {driver.verified && (
                          <>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-1 text-xs text-green-400">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gearvn-red/20 flex items-center justify-center hover:bg-gearvn-red/30 transition-colors">
                  <Download className="w-5 h-5 text-gearvn-red" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Presets */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Profile Setting</h2>
          <button className="text-sm text-gearvn-red font-medium">Xem tất cả</button>
        </div>

        <div className="space-y-3">
          {profilePresets.map((profile) => (
            <div key={profile.id} className="gear-card p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{profile.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {profile.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {profile.rating}
                    </span>
                    <span>{profile.author}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload Your Profile */}
      <section className="gear-card p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gearvn-red/30 to-orange-500/30 flex items-center justify-center">
            <Settings className="w-6 h-6 text-gearvn-red" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">Chia sẻ Profile của bạn</p>
            <p className="text-sm text-gray-400">Nhận điểm thưởng khi profile được tải</p>
          </div>
          <button className="btn-primary py-2 px-4 text-sm">
            Upload
          </button>
        </div>
      </section>
    </div>
  );
}

export default DriverHub;
