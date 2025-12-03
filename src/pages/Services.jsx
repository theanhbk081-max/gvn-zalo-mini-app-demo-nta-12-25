import React, { useState } from 'react';
import {
  Calendar, Clock, MapPin, ChevronRight, Star, Download,
  Package, FileText, HardDrive, Truck, User, Phone
} from 'lucide-react';
import { serviceTypes, warrantyTracking, driverDownloads, profilePresets, rentalItems, showrooms } from '../data/mockData';
import { useUser } from '../context/UserContext';
import WarrantyTracker from '../components/WarrantyTracker';
import BookingModal from '../components/BookingModal';
import DriverHub from '../components/DriverHub';
import RentalService from '../components/RentalService';

function Services() {
  const [activeTab, setActiveTab] = useState('booking');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const tabs = [
    { id: 'booking', label: 'Đặt lịch', icon: Calendar },
    { id: 'warranty', label: 'Bảo hành', icon: Package },
    { id: 'drivers', label: 'Driver Hub', icon: Download },
    { id: 'rental', label: 'Cho thuê', icon: Truck },
  ];

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  return (
    <div className="px-4 py-4 space-y-6">
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
      {activeTab === 'booking' && (
        <div className="space-y-6">
          {/* Service Types */}
          <section>
            <h2 className="text-lg font-bold text-white mb-4">Dịch vụ</h2>
            <div className="grid grid-cols-2 gap-3">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleBookService(service)}
                  className="gear-card p-4 text-left hover:border-gearvn-red/30 transition-all group"
                >
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <h3 className="font-semibold text-white text-sm mb-1">{service.name}</h3>
                  <p className="text-xs text-gray-400">{service.duration}</p>
                  <p className="text-sm font-medium text-gearvn-red mt-2">
                    {typeof service.price === 'number'
                      ? `${(service.price / 1000).toFixed(0)}K`
                      : service.price}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Bookings */}
          <section>
            <h2 className="text-lg font-bold text-white mb-4">Lịch hẹn gần đây</h2>
            <div className="gear-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                  🧹
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Vệ sinh PC</h3>
                      <p className="text-sm text-gray-400">GEARVN Hoàng Hoa Thám</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Hoàn thành
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      15/11/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      14:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Showroom Locations */}
          <section>
            <h2 className="text-lg font-bold text-white mb-4">Showroom</h2>
            <div className="space-y-2">
              {showrooms.slice(0, 3).map((showroom) => (
                <div key={showroom.id} className="gear-card p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gearvn-red/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gearvn-red" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">{showroom.name}</p>
                    <p className="text-xs text-gray-400">{showroom.district}, {showroom.city}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'warranty' && <WarrantyTracker />}

      {activeTab === 'drivers' && <DriverHub />}

      {activeTab === 'rental' && <RentalService />}

      {/* Booking Modal */}
      {showBooking && selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => {
            setShowBooking(false);
            setSelectedService(null);
          }}
        />
      )}
    </div>
  );
}

export default Services;
