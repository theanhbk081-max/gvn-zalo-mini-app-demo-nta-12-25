import React from 'react';
import { Package, CheckCircle, Clock, User, Phone, Star, MessageCircle } from 'lucide-react';
import { warrantyTracking } from '../data/mockData';

function WarrantyTracker() {
  const { timeline, technician, product, status, id, estimatedComplete } = warrantyTracking;

  return (
    <div className="space-y-6">
      {/* Current Warranty Status */}
      <section className="gear-card overflow-hidden">
        <div className="bg-gradient-to-r from-gearvn-red/20 to-orange-500/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Mã bảo hành</span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">
              Đang xử lý
            </span>
          </div>
          <p className="font-mono font-bold text-white text-lg">{id}</p>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
              🎴
            </div>
            <div>
              <p className="font-semibold text-white">{product}</p>
              <p className="text-sm text-gray-400">
                Dự kiến hoàn thành: {new Date(estimatedComplete).toLocaleDateString('vi-VN')}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((step, index) => (
              <div key={step.step} className="flex gap-3">
                {/* Status Icon */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === 'completed'
                      ? 'bg-green-500'
                      : step.status === 'in_progress'
                      ? 'bg-yellow-500 animate-pulse'
                      : 'bg-gray-600'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : step.status === 'in_progress' ? (
                      <Clock className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-xs text-gray-400">{step.step}</span>
                    )}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className={`w-0.5 h-12 ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium ${
                      step.status === 'pending' ? 'text-gray-500' : 'text-white'
                    }`}>
                      {step.title}
                    </p>
                    {step.time && (
                      <span className="text-xs text-gray-500">
                        {new Date(step.time).toLocaleDateString('vi-VN')}
                      </span>
                    )}
                  </div>
                  {step.note && (
                    <p className="text-sm text-gray-400 mt-1">{step.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technician Info */}
      <section className="gear-card p-4">
        <h3 className="text-sm text-gray-400 mb-3">Kỹ thuật viên phụ trách</h3>
        <div className="flex items-center gap-4">
          <img
            src={technician.avatar}
            alt={technician.name}
            className="w-14 h-14 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-white">{technician.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-white">{technician.rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-sm text-gray-400">Kỹ thuật viên cao cấp</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Gọi điện
          </button>
          <button className="btn-primary flex-1 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Nhắn tin
          </button>
        </div>
      </section>

      {/* Rate Technician */}
      <section className="gear-card p-4">
        <h3 className="font-semibold text-white mb-3">Đánh giá kỹ thuật viên</h3>
        <p className="text-sm text-gray-400 mb-4">
          Sau khi hoàn thành dịch vụ, bạn có thể đánh giá và "Tip" điểm thưởng cho kỹ thuật viên.
        </p>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500/20 transition-colors"
            >
              <Star className="w-5 h-5 text-gray-500 hover:text-yellow-500" />
            </button>
          ))}
        </div>
      </section>

      {/* History */}
      <section>
        <h3 className="text-lg font-bold text-white mb-4">Lịch sử bảo hành</h3>
        <div className="space-y-3">
          <div className="gear-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-400">WR2024000892</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                Hoàn thành
              </span>
            </div>
            <p className="font-medium text-white">Keychron Q1 Pro</p>
            <p className="text-sm text-gray-400 mt-1">Thay switch • 10/10/2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WarrantyTracker;
