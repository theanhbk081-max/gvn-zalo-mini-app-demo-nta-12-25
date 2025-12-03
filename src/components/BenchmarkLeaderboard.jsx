import React, { useState } from 'react';
import { Trophy, Medal, Crown, Plus, Gauge, TrendingUp, AlertCircle } from 'lucide-react';
import { benchmarkLeaderboard } from '../data/mockData';

function BenchmarkLeaderboard() {
  const [showSubmit, setShowSubmit] = useState(false);
  const currentUserEntry = benchmarkLeaderboard.find(e => e.isCurrentUser);
  const topThree = benchmarkLeaderboard.slice(0, 3);
  const restOfList = benchmarkLeaderboard.slice(3);

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Bảng xếp hạng Benchmark
        </h2>
        <button
          onClick={() => setShowSubmit(!showSubmit)}
          className="flex items-center gap-1 px-3 py-1.5 bg-gearvn-red/20 text-gearvn-red rounded-full text-sm font-medium hover:bg-gearvn-red/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nộp điểm
        </button>
      </div>

      {/* Submit Score Form */}
      {showSubmit && <SubmitScoreForm onClose={() => setShowSubmit(false)} />}

      {/* User's Position Highlight */}
      {currentUserEntry && (
        <div className="bg-gradient-to-r from-gearvn-red/20 to-orange-500/20 rounded-xl p-4 border border-gearvn-red/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gearvn-red flex items-center justify-center font-bold text-white">
                #{currentUserEntry.rank}
              </div>
              <div>
                <p className="font-semibold text-white">Thứ hạng của bạn</p>
                <p className="text-sm text-gray-400">
                  Mạnh hơn {100 - Math.round((currentUserEntry.rank / benchmarkLeaderboard.length) * 100)}% người dùng
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{currentUserEntry.score.toLocaleString()}</p>
              <p className="text-xs text-gray-400">3DMark</p>
            </div>
          </div>
        </div>
      )}

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-2 py-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <img
            src={topThree[1]?.avatar}
            alt={topThree[1]?.name}
            className="w-12 h-12 rounded-full border-2 border-gray-400 mb-2"
          />
          <div className="bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg w-20 h-16 flex flex-col items-center justify-center">
            <Medal className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-bold text-white">#2</span>
          </div>
          <p className="text-xs text-gray-400 mt-1 truncate w-20 text-center">{topThree[1]?.name}</p>
          <p className="text-xs font-medium text-white">{topThree[1]?.score.toLocaleString()}</p>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-4">
          <Crown className="w-6 h-6 text-yellow-500 mb-1" />
          <img
            src={topThree[0]?.avatar}
            alt={topThree[0]?.name}
            className="w-14 h-14 rounded-full border-2 border-yellow-500 mb-2"
          />
          <div className="bg-gradient-to-t from-yellow-600 to-yellow-500 rounded-t-lg w-24 h-24 flex flex-col items-center justify-center">
            <Trophy className="w-6 h-6 text-yellow-200" />
            <span className="text-lg font-bold text-white">#1</span>
          </div>
          <p className="text-xs text-gray-400 mt-1 truncate w-24 text-center">{topThree[0]?.name}</p>
          <p className="text-sm font-bold text-yellow-500">{topThree[0]?.score.toLocaleString()}</p>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <img
            src={topThree[2]?.avatar}
            alt={topThree[2]?.name}
            className="w-12 h-12 rounded-full border-2 border-orange-700 mb-2"
          />
          <div className="bg-gradient-to-t from-orange-800 to-orange-700 rounded-t-lg w-20 h-12 flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-white">#3</span>
          </div>
          <p className="text-xs text-gray-400 mt-1 truncate w-20 text-center">{topThree[2]?.name}</p>
          <p className="text-xs font-medium text-white">{topThree[2]?.score.toLocaleString()}</p>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="gear-card divide-y divide-white/5">
        {restOfList.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-3 p-3 ${
              entry.isCurrentUser ? 'bg-gearvn-red/10' : ''
            }`}
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              entry.isCurrentUser
                ? 'bg-gearvn-red text-white'
                : 'bg-white/10 text-gray-400'
            }`}>
              {entry.rank}
            </span>
            <img
              src={entry.avatar}
              alt={entry.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className={`font-medium truncate ${entry.isCurrentUser ? 'text-gearvn-red' : 'text-white'}`}>
                {entry.name} {entry.isCurrentUser && '(Bạn)'}
              </p>
              <p className="text-xs text-gray-500">{entry.cpu} • {entry.gpu}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">{entry.score.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottleneck Analysis */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
          <div>
            <p className="font-medium text-white">Phân tích hiệu năng</p>
            <p className="text-sm text-gray-400 mt-1">
              CPU của bạn đang hoạt động tối ưu. Nâng cấp VGA lên RTX 4080 Super có thể tăng điểm benchmark lên <span className="text-green-400 font-medium">+35%</span>
            </p>
            <button className="text-sm text-gearvn-red font-medium mt-2 flex items-center gap-1 hover:underline">
              <TrendingUp className="w-4 h-4" />
              Xem gợi ý nâng cấp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubmitScoreForm({ onClose }) {
  const [score, setScore] = useState('');
  const [benchmark, setBenchmark] = useState('3dmark');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission
    onClose();
  };

  return (
    <div className="gear-card p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 block mb-2">Loại Benchmark</label>
          <div className="flex gap-2">
            {['3dmark', 'cinebench', 'geekbench'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setBenchmark(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  benchmark === type
                    ? 'bg-gearvn-red text-white'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {type === '3dmark' && '3DMark'}
                {type === 'cinebench' && 'Cinebench'}
                {type === 'geekbench' && 'Geekbench'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2">Điểm số</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="VD: 28750"
            className="input-field"
          />
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={onClose} className="btn-secondary flex-1">
            Hủy
          </button>
          <button type="submit" className="btn-primary flex-1">
            Nộp điểm
          </button>
        </div>
      </form>
    </div>
  );
}

export default BenchmarkLeaderboard;
