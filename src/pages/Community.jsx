import React, { useState } from 'react';
import {
  Image, ShoppingBag, Calendar, Briefcase, Heart, MessageCircle,
  Share2, ChevronRight, MapPin, Clock, Users, CheckCircle, Tag
} from 'lucide-react';
import { battleStations, secondHandItems, events, techJobs, TIERS } from '../data/mockData';

function Community() {
  const [activeTab, setActiveTab] = useState('showcase');

  const tabs = [
    { id: 'showcase', label: 'Góc máy', icon: Image },
    { id: 'market', label: 'Chợ Ve Chai', icon: ShoppingBag },
    { id: 'events', label: 'Sự kiện', icon: Calendar },
    { id: 'jobs', label: 'Tuyển dụng', icon: Briefcase },
  ];

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
      {activeTab === 'showcase' && <BattleStationShowcase />}
      {activeTab === 'market' && <SecondHandMarket />}
      {activeTab === 'events' && <EventsList />}
      {activeTab === 'jobs' && <JobsList />}
    </div>
  );
}

// Battle Station Showcase
function BattleStationShowcase() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Đấu Trường Góc Máy</h2>
          <p className="text-sm text-gray-400">Chia sẻ setup, nhận Respect</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          + Đăng ảnh
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {battleStations.map((post) => {
          const tierInfo = TIERS[post.user.tier];
          return (
            <div key={post.id} className="gear-card overflow-hidden">
              {/* User Header */}
              <div className="flex items-center gap-3 p-4">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{post.user.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: tierInfo.color + '30', color: tierInfo.color }}
                    >
                      {tierInfo.icon}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{post.createdAt}</p>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              <div className="aspect-video bg-gearvn-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">{post.title}</h3>

                {/* Tags - Shop the Look */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gearvn-red/20 text-gearvn-red text-xs rounded-full cursor-pointer hover:bg-gearvn-red/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-gearvn-red transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.respects}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="ml-auto text-sm text-gearvn-red font-medium flex items-center gap-1">
                    Shop the Look
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Second Hand Market
function SecondHandMarket() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/20">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
          <div>
            <p className="font-medium text-white">Chợ Ve Chai 4.0</p>
            <p className="text-sm text-gray-400 mt-1">
              Giao dịch an toàn với sự xác thực của GEARVN. Chỉ dành cho G-PRO & ELITE.
            </p>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {secondHandItems.map((item) => {
          const tierInfo = TIERS[item.seller.tier];
          const discount = Math.round((1 - item.price / item.originalPrice) * 100);

          return (
            <div key={item.id} className="gear-card overflow-hidden">
              <div className="flex gap-4 p-4">
                {/* Image */}
                <div className="w-24 h-24 rounded-xl bg-gearvn-black overflow-hidden flex-shrink-0">
                  <img
                    src={item.images[0]}
                    alt={item.product}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{item.product}</h3>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 text-xs text-green-400 mt-1">
                          <CheckCircle className="w-3 h-3" />
                          GEARVN Verified
                        </span>
                      )}
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      -{discount}%
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">{item.condition}</p>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-bold text-gearvn-red">
                      {(item.price / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {(item.originalPrice / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <img
                    src={item.seller.avatar}
                    alt={item.seller.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-400">{item.seller.name}</span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: tierInfo.color + '30', color: tierInfo.color }}
                  >
                    {tierInfo.icon}
                  </span>
                </div>
                <button className="btn-primary py-1.5 px-4 text-sm">
                  Liên hệ
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sell Button */}
      <button className="gear-card w-full p-4 flex items-center justify-center gap-2 hover:border-gearvn-red/30">
        <Tag className="w-5 h-5 text-gearvn-red" />
        <span className="font-medium text-white">Đăng bán đồ cũ</span>
      </button>
    </div>
  );
}

// Events List
function EventsList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Coffee Tech Talk</h2>
        <span className="text-sm text-gray-400">& Workshop</span>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const earlyBirdTier = TIERS[event.earlyBirdTier];
          const spotsLeft = event.slots - event.registered;

          return (
            <div key={event.id} className="gear-card overflow-hidden">
              {/* Image */}
              <div className="aspect-video bg-gearvn-black relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: earlyBirdTier.color, color: '#fff' }}
                  >
                    {earlyBirdTier.icon} Early Bird: {earlyBirdTier.name}+
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-white text-lg">{event.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{event.subtitle}</p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-gearvn-red" />
                    <span>{new Date(event.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-gearvn-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 col-span-2">
                    <MapPin className="w-4 h-4 text-gearvn-red" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">
                      <Users className="w-4 h-4 inline mr-1" />
                      {event.registered}/{event.slots} người đăng ký
                    </span>
                    <span className={spotsLeft < 10 ? 'text-red-400' : 'text-green-400'}>
                      Còn {spotsLeft} chỗ
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gearvn-red to-orange-500 rounded-full"
                      style={{ width: `${(event.registered / event.slots) * 100}%` }}
                    />
                  </div>
                </div>

                <button className="btn-primary w-full mt-4">
                  Đăng ký tham gia
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Jobs List
function JobsList() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/20">
        <p className="font-medium text-white">Góc Tuyển Dụng IT/Creative</p>
        <p className="text-sm text-gray-400 mt-1">
          Cơ hội việc làm từ các công ty đối tác của GEARVN
        </p>
      </div>

      <div className="space-y-3">
        {techJobs.map((job) => (
          <div key={job.id} className="gear-card p-4">
            <div className="flex items-start gap-4">
              <img
                src={job.logo}
                alt={job.company}
                className="w-12 h-12 rounded-xl bg-white"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-gearvn-red">{job.company}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {job.salary}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full">
                    {job.location}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      <button className="gear-card w-full p-4 flex items-center justify-center gap-2 hover:border-gearvn-red/30">
        <Briefcase className="w-5 h-5 text-gearvn-red" />
        <span className="font-medium text-white">Đăng tin tuyển dụng</span>
      </button>
    </div>
  );
}

export default Community;
