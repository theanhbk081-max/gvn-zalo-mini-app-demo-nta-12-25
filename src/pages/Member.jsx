import React, { useState } from 'react';
import {
  Gift, Ticket, Target, CalendarCheck, Crown, Gamepad2,
  ChevronRight, Lock, Star, Check, Zap, ArrowRight, RefreshCw
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import {
  userVouchers, rewardsCatalog, exclusiveItems, missions,
  dailyCheckIn, cyberPassPartners, TIERS
} from '../data/mockData';

function Member() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, getTierInfo, getNextTier, getTierProgress, points } = useUser();
  const tierInfo = getTierInfo();
  const nextTier = getNextTier();
  const tierProgress = getTierProgress();

  const tabs = [
    { id: 'overview', label: 'Tổng quan', icon: Crown },
    { id: 'vouchers', label: 'Voucher', icon: Ticket },
    { id: 'rewards', label: 'Đổi quà', icon: Gift },
    { id: 'missions', label: 'Nhiệm vụ', icon: Target },
  ];

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Member Card */}
      <div className="gear-card overflow-hidden">
        <div
          className="p-5"
          style={{
            background: `linear-gradient(135deg, ${tierInfo.color}40 0%, ${tierInfo.color}20 100%)`
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{tierInfo.icon}</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: tierInfo.color }}
                >
                  {tierInfo.name}
                </span>
              </div>
              <p className="text-white font-semibold text-xl">{user.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Điểm tích lũy</p>
              <p className="text-3xl font-bold gradient-text">{points.toLocaleString()}</p>
            </div>
          </div>

          {/* Progress to next tier */}
          {nextTier && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">
                  Tiến độ lên hạng {nextTier.name}
                </span>
                <span className="text-white font-medium">
                  {(user.totalSpent / 1000000).toFixed(0)}M / {(nextTier.minSpent / 1000000).toFixed(0)}M
                </span>
              </div>
              <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full progress-bar"
                  style={{ width: `${tierProgress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Còn {((nextTier.minSpent - user.totalSpent) / 1000000).toFixed(0)}M để lên hạng {nextTier.name}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gearvn-red text-white'
                : 'bg-gearvn-gray text-gray-400 hover:bg-gearvn-lightGray'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'vouchers' && <VouchersTab />}
      {activeTab === 'rewards' && <RewardsTab />}
      {activeTab === 'missions' && <MissionsTab />}
    </div>
  );
}

// Overview Tab
function OverviewTab() {
  const { checkIn, performCheckIn } = useUser();
  const [checkedIn, setCheckedIn] = useState(checkIn.todayCheckedIn);

  const handleCheckIn = () => {
    const result = performCheckIn();
    if (result.success) {
      setCheckedIn(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Daily Check-in */}
      <section className="gear-card p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-gearvn-red" />
            <h3 className="font-semibold text-white">Điểm danh nhận quà</h3>
          </div>
          <span className="text-sm text-gray-400">
            Streak: {checkIn.currentStreak} ngày
          </span>
        </div>

        {/* Check-in Calendar */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => {
            const isCompleted = day <= checkIn.currentStreak;
            const isToday = day === checkIn.currentStreak + 1;
            const reward = checkIn.rewards.find(r => r.day === day);

            return (
              <div
                key={day}
                className={`flex-shrink-0 w-14 py-3 rounded-xl text-center ${
                  isCompleted
                    ? 'bg-green-500/20 border border-green-500/30'
                    : isToday
                    ? 'bg-gearvn-red/20 border border-gearvn-red/30'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <p className="text-xs text-gray-400">Ngày {day}</p>
                {isCompleted ? (
                  <Check className="w-5 h-5 text-green-400 mx-auto mt-1" />
                ) : (
                  <p className="text-sm font-medium text-white mt-1">
                    {reward?.type === 'points' ? `+${reward.reward}` : '🎁'}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleCheckIn}
          disabled={checkedIn}
          className={`w-full mt-4 py-3 rounded-xl font-medium transition-all ${
            checkedIn
              ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
              : 'btn-primary'
          }`}
        >
          {checkedIn ? (
            <span className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              Đã điểm danh hôm nay
            </span>
          ) : (
            'Điểm danh ngay'
          )}
        </button>
      </section>

      {/* Exclusive Items */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            The Velvet Rope
          </h3>
          <span className="text-xs text-gray-400">Hàng độc quyền</span>
        </div>

        <div className="space-y-3">
          {exclusiveItems.map((item) => {
            const itemTier = TIERS[item.minTier];
            return (
              <div key={item.id} className="gear-card p-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white">{item.name}</p>
                      {item.earlyAccess && (
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                          Early Access
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: itemTier.color + '30', color: itemTier.color }}
                      >
                        {itemTier.icon} {itemTier.name}+
                      </span>
                      <span className="text-xs text-gray-500">Còn {item.stock}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gearvn-red">
                      {(item.price / 1000000).toFixed(1)}M
                    </p>
                    {item.points && (
                      <p className="text-xs text-gray-400">
                        hoặc {item.points.toLocaleString()} điểm
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cyber Pass */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-cyan-400" />
            Cyber Pass
          </h3>
          <span className="text-xs text-gray-400">Liên minh phòng máy</span>
        </div>

        <div className="space-y-3">
          {cyberPassPartners.slice(0, 2).map((partner) => (
            <div key={partner.id} className="gear-card p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gearvn-black overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">{partner.name}</p>
                <p className="text-xs text-gray-400">{partner.address}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-green-400">
                    Giảm {partner.discount}
                  </span>
                  <span className="text-xs text-cyan-400">
                    +{partner.freeHours}h miễn phí
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Vouchers Tab
function VouchersTab() {
  const [showP2P, setShowP2P] = useState(false);

  return (
    <div className="space-y-6">
      {/* P2P Trading */}
      <button
        onClick={() => setShowP2P(!showP2P)}
        className="w-full gear-card p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-gearvn-red" />
          <div className="text-left">
            <p className="font-medium text-white">Sàn giao dịch Voucher</p>
            <p className="text-xs text-gray-400">Mua bán, tặng voucher cho bạn bè</p>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${showP2P ? 'rotate-90' : ''}`} />
      </button>

      {/* User's Vouchers */}
      <section>
        <h3 className="font-semibold text-white mb-4">Voucher của bạn</h3>
        <div className="space-y-3">
          {userVouchers.map((voucher) => (
            <div key={voucher.id} className="voucher-card p-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                  voucher.type === 'discount' ? 'bg-gearvn-red/20' :
                  voucher.type === 'shipping' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                }`}>
                  {voucher.type === 'discount' && (
                    <span className="text-2xl font-bold text-gearvn-red">
                      {voucher.discount ? `${(voucher.discount / 1000)}K` : `${voucher.discountPercent}%`}
                    </span>
                  )}
                  {voucher.type === 'shipping' && <Zap className="w-8 h-8 text-blue-400" />}
                  {voucher.type === 'percent' && (
                    <span className="text-2xl font-bold text-purple-400">{voucher.discountPercent}%</span>
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white">{voucher.title}</p>
                  <p className="text-sm text-gray-400">{voucher.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">
                      HSD: {new Date(voucher.expiresAt).toLocaleDateString('vi-VN')}
                    </span>
                    {voucher.tradeable && (
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                        Có thể trao đổi
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="btn-secondary flex-1 py-2 text-sm">
                  Sao chép mã
                </button>
                <button className="btn-primary flex-1 py-2 text-sm">
                  Sử dụng
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Rewards Tab
function RewardsTab() {
  const { points, usePoints } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'gaming', 'software', 'voucher', 'merchandise'];

  const filteredRewards = selectedCategory === 'all'
    ? rewardsCatalog
    : rewardsCatalog.filter(r => r.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Points Balance */}
      <div className="gear-card p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Điểm hiện có</p>
          <p className="text-2xl font-bold gradient-text">{points.toLocaleString()}</p>
        </div>
        <Star className="w-10 h-10 text-yellow-500" />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-gearvn-red text-white'
                : 'bg-white/10 text-gray-400'
            }`}
          >
            {cat === 'all' && 'Tất cả'}
            {cat === 'gaming' && '🎮 Gaming'}
            {cat === 'software' && '💿 Software'}
            {cat === 'voucher' && '🎫 Voucher'}
            {cat === 'merchandise' && '👕 Merchandise'}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredRewards.map((reward) => {
          const canRedeem = points >= reward.points;

          return (
            <div
              key={reward.id}
              className={`gear-card p-4 ${!canRedeem ? 'opacity-60' : ''}`}
            >
              <div className="text-center mb-3">
                <span className="text-4xl">{reward.image}</span>
              </div>
              <p className="font-medium text-white text-sm text-center mb-1">
                {reward.name}
              </p>
              <p className="text-xs text-gray-500 text-center mb-3">
                Còn {reward.stock}
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-white">{reward.points.toLocaleString()}</span>
              </div>
              <button
                disabled={!canRedeem}
                className={`w-full py-2 rounded-lg text-sm font-medium ${
                  canRedeem
                    ? 'btn-primary'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {canRedeem ? 'Đổi ngay' : 'Chưa đủ điểm'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Missions Tab
function MissionsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-orange-400" />
          <p className="font-medium text-white">Bounty Hunter</p>
        </div>
        <p className="text-sm text-gray-400">
          Hoàn thành nhiệm vụ để nhận điểm thưởng và voucher đặc biệt
        </p>
      </div>

      <div className="space-y-3">
        {missions.map((mission) => (
          <div key={mission.id} className="gear-card p-4">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                mission.type === 'photo' ? 'bg-pink-500/20' :
                mission.type === 'review' ? 'bg-blue-500/20' :
                mission.type === 'community' ? 'bg-purple-500/20' : 'bg-green-500/20'
              }`}>
                {mission.type === 'photo' && '📸'}
                {mission.type === 'review' && '✍️'}
                {mission.type === 'community' && '👥'}
                {mission.type === 'referral' && '🎁'}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-white">{mission.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{mission.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-sm font-bold rounded-full">
                      +{mission.reward}
                    </span>
                  </div>
                </div>

                {/* Progress for in_progress missions */}
                {mission.status === 'in_progress' && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-400">Tiến độ</span>
                      <span className="text-white">{mission.progress}/{mission.target}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gearvn-red to-orange-500 rounded-full"
                        style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {mission.deadline && (
                  <p className="text-xs text-gray-500 mt-2">
                    HSD: {new Date(mission.deadline).toLocaleDateString('vi-VN')}
                  </p>
                )}

                {mission.status === 'available' && (
                  <button className="btn-primary w-full mt-3 py-2 text-sm">
                    Bắt đầu
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;
