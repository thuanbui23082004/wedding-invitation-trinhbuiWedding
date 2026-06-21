// Central wedding data config — edit this file to customize all content on the invitation.

export const weddingConfig = {
    groom: {
        shortName: "Mạnh Cường",
        fullName: "Huỳnh Mạnh Cường",
        title: "Trưởng nam",
        father: "Huỳnh Bá Hùng",
        mother: "Hồ Thị Siêng",
        address: "thôn Phước Ấm, xã Thăng An, TP.Đà Nẵng",
    },
    bride: {
        shortName: "Thanh Thúy",
        fullName: "Lê Thị Thanh Thúy",
        title: "Trưởng nữ",
        father: "Lê Văn Phú",
        mother: "Mạc Thị Phước",
        address: "thôn Đồng Tràm Tây, xã Xuân Phú, TP.Đà Nẵng",
    },
    ceremony: {
        location: "Lễ Vu Quy được cử hành tại tư gia",
        time: "07:00",
        weekday: "Chủ Nhật",
        day: "05",
        month: "07",
        year: "2026",
        lunarDate: "Tức ngày 21/05 năm Bính Ngọ",
    },
    reception: {
        welcomeTime: "10:30",
        partyTime: "11:00",
        weekday: "Thứ Bảy",
        day: "04",
        month: "07",
        lunarDate: "Tức ngày 20/05 năm Bính Ngọ",
        venueName: "Nhà văn hóa thôn Đồng Tràm Tây, xã Xuân Phú, TP.Đà Nẵng",
        mapEmbedUrl:
            "https://www.google.com/maps?q=Vinhomes+Co+Loa+Dong+Anh+Ha+Noi&output=embed",
        mapLink: "https://maps.app.goo.gl/",
    },
    // ISO datetime used for the countdown timer — keep in sync with ceremony fields above
    eventDateTimeISO: "2026-07-04T10:30:00+07:00",
    schedule: [
        { time: "10:30", label: "Đón khách" },
        { time: "11:00", label: "Khai tiệc" },
        { time: "11:15", label: "Rót rượu, cắt bánh" },
        { time: "11:20", label: "Phục vụ món chính" },
        { time: "13:00", label: "Kết thúc tiệc" },
    ],
    dressCode: ["#FFFFFF", "#D89A4E", "#E08C8C", "#6B4A33"],
    gallery: [
        "/images/gallery-1.jpg",
        "/images/gallery-2.jpg",
        "/images/gallery-3.jpg",
        "/images/gallery-4.jpg",
        "/images/gallery-5.jpg",
    ],
    heroImage: "/images/hero.jpg",
    bankInfo: {
        groomBank: {
            bankName: "Vietcombank",
            accountName: "HUỲNH MẠNH CƯỜNG",
            accountNumber: "0123456789",
            qrImage: "/images/qrtrai.png",
        },
        brideBank: {
            bankName: "Techcombank",
            accountName: "LÊ THỊ THANH THÚY",
            accountNumber: "9876543210",
            qrImage: "/images/qrgai.png",
        },
    },
    siteName: "trinhbuiwedding.com",
    musicSrc: "/audio/wedding-music.mp3",
};

export type WeddingConfig = typeof weddingConfig;
