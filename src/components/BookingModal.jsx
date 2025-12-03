import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, ChevronRight, Check, Loader2 } from 'lucide-react';
import { showrooms } from '../data/mockData';

function BookingModal({ service, onClose }) {
  const [step, setStep] = useState(1); // 1: showroom, 2: datetime, 3: confirm, 4: success
  const [selectedShowroom, setSelectedShowroom] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const dates = [];
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-gearvn-gray rounded-t-3xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-bold text-white">Đặt lịch dịch vụ</h2>
            <p className="text-sm text-gray-400">{service.name}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex items-center justify-center gap-2 py-4 border-b border-white/10">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s ? 'bg-gearvn-red text-white' : 'bg-white/10 text-gray-500'
                }`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-12 h-0.5 ${step > s ? 'bg-gearvn-red' : 'bg-white/10'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="p-5 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Select Showroom */}
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="font-medium text-white mb-4">Chọn showroom</h3>
              {showrooms.map((showroom) => (
                <button
                  key={showroom.id}
                  onClick={() => setSelectedShowroom(showroom)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    selectedShowroom?.id === showroom.id
                      ? 'bg-gearvn-red/20 border-gearvn-red'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gearvn-red/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gearvn-red" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{showroom.name}</p>
                      <p className="text-sm text-gray-400">{showroom.district}, {showroom.city}</p>
                    </div>
                  </div>
                </button>
              ))}

              <button
                onClick={() => selectedShowroom && setStep(2)}
                disabled={!selectedShowroom}
                className={`btn-primary w-full mt-4 ${!selectedShowroom ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Tiếp tục
              </button>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-white mb-4">Chọn ngày</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {dates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-all ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-gearvn-red text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <p className="text-xs">{date.toLocaleDateString('vi-VN', { weekday: 'short' })}</p>
                      <p className="text-lg font-bold">{date.getDate()}</p>
                      <p className="text-xs">{date.toLocaleDateString('vi-VN', { month: 'short' })}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-white mb-4">Chọn giờ</h3>
                <div className="grid grid-cols-4 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl text-center transition-all ${
                        selectedTime === time
                          ? 'bg-gearvn-red text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                  Quay lại
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className={`btn-primary flex-1 ${(!selectedDate || !selectedTime) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-medium text-white mb-4">Xác nhận thông tin</h3>

              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <p className="font-medium text-white">{service.name}</p>
                    <p className="text-sm text-gearvn-red">
                      {typeof service.price === 'number'
                        ? `${service.price.toLocaleString()} VND`
                        : service.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gearvn-red" />
                  <div>
                    <p className="text-sm text-gray-400">Showroom</p>
                    <p className="font-medium text-white">{selectedShowroom?.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gearvn-red" />
                  <div>
                    <p className="text-sm text-gray-400">Ngày</p>
                    <p className="font-medium text-white">
                      {selectedDate?.toLocaleDateString('vi-VN', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gearvn-red" />
                  <div>
                    <p className="text-sm text-gray-400">Giờ</p>
                    <p className="font-medium text-white">{selectedTime}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="btn-secondary flex-1">
                  Quay lại
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Đang xử lý...
                    </>
                  ) : (
                    'Xác nhận đặt lịch'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Đặt lịch thành công!</h3>
              <p className="text-gray-400 mb-6">
                Chúng tôi sẽ gửi SMS xác nhận đến số điện thoại của bạn.
              </p>

              <div className="bg-white/5 rounded-xl p-4 text-left mb-6">
                <p className="text-xs text-gray-400 mb-2">Mã đặt lịch</p>
                <p className="font-mono font-bold text-gearvn-red text-lg">BK-2024-005678</p>
              </div>

              <button onClick={onClose} className="btn-primary w-full">
                Hoàn tất
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
