import React, { createContext, useContext, useState } from 'react';
import { currentUser, userGear, userVouchers, dailyCheckIn, notifications, TIERS } from '../data/mockData';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(currentUser);
  const [gear, setGear] = useState(userGear);
  const [vouchers, setVouchers] = useState(userVouchers);
  const [checkIn, setCheckIn] = useState(dailyCheckIn);
  const [notifs, setNotifs] = useState(notifications);
  const [points, setPoints] = useState(currentUser.points);

  const getTierInfo = () => TIERS[user.tier];

  const getNextTier = () => {
    const tierOrder = ['MEMBER', 'SILVER', 'GOLD', 'GPRO', 'ELITE'];
    const currentIndex = tierOrder.indexOf(user.tier);
    if (currentIndex < tierOrder.length - 1) {
      return TIERS[tierOrder[currentIndex + 1]];
    }
    return null;
  };

  const getTierProgress = () => {
    const currentTier = TIERS[user.tier];
    const nextTier = getNextTier();
    if (!nextTier) return 100;

    const progress = ((user.totalSpent - currentTier.minSpent) / (nextTier.minSpent - currentTier.minSpent)) * 100;
    return Math.min(progress, 100);
  };

  const addPoints = (amount) => {
    setPoints(prev => prev + amount);
    setUser(prev => ({ ...prev, points: prev.points + amount }));
  };

  const usePoints = (amount) => {
    if (points >= amount) {
      setPoints(prev => prev - amount);
      setUser(prev => ({ ...prev, points: prev.points - amount }));
      return true;
    }
    return false;
  };

  const performCheckIn = () => {
    if (!checkIn.todayCheckedIn) {
      const newStreak = checkIn.currentStreak + 1;
      const reward = checkIn.rewards.find(r => r.day === newStreak);

      setCheckIn(prev => ({
        ...prev,
        currentStreak: newStreak,
        todayCheckedIn: true,
      }));

      if (reward && reward.type === 'points') {
        addPoints(reward.reward);
      }

      return { success: true, streak: newStreak, reward };
    }
    return { success: false, message: 'Đã điểm danh hôm nay' };
  };

  const markNotificationRead = (id) => {
    setNotifs(prev => prev.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const unreadCount = notifs.filter(n => !n.read).length;

  const value = {
    user,
    setUser,
    gear,
    setGear,
    vouchers,
    setVouchers,
    checkIn,
    performCheckIn,
    notifications: notifs,
    markNotificationRead,
    unreadCount,
    points,
    addPoints,
    usePoints,
    getTierInfo,
    getNextTier,
    getTierProgress,
    TIERS,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;
