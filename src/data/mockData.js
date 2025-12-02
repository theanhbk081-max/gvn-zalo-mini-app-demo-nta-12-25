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
        image: 'https://product.hstatic.net/200000722513/product/swift-x-14-sfx14-72g-steel-gray-01_aa834522920c43699863266228303038_grande.png',
        category: 'Laptop',
        tag: 'Hot'
    },
    {
        id: 2,
        name: 'Laptop Gaming MSI Katana 15 B13VFK-676VN',
        price: '26.990.000 đ',
        originalPrice: '30.990.000 đ',
        image: 'https://product.hstatic.net/200000722513/product/thumb_laptop_msi_katana_15_b13v_8830720448204630a969302196078726_grande.png',
        category: 'Laptop',
        tag: 'Sale'
    },
    {
        id: 3,
        name: 'Chuột Gaming Logitech G Pro X Superlight 2',
        price: '3.290.000 đ',
        originalPrice: '3.890.000 đ',
        image: 'https://product.hstatic.net/200000722513/product/vn_mouse_pro_x_superlight_2_black_gallery_1_2d790757788444a78728489582570075_grande.jpg',
        category: 'Gear',
        tag: 'New'
    },
    {
        id: 4,
        name: 'Bàn phím cơ AKKO 5075B Plus Naruto',
        price: '2.490.000 đ',
        originalPrice: '2.990.000 đ',
        image: 'https://product.hstatic.net/200000722513/product/ban-phim-co-akko-5075b-plus-naruto-1_72d5d444405345339622564475510006_grande.jpg',
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
