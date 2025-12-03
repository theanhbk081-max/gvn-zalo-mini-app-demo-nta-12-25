import React, { useState } from 'react';
import { Phone, MapPin, Cpu, X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { userGear } from '../data/mockData';

function SOSButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="sos-button gear-card flex items-center gap-3 p-4 border-red-500/30 hover:border-red-500/50 transition-all group"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/30 to-red-600/30 flex items-center justify-center relative">
          <Phone className="w-6 h-6 text-red-400 group-hover:animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
        <div className="text-left">
          <p className="text-white font-medium text-sm">SOS Cứu hộ</p>
          <p className="text-xs text-gray-400">Hỗ trợ khẩn cấp</p>
        </div>
      </button>

      {showModal && <SOSModal onClose={() => setShowModal(false)} />}
    </>
  );
}

function SOSModal({ onClose }) {
  const { user, gear } = useUser();
  const [step, setStep] = useState('select'); // select, describe, sending, sent
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [description, setDescription] = useState('');

  const issues = [
    { id: 'no-boot', label: 'Không khởi động được', icon: '🔌', priority: 'high' },
    { id: 'bsod', label: 'Màn hình xanh (BSOD)', icon: '💀', priority: 'high' },
    { id: 'overheat', label: 'Quá nhiệt / Tắt đột ngột', icon: '🔥', priority: 'high' },
    { id: 'noise', label: 'Tiếng ồn lạ', icon: '🔊', priority: 'medium' },
    { id: 'display', label: 'Lỗi hiển thị', icon: '🖥️', priority: 'medium' },
    { id: 'other', label: 'Vấn đề khác', icon: '❓', priority: 'low' },
  ];

  const handleSend = () => {
    setStep('sending');
    setTimeout(() => {
      setStep('sent');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-gearvn-gray rounded-t-3xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r from-red-500/20 to-orange-500/20">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-400" />
            SOS Cứu Hộ PC
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto max-h-[70vh]">
          {step === 'select' && (
            <>
              <p className="text-gray-400 text-sm mb-4">
                Chọn vấn đề bạn đang gặp phải:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {issues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedIssue?.id === issue.id
                        ? 'bg-gearvn-red/20 border-gearvn-red'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{issue.icon}</span>
                    <p className="text-sm font-medium text-white">{issue.label}</p>
                    {issue.priority === 'high' && (
                      <span className="text-xs text-red-400 mt-1 block">Ưu tiên cao</span>
                    )}
                  </button>
                ))}
              </div>

              {selectedIssue && (
                <button
                  onClick={() => setStep('describe')}
                  className="btn-primary w-full"
                >
                  Tiếp tục
                </button>
              )}
            </>
          )}

          {step === 'describe' && (
            <>
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-1">Vấn đề đã chọn</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{selectedIssue.icon}</span>
                  <span className="font-medium text-white">{selectedIssue.label}</span>
                </div>
              </div>

              {/* Device Info */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-400 mb-2">Thông tin máy</p>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Cpu className="w-4 h-4 text-gearvn-red" />
                  <span>{userGear.mainRig.name}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  CPU: {userGear.mainRig.components.find(c => c.type === 'CPU')?.name}
                </p>
              </div>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mô tả chi tiết vấn đề (tùy chọn)..."
                className="input-field min-h-[100px] resize-none mb-4"
              />

              <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-xl mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-white">Vị trí hiện tại</p>
                  <p className="text-xs text-gray-400">Quận 1, TP.HCM (GPS đã bật)</p>
                </div>
              </div>

              <button onClick={handleSend} className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Gửi yêu cầu SOS
              </button>
            </>
          )}

          {step === 'sending' && (
            <div className="text-center py-10">
              <Loader2 className="w-16 h-16 text-gearvn-red mx-auto mb-4 animate-spin" />
              <p className="text-lg font-medium text-white">Đang gửi yêu cầu...</p>
              <p className="text-sm text-gray-400 mt-2">Vui lòng chờ trong giây lát</p>
            </div>
          )}

          {step === 'sent' && (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <p className="text-xl font-bold text-white mb-2">Đã gửi thành công!</p>
              <p className="text-gray-400 mb-6">
                Kỹ thuật viên sẽ liên hệ bạn trong vòng 5-10 phút
              </p>

              <div className="bg-white/5 rounded-xl p-4 text-left mb-4">
                <p className="text-xs text-gray-400 mb-2">Mã yêu cầu</p>
                <p className="font-mono font-bold text-gearvn-red text-lg">SOS-2024-001234</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Support1"
                  alt="Support"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium text-white">Đội ngũ hỗ trợ GEARVN</p>
                  <p className="text-sm text-green-400">Đang sẵn sàng</p>
                </div>
              </div>

              <button onClick={onClose} className="btn-secondary w-full mt-6">
                Đóng
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SOSButton;
