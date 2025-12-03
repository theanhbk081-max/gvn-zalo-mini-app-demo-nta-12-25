import React, { useState } from 'react';
import { ArrowRight, TrendingUp, RefreshCw, ChevronRight, X, Check } from 'lucide-react';

function UpgradeCard({ upgrade }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full gear-card p-4 hover:border-green-500/30 transition-all group text-left"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">{upgrade.currentItem}</p>
                <div className="flex items-center gap-2 mt-1">
                  <ArrowRight className="w-4 h-4 text-gearvn-red" />
                  <p className="font-semibold text-white">{upgrade.suggestedItem}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                {upgrade.performanceGain}
              </span>
            </div>

            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Bù thêm chỉ</p>
                <p className="text-lg font-bold text-gearvn-red">
                  {(upgrade.priceDifference / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="flex items-center gap-1 text-gray-400 group-hover:text-white transition-colors">
                <span className="text-sm">Xem chi tiết</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </button>

      {showModal && (
        <UpgradeModal upgrade={upgrade} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

function UpgradeModal({ upgrade, onClose }) {
  const [step, setStep] = useState('info'); // info, confirm, success

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-gearvn-gray rounded-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">One-Click Upgrade</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {step === 'info' && (
          <div className="p-5">
            {/* Current vs New */}
            <div className="space-y-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-2">Đang sử dụng</p>
                <p className="font-medium text-white">{upgrade.currentItem}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Giá thu cũ ước tính: <span className="text-green-400 font-medium">{(upgrade.tradeInValue / 1000000).toFixed(1)}M</span>
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-gearvn-red/20 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-gearvn-red" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                <p className="text-xs text-gray-400 mb-2">Nâng cấp lên</p>
                <p className="font-bold text-white text-lg">{upgrade.suggestedItem}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Giá mới: <span className="text-white font-medium">{(upgrade.suggestedPrice / 1000000).toFixed(1)}M</span>
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-white mb-3">Lợi ích</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  {upgrade.reason}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  Bảo hành chính hãng 36 tháng
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  Hỗ trợ lắp đặt miễn phí
                </li>
              </ul>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-gearvn-red/20 to-orange-500/20 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-300">Chỉ cần bù thêm</p>
                  <p className="text-3xl font-bold text-white">
                    {(upgrade.priceDifference / 1000000).toFixed(1)}<span className="text-lg">M VND</span>
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  {upgrade.performanceGain}
                </span>
              </div>
            </div>

            <button
              onClick={() => setStep('confirm')}
              className="btn-primary w-full"
            >
              Đăng ký nâng cấp
            </button>
          </div>
        )}

        {step === 'confirm' && (
          <div className="p-5 text-center">
            <div className="w-20 h-20 rounded-full bg-gearvn-red/20 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-10 h-10 text-gearvn-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Xác nhận đăng ký?</h3>
            <p className="text-gray-400 mb-6">
              Nhân viên GEARVN sẽ liên hệ bạn để tư vấn chi tiết và định giá thu cũ chính xác.
            </p>

            <div className="flex gap-3">
              <button onClick={() => setStep('info')} className="btn-secondary flex-1">
                Quay lại
              </button>
              <button onClick={() => setStep('success')} className="btn-primary flex-1">
                Xác nhận
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="p-5 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Đăng ký thành công!</h3>
            <p className="text-gray-400 mb-6">
              Chúng tôi sẽ liên hệ bạn trong vòng 24h để tư vấn chi tiết.
            </p>
            <button onClick={onClose} className="btn-primary w-full">
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpgradeCard;
