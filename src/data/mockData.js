// ============================================
// GEARVN LOYALTY APP - MOCK DATA
// ============================================

// User membership tiers
export const TIERS = {
  MEMBER: { name: 'Member', color: '#6b7280', minSpent: 0, icon: '🎮' },
  SILVER: { name: 'Silver', color: '#9ca3af', minSpent: 5000000, icon: '🥈' },
  GOLD: { name: 'Gold', color: '#fbbf24', minSpent: 20000000, icon: '🥇' },
  GPRO: { name: 'G-PRO', color: '#E31837', minSpent: 50000000, icon: '💎' },
  ELITE: { name: 'Elite', color: '#000000', minSpent: 100000000, icon: '👑' },
};

// Current user data
export const currentUser = {
  id: 'USR001',
  name: 'Nguyễn Văn Minh',
  phone: '0912345678',
  email: 'minh.nguyen@email.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh',
  tier: 'GPRO',
  points: 15680,
  totalSpent: 68500000,
  nextTierSpent: 100000000,
  memberSince: '2022-03-15',
  qrCode: 'GEARVN-USR001-GPRO',
};

// User's owned gear (Digital Garage)
export const userGear = {
  mainRig: {
    id: 'RIG001',
    name: 'GAMING BEAST',
    buildDate: '2023-06-15',
    totalValue: 45000000,
    components: [
      {
        id: 'CPU001',
        type: 'CPU',
        name: 'Intel Core i7-13700K',
        brand: 'Intel',
        price: 9990000,
        purchaseDate: '2023-06-15',
        warranty: '2026-06-15',
        warrantyStatus: 'active',
        health: 95,
        age: 18, // months
        icon: '🔲',
      },
      {
        id: 'GPU001',
        type: 'VGA',
        name: 'RTX 4070 Ti SUPER',
        brand: 'ASUS',
        price: 19990000,
        purchaseDate: '2023-06-15',
        warranty: '2026-06-15',
        warrantyStatus: 'active',
        health: 92,
        age: 18,
        icon: '🎴',
      },
      {
        id: 'RAM001',
        type: 'RAM',
        name: 'G.Skill Trident Z5 RGB 32GB',
        brand: 'G.Skill',
        price: 3990000,
        purchaseDate: '2023-06-15',
        warranty: '2028-06-15',
        warrantyStatus: 'active',
        health: 100,
        age: 18,
        icon: '📊',
      },
      {
        id: 'SSD001',
        type: 'SSD',
        name: 'Samsung 990 Pro 2TB',
        brand: 'Samsung',
        price: 4990000,
        purchaseDate: '2023-06-15',
        warranty: '2028-06-15',
        warrantyStatus: 'active',
        health: 88,
        age: 18,
        icon: '💾',
      },
      {
        id: 'MB001',
        type: 'Mainboard',
        name: 'ASUS ROG STRIX Z790-E',
        brand: 'ASUS',
        price: 12990000,
        purchaseDate: '2023-06-15',
        warranty: '2026-06-15',
        warrantyStatus: 'active',
        health: 100,
        age: 18,
        icon: '🔧',
      },
      {
        id: 'PSU001',
        type: 'PSU',
        name: 'Corsair RM850x',
        brand: 'Corsair',
        price: 3500000,
        purchaseDate: '2023-06-15',
        warranty: '2033-06-15',
        warrantyStatus: 'active',
        health: 100,
        age: 18,
        icon: '⚡',
      },
    ],
  },
  peripherals: [
    {
      id: 'KB001',
      type: 'Keyboard',
      name: 'Keychron Q1 Pro',
      brand: 'Keychron',
      price: 4500000,
      purchaseDate: '2023-08-20',
      warranty: '2024-08-20',
      warrantyStatus: 'expiring',
      icon: '⌨️',
    },
    {
      id: 'MS001',
      type: 'Mouse',
      name: 'Logitech G Pro X Superlight 2',
      brand: 'Logitech',
      price: 3290000,
      purchaseDate: '2024-01-10',
      warranty: '2026-01-10',
      warrantyStatus: 'active',
      icon: '🖱️',
    },
    {
      id: 'HS001',
      type: 'Headset',
      name: 'SteelSeries Arctis Nova Pro',
      brand: 'SteelSeries',
      price: 7990000,
      purchaseDate: '2023-12-25',
      warranty: '2025-12-25',
      warrantyStatus: 'active',
      icon: '🎧',
    },
    {
      id: 'MN001',
      type: 'Monitor',
      name: 'ASUS ROG Swift PG27AQN',
      brand: 'ASUS',
      price: 25990000,
      purchaseDate: '2023-06-15',
      warranty: '2026-06-15',
      warrantyStatus: 'active',
      icon: '🖥️',
    },
  ],
};

// Upgrade suggestions
export const upgradeSuggestions = [
  {
    id: 'UPG001',
    currentItem: 'RTX 4070 Ti SUPER',
    suggestedItem: 'RTX 4080 SUPER',
    suggestedPrice: 28990000,
    tradeInValue: 16000000,
    priceDifference: 12990000,
    performanceGain: '+35%',
    reason: 'Tăng 35% hiệu năng gaming 4K',
    priority: 'high',
  },
  {
    id: 'UPG002',
    currentItem: 'Samsung 990 Pro 2TB',
    suggestedItem: 'Samsung 990 Pro 4TB',
    suggestedPrice: 8990000,
    tradeInValue: 3500000,
    priceDifference: 5490000,
    performanceGain: '+100% dung lượng',
    reason: 'SSD đã sử dụng 75% dung lượng',
    priority: 'medium',
  },
];

// Benchmark leaderboard
export const benchmarkLeaderboard = [
  { rank: 1, name: 'ProGamer_VN', score: 42580, cpu: 'i9-14900KS', gpu: 'RTX 4090', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pro1' },
  { rank: 2, name: 'TechMaster', score: 38920, cpu: 'i9-14900K', gpu: 'RTX 4090', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tech' },
  { rank: 3, name: 'BuildKing', score: 35450, cpu: 'R9 7950X3D', gpu: 'RTX 4080S', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=King' },
  { rank: 4, name: 'GearHead_2024', score: 32100, cpu: 'i7-14700K', gpu: 'RTX 4080', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gear' },
  { rank: 5, name: 'Nguyễn Văn Minh', score: 28750, cpu: 'i7-13700K', gpu: 'RTX 4070Ti S', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', isCurrentUser: true },
  { rank: 6, name: 'PCBuilder_SG', score: 27200, cpu: 'i7-13700K', gpu: 'RTX 4070Ti', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SG' },
  { rank: 7, name: 'GameDev_HN', score: 25800, cpu: 'R7 7800X3D', gpu: 'RTX 4070S', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HN' },
];

// Service bookings
export const serviceTypes = [
  { id: 'SV001', name: 'Vệ sinh PC', icon: '🧹', price: 200000, duration: '1-2 giờ' },
  { id: 'SV002', name: 'Thay keo tản nhiệt', icon: '❄️', price: 150000, duration: '30 phút' },
  { id: 'SV003', name: 'Kiểm tra tổng quát', icon: '🔍', price: 100000, duration: '1 giờ' },
  { id: 'SV004', name: 'Cài đặt Windows', icon: '💿', price: 300000, duration: '2 giờ' },
  { id: 'SV005', name: 'Nâng cấp linh kiện', icon: '⬆️', price: 'Theo linh kiện', duration: 'Tùy thuộc' },
  { id: 'SV006', name: 'Sửa chữa phần cứng', icon: '🔧', price: 'Báo giá', duration: 'Tùy thuộc' },
];

// Warranty tracking
export const warrantyTracking = {
  id: 'WR2024001234',
  product: 'RTX 4070 Ti SUPER',
  status: 'in_progress',
  createdAt: '2024-11-28',
  estimatedComplete: '2024-12-05',
  technician: {
    name: 'Trần Văn Tùng',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tung',
    phone: '0901234567',
    rating: 4.9,
  },
  timeline: [
    { step: 1, title: 'Tiếp nhận máy', status: 'completed', time: '2024-11-28 10:30', note: 'Đã kiểm tra ngoại quan' },
    { step: 2, title: 'Chẩn đoán lỗi', status: 'completed', time: '2024-11-28 14:00', note: 'Phát hiện lỗi VRAM' },
    { step: 3, title: 'Xử lý / Thay thế', status: 'in_progress', time: '2024-11-29 09:00', note: 'Đang thay thế linh kiện mới' },
    { step: 4, title: 'Kiểm tra & Test', status: 'pending', time: null, note: null },
    { step: 5, title: 'Sẵn sàng trả máy', status: 'pending', time: null, note: null },
  ],
};

// Driver downloads
export const driverDownloads = [
  { id: 'DRV001', name: 'NVIDIA GeForce 551.23', type: 'VGA', size: '680 MB', date: '2024-11-20', verified: true },
  { id: 'DRV002', name: 'Intel Chipset Driver', type: 'Chipset', size: '45 MB', date: '2024-11-15', verified: true },
  { id: 'DRV003', name: 'Realtek Audio Driver', type: 'Audio', size: '120 MB', date: '2024-11-10', verified: true },
  { id: 'DRV004', name: 'ASUS Armoury Crate', type: 'Utility', size: '250 MB', date: '2024-11-05', verified: true },
];

// Profile presets
export const profilePresets = [
  { id: 'PRF001', name: 'Gaming Performance', author: 'GEARVN Official', downloads: 12500, rating: 4.8 },
  { id: 'PRF002', name: 'Silent Workstation', author: 'GEARVN Official', downloads: 8900, rating: 4.7 },
  { id: 'PRF003', name: 'RGB Showcase', author: 'Community', downloads: 5600, rating: 4.5 },
  { id: 'PRF004', name: 'Streaming Optimized', author: 'TechMaster', downloads: 3200, rating: 4.6 },
];

// Rental services
export const rentalItems = [
  {
    id: 'RNT001',
    name: 'RTX 4090 24GB',
    type: 'VGA',
    pricePerDay: 500000,
    pricePerWeek: 2800000,
    available: true,
    minTier: 'ELITE',
    deposit: 30000000,
  },
  {
    id: 'RNT002',
    name: 'Laptop Workstation P16',
    type: 'Laptop',
    pricePerDay: 800000,
    pricePerWeek: 4500000,
    available: true,
    minTier: 'GPRO',
    deposit: 50000000,
  },
  {
    id: 'RNT003',
    name: 'Streaming Kit Pro',
    type: 'Bundle',
    pricePerDay: 300000,
    pricePerWeek: 1500000,
    available: false,
    minTier: 'GOLD',
    deposit: 15000000,
  },
];

// Battle Station Showcase
export const battleStations = [
  {
    id: 'BS001',
    user: { name: 'ProSetup_VN', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Setup1', tier: 'ELITE' },
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600',
    title: 'Góc gaming minimal',
    respects: 1250,
    comments: 89,
    tags: ['RTX 4090', 'i9-14900K', 'ASUS ROG'],
    createdAt: '2024-11-25',
  },
  {
    id: 'BS002',
    user: { name: 'RGBMaster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RGB', tier: 'GPRO' },
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600',
    title: 'Full RGB Showcase',
    respects: 980,
    comments: 67,
    tags: ['Lian Li', 'Corsair', 'Full RGB'],
    createdAt: '2024-11-24',
  },
  {
    id: 'BS003',
    user: { name: 'WorkFromHome', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WFH', tier: 'GOLD' },
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=600',
    title: 'WFH Station',
    respects: 756,
    comments: 45,
    tags: ['Ultrawide', 'Mac Studio', 'Clean desk'],
    createdAt: '2024-11-23',
  },
];

// Second-hand market
export const secondHandItems = [
  {
    id: 'SH001',
    seller: { name: 'TechSeller_HN', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sell1', tier: 'GPRO', rating: 4.8 },
    product: 'RTX 3080 10GB',
    originalPrice: 18990000,
    price: 9500000,
    condition: 'Còn BH 6 tháng',
    images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400'],
    verified: true,
    createdAt: '2024-11-27',
  },
  {
    id: 'SH002',
    seller: { name: 'Gamer_SG', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer', tier: 'ELITE', rating: 5.0 },
    product: 'Intel i9-13900K',
    originalPrice: 15990000,
    price: 11000000,
    condition: 'Fullbox, còn BH 1 năm',
    images: ['https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400'],
    verified: true,
    createdAt: '2024-11-26',
  },
];

// Events
export const events = [
  {
    id: 'EVT001',
    title: 'Coffee Tech Talk #15',
    subtitle: 'Build PC 2025 - Xu hướng mới',
    date: '2024-12-15',
    time: '14:00 - 17:00',
    location: 'GEARVN 78-80 Hoàng Hoa Thám',
    slots: 50,
    registered: 42,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    earlyBirdTier: 'GPRO',
  },
  {
    id: 'EVT002',
    title: 'Workshop Overclocking',
    subtitle: 'Học cách OC CPU & RAM an toàn',
    date: '2024-12-22',
    time: '09:00 - 12:00',
    location: 'GEARVN Flagship Q1',
    slots: 30,
    registered: 28,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    earlyBirdTier: 'GOLD',
  },
];

// Tech Jobs
export const techJobs = [
  {
    id: 'JOB001',
    company: 'TechVN Studio',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=TechVN',
    title: 'Senior Unity Developer',
    salary: '25-40 triệu',
    location: 'Quận 7, HCM',
    type: 'Full-time',
    postedAt: '2024-11-28',
  },
  {
    id: 'JOB002',
    company: 'Creative Hub',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Creative',
    title: '3D Artist - Game',
    salary: '18-30 triệu',
    location: 'Quận 1, HCM',
    type: 'Full-time',
    postedAt: '2024-11-27',
  },
  {
    id: 'JOB003',
    company: 'Streaming Agency',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Stream',
    title: 'Video Editor',
    salary: '15-25 triệu',
    location: 'Remote',
    type: 'Full-time / Remote',
    postedAt: '2024-11-26',
  },
];

// Vouchers
export const userVouchers = [
  {
    id: 'VC001',
    code: 'GPRO100K',
    title: 'Giảm 100K',
    description: 'Đơn hàng từ 2 triệu',
    discount: 100000,
    minOrder: 2000000,
    expiresAt: '2024-12-31',
    type: 'discount',
    tradeable: true,
  },
  {
    id: 'VC002',
    code: 'FREESHIP',
    title: 'Free Ship',
    description: 'Miễn phí vận chuyển toàn quốc',
    discount: 50000,
    minOrder: 500000,
    expiresAt: '2024-12-15',
    type: 'shipping',
    tradeable: true,
  },
  {
    id: 'VC003',
    code: 'VIP5%',
    title: 'Giảm 5%',
    description: 'Áp dụng cho VGA & CPU',
    discountPercent: 5,
    maxDiscount: 500000,
    minOrder: 5000000,
    expiresAt: '2025-01-31',
    type: 'percent',
    tradeable: false,
  },
];

// Rewards catalog
export const rewardsCatalog = [
  { id: 'RW001', name: 'Steam Wallet 100K', points: 1200, category: 'gaming', stock: 50, image: '🎮' },
  { id: 'RW002', name: 'Steam Wallet 200K', points: 2300, category: 'gaming', stock: 30, image: '🎮' },
  { id: 'RW003', name: 'Windows 11 Pro Key', points: 3500, category: 'software', stock: 20, image: '💿' },
  { id: 'RW004', name: 'Office 365 1 năm', points: 4000, category: 'software', stock: 15, image: '📊' },
  { id: 'RW005', name: 'Game Pass Ultimate 1 tháng', points: 1800, category: 'gaming', stock: 100, image: '🎯' },
  { id: 'RW006', name: 'Voucher GEARVN 200K', points: 2000, category: 'voucher', stock: 999, image: '🎫' },
  { id: 'RW007', name: 'Mousepad XL GEARVN', points: 800, category: 'merchandise', stock: 50, image: '🖱️' },
  { id: 'RW008', name: 'Áo thun GEARVN Limited', points: 1500, category: 'merchandise', stock: 30, image: '👕' },
];

// Exclusive items (The Velvet Rope)
export const exclusiveItems = [
  {
    id: 'EX001',
    name: 'Keycap Artisan "Dragon" Limited',
    price: 2500000,
    points: 5000,
    stock: 10,
    minTier: 'ELITE',
    image: '🐉',
  },
  {
    id: 'EX002',
    name: 'RTX 4090 ROG STRIX White',
    price: 52990000,
    points: null,
    stock: 5,
    minTier: 'GPRO',
    image: '🎴',
    earlyAccess: true,
  },
  {
    id: 'EX003',
    name: 'Custom Sleeved Cable Set',
    price: 1500000,
    points: 3000,
    stock: 20,
    minTier: 'GOLD',
    image: '🔌',
  },
];

// Missions (Bounty Hunter)
export const missions = [
  {
    id: 'MS001',
    title: 'Check-in tại showroom',
    description: 'Chụp ảnh check-in tại bất kỳ showroom GEARVN',
    reward: 200,
    type: 'photo',
    deadline: '2024-12-31',
    status: 'available',
  },
  {
    id: 'MS002',
    title: 'Đánh giá sản phẩm',
    description: 'Viết review chi tiết (100+ chữ) cho sản phẩm đã mua',
    reward: 500,
    type: 'review',
    deadline: '2024-12-31',
    status: 'available',
  },
  {
    id: 'MS003',
    title: 'Góc máy đẹp',
    description: 'Upload ảnh góc máy lên Battle Station với 50+ Respect',
    reward: 1000,
    type: 'community',
    deadline: '2024-12-31',
    status: 'in_progress',
    progress: 32,
    target: 50,
  },
  {
    id: 'MS004',
    title: 'Giới thiệu bạn bè',
    description: 'Mời 1 bạn bè đăng ký và mua hàng',
    reward: 1500,
    type: 'referral',
    deadline: null,
    status: 'available',
  },
];

// Daily check-in
export const dailyCheckIn = {
  currentStreak: 5,
  maxStreak: 30,
  todayCheckedIn: false,
  rewards: [
    { day: 1, reward: 10, type: 'points' },
    { day: 2, reward: 20, type: 'points' },
    { day: 3, reward: 30, type: 'points' },
    { day: 4, reward: 50, type: 'points' },
    { day: 5, reward: 100, type: 'points' },
    { day: 6, reward: 150, type: 'points' },
    { day: 7, reward: 'Voucher 50K', type: 'voucher' },
    { day: 14, reward: 'Mousepad', type: 'item' },
    { day: 30, reward: 'Voucher 200K', type: 'voucher' },
  ],
};

// Cyber Pass partners
export const cyberPassPartners = [
  {
    id: 'CP001',
    name: 'Cyber Gaming Q1',
    address: '123 Nguyễn Trãi, Q1',
    discount: '20%',
    freeHours: 2,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
  },
  {
    id: 'CP002',
    name: 'Pro Gaming Center',
    address: '456 Lê Văn Sỹ, Q3',
    discount: '15%',
    freeHours: 1,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
  },
  {
    id: 'CP003',
    name: 'Elite Cyber Thủ Đức',
    address: '789 Võ Văn Ngân, Thủ Đức',
    discount: '25%',
    freeHours: 3,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
  },
];

// Notifications
export const notifications = [
  {
    id: 'NTF001',
    type: 'warranty',
    title: 'Cập nhật bảo hành',
    message: 'RTX 4070 Ti SUPER đang được xử lý',
    time: '5 phút trước',
    read: false,
  },
  {
    id: 'NTF002',
    type: 'promo',
    title: 'Ưu đãi VIP',
    message: 'Giảm thêm 10% cho đơn hàng tiếp theo',
    time: '1 giờ trước',
    read: false,
  },
  {
    id: 'NTF003',
    type: 'points',
    title: 'Điểm thưởng',
    message: 'Bạn vừa nhận được 500 điểm từ đơn hàng',
    time: '2 giờ trước',
    read: true,
  },
];

// Showroom locations
export const showrooms = [
  { id: 'SR001', name: 'GEARVN 78-80 Hoàng Hoa Thám', district: 'Tân Bình', city: 'HCM' },
  { id: 'SR002', name: 'GEARVN Flagship Quận 1', district: 'Quận 1', city: 'HCM' },
  { id: 'SR003', name: 'GEARVN Quận 7', district: 'Quận 7', city: 'HCM' },
  { id: 'SR004', name: 'GEARVN Thủ Đức', district: 'Thủ Đức', city: 'HCM' },
  { id: 'SR005', name: 'GEARVN Hà Nội', district: 'Cầu Giấy', city: 'Hà Nội' },
];

export default {
  TIERS,
  currentUser,
  userGear,
  upgradeSuggestions,
  benchmarkLeaderboard,
  serviceTypes,
  warrantyTracking,
  driverDownloads,
  profilePresets,
  rentalItems,
  battleStations,
  secondHandItems,
  events,
  techJobs,
  userVouchers,
  rewardsCatalog,
  exclusiveItems,
  missions,
  dailyCheckIn,
  cyberPassPartners,
  notifications,
  showrooms,
};
