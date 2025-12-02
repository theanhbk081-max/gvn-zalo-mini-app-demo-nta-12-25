export const USERS = {
    B2C: {
        name: 'Nguyễn Văn A',
        phone: '0909123456',
        rank: 'Member',
        points: 150,
        segment: 'B2C',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
    },
    Elite: {
        name: 'Trần Thị B - VIP',
        phone: '0918888888',
        rank: 'Elite',
        points: 2500,
        segment: 'Elite',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
    },
    B2B: {
        name: 'Công ty TNHH Tech Solutions',
        phone: '02839999999',
        rank: 'Partner',
        points: 5000,
        segment: 'B2B',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jude'
    }
};

export const PRODUCTS = [
    {
        id: 1,
        name: 'Laptop Acer Swift X14 SFX14-71G-78S6',
        price: '35.490.000 đ',
        originalPrice: '39.990.000 đ',
        image: 'https://lh3.googleusercontent.com/d/1N3yC-tq-c5x3q7y_z4x5w6v7u8t9s0r', // Placeholder for Acer Swift
        category: 'Laptop',
        tag: 'Hot'
    },
    {
        id: 2,
        name: 'Laptop Gaming MSI Katana 15 B13VFK-676VN',
        price: '26.990.000 đ',
        originalPrice: '30.990.000 đ',
        image: 'https://lh3.googleusercontent.com/d/1O4zD-e5f6g7h8i9j0k1l2m3n4o5p6q', // Placeholder for MSI Katana
        category: 'Laptop',
        tag: 'Sale'
    },
    {
        id: 3,
        name: 'Chuột Gaming Logitech G Pro X Superlight 2',
        price: '3.290.000 đ',
        originalPrice: '3.890.000 đ',
        image: 'https://lh3.googleusercontent.com/d/1P5aE-r6s7t8u9v0w1x2y3z4a5b6c7d', // Placeholder for Logitech Mouse
        category: 'Gear',
        tag: 'New'
    },
    {
        id: 4,
        name: 'Bàn phím cơ AKKO 5075B Plus Naruto',
        price: '2.490.000 đ',
        originalPrice: '2.990.000 đ',
        image: 'https://lh3.googleusercontent.com/d/1Q6bF-s7t8u9v0w1x2y3z4a5b6c7d', // Placeholder for Keyboard
        category: 'Gear',
        tag: 'Limited'
    }
];

export const VOUCHERS = [
    {
        id: 1,
        title: 'Giảm 500K mua Laptop',
        description: 'Áp dụng cho đơn hàng từ 15 triệu',
        points: 500,
        image: 'https://img.freepik.com/free-vector/coupon-voucher-template-design_23-2148926868.jpg'
    },
    {
        id: 2,
        title: 'Free Vệ sinh Laptop',
        description: 'Miễn phí vệ sinh trọn đời máy',
        points: 200,
        image: 'https://img.freepik.com/free-vector/modern-gift-voucher-template_1017-15206.jpg'
    },
    {
        id: 3,
        title: 'Giảm 10% Gear',
        description: 'Tối đa 200K cho chuột, phím, tai nghe',
        points: 300,
        image: 'https://img.freepik.com/free-vector/flat-design-gift-voucher_23-2148895924.jpg'
    }
];

export const NEWS = [
    {
        id: 1,
        title: 'Siêu Sale 12.12 - Săn Deal Khủng',
        image: 'https://img.freepik.com/free-vector/gradient-12-12-sale-background_23-2149150446.jpg'
    },
    {
        id: 2,
        title: 'Review Laptop Gaming Tốt Nhất 2024',
        image: 'https://img.freepik.com/free-photo/gamer-playing-with-computer_23-2147963155.jpg'
    }
];

export const BOOKING_HISTORY = [
    {
        id: 'BK001',
        service: 'Vệ sinh Laptop',
        date: '2023-11-20',
        time: '14:00',
        status: 'Completed',
        technician: 'Nguyễn Văn Kỹ'
    },
    {
        id: 'BK002',
        service: 'Cài Win & Phần mềm',
        date: '2023-12-01',
        time: '09:00',
        status: 'Pending',
        technician: 'Chưa phân công'
    }
];
