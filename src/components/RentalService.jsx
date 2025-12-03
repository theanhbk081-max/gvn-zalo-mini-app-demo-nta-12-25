import React, { useState } from 'react';
import { Lock, Crown, ChevronRight, AlertCircle, Check, X } from 'lucide-react';
import { rentalItems, TIERS } from '../data/mockData';
import { useUser } from '../context/UserContext';

function RentalService() {
  const { user, getTierInfo } = useUser();
  const [selectedItem, setSelectedItem] = useState(null);
  const userTier = getTierInfo();

  const tierOrder = ['MEMBER', 'SILVER', 'GOLD', 'GPRO', 'ELITE'];
  const userTierIndex = tierOrder.indexOf(user.tier);

  const canRent = (item) => {
    const itemTierIndex = tierOrder.indexOf(item.minTier);
    return userTierIndex >= itemTierIndex;
  };

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-purple-500/20">
        <div className="flex items-start gap-3">
          <Crown className="w-5 h-5 text-purple-400 mt-0.5" />
          <div>
            <p className="font-medium text-white">Dịch vụ "Cho Thuê Sức Mạnh"</p>
            <p className="text-sm text-gray-400 mt-1">
              Thuê Card đồ họa, Laptop Workstation cao cấp theo ngày/tuần.
              Yêu cầu đặt cọc và hạng thành viên phù hợp.
            </p>
          </div>
        </div>
      </div>

      {/* Rental Items */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4">Thiết bị cho thuê</h2>
        <div className="space-y-3">
          {rentalItems.map((item) => {
            const isLocked = !canRent(item);
            const itemTier = TIERS[item.minTier];

            return (
              <div
                key={item.id}
                className={`gear-card p-4 ${isLocked ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                    item.type === 'VGA' ? 'bg-green-500/20' :
                    item.type === 'Laptop' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    {item.type === 'VGA' && '🎴'}
                    {item.type === 'Laptop' && '💻'}
                    {item.type === 'Bundle' && '📦'}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: itemTier.color + '30', color: itemTier.color }}
                          >
                            {itemTier.icon} {itemTier.name}+
                          </span>
                          {!item.available && (
                            <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">
                              Hết hàng
                            </span>
                          )}
                        </div>
                      </div>
                      {isLocked && (
                        <Lock className="w-5 h-5 text-gray-500" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Giá/ngày</p>
                        <p className="font-medium text-gearvn-red">
                          {(item.pricePerDay / 1000).toFixed(0)}K
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Giá/tuần</p>
                        <p className="font-medium text-white">
                          {(item.pricePerWeek / 1000000).toFixed(1)}M
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      Đặt cọc: {(item.deposit / 1000000).toFixed(0)}M VND
                    </p>
                  </div>
                </div>

                {!isLocked && item.available && (
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="btn-primary w-full mt-4 text-sm py-2"
                  >
                    Đặt thuê ngay
                  </button>
                )}

                {isLocked && (
                  <div className="flex items-center gap-2 mt-4 p-3 bg-white/5 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <p className="text-xs text-gray-400">
                      Nâng cấp lên hạng {itemTier.name} để sử dụng dịch vụ này
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="gear-card p-4">
        <h3 className="font-semibold text-white mb-3">Quyền lợi khi thuê</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-green-400" />
            Hỗ trợ lắp đặt & tháo gỡ miễn phí
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-green-400" />
            Bảo hành toàn bộ thời gian thuê
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-green-400" />
            Hỗ trợ kỹ thuật 24/7
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-green-400" />
            Hoàn cọc đầy đủ khi trả máy
          </li>
        </ul>
      </section>

      {/* Rental Modal */}
      {selectedItem && (
        <RentalModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

function RentalModal({ item, onClose }) {
  const [duration, setDuration] = useState('day');
  const [days, setDays] = useState(1);

  const totalPrice = duration === 'day'
    ? item.pricePerDay * days
    : item.pricePerWeek * Math.ceil(days / 7);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-gearvn-gray rounded-2xl overflow-hidden animate-slide-up">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Đặt thuê thiết bị</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-3xl">
              {item.type === 'VGA' && '🎴'}
              {item.type === 'Laptop' && '💻'}
              {item.type === 'Bundle' && '📦'}
            </div>
            <div>
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-gray-400">{item.type}</p>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">Hình thức thuê</label>
            <div className="flex gap-2">
              <button
                onClick={() => setDuration('day')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  duration === 'day'
                    ? 'bg-gearvn-red text-white'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                Theo ngày
              </button>
              <button
                onClick={() => setDuration('week')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  duration === 'week'
                    ? 'bg-gearvn-red text-white'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                Theo tuần
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Số {duration === 'day' ? 'ngày' : 'tuần'}
            </label>
            <input
              type="number"
              min="1"
              max={duration === 'day' ? 30 : 4}
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value) || 1)}
              className="input-field"
            />
          </div>

          <div className="p-4 bg-gradient-to-r from-gearvn-red/20 to-orange-500/20 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Tiền thuê</span>
              <span className="font-medium text-white">{totalPrice.toLocaleString()} VND</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Đặt cọc</span>
              <span className="font-medium text-white">{item.deposit.toLocaleString()} VND</span>
            </div>
            <div className="border-t border-white/10 pt-2 mt-2 flex justify-between items-center">
              <span className="font-medium text-white">Tổng thanh toán</span>
              <span className="font-bold text-xl text-gearvn-red">
                {(totalPrice + item.deposit).toLocaleString()} VND
              </span>
            </div>
          </div>

          <button className="btn-primary w-full">
            Xác nhận đặt thuê
          </button>
        </div>
      </div>
    </div>
  );
}

export default RentalService;
