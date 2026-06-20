// Central wedding data config — edit this file to customize all content on the invitation.

export const weddingConfig = {
    groom: {
        shortName: "Tuấn Kiệt",
        fullName: "Nguyễn Tuấn Kiệt",
        title: "Út nam",
        father: "Nguyễn Văn Hùng",
        mother: "Lê Thị Thu",
        address: "12 Hùng Vương, Quế Sơn",
    },
    bride: {
        shortName: "Thanh Hà",
        fullName: "Trần Thanh Hà",
        title: "Trưởng nữ",
        father: "Trần Văn Long",
        mother: "Phạm Thị Hoa",
        address: "12 Hùng Vương, Quế Sơn",
    },
    ceremony: {
        location: "Lễ thành hôn được cử hành tại tư gia",
        time: "09:00",
        weekday: "Chủ Nhật",
        day: "12",
        month: "07",
        year: "2026",
        lunarDate: "Tức ngày 28/05 năm Bính Ngọ",
    },
    reception: {
        welcomeTime: "17:30",
        partyTime: "18:00",
        venueName: "Tiệc cưới Ben, Xã Quế Sơn",
        mapEmbedUrl:
            "https://www.google.com/maps?q=Vinhomes+Co+Loa+Dong+Anh+Ha+Noi&output=embed",
        mapLink: "https://maps.app.goo.gl/",
    },
    // ISO datetime used for the countdown timer — keep in sync with ceremony fields above
    eventDateTimeISO: "2026-07-12T18:00:00+07:00",
    schedule: [
        { time: "17:30", label: "Đón khách" },
        { time: "18:30", label: "Khai tiệc" },
        { time: "18:45", label: "Rót rượu, cắt bánh" },
        { time: "19:00", label: "Phục vụ món chính" },
        { time: "21:00", label: "Kết thúc tiệc" },
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
            accountName: "NGUYEN TUAN KIET",
            accountNumber: "0123456789",
            qrImage: "/images/qrtrai.png",
        },
        brideBank: {
            bankName: "Techcombank",
            accountName: "TRAN THANH HA",
            accountNumber: "9876543210",
            qrImage: "/images/qrgai.png",
        },
    },
    siteName: "trinhbuiwedding.com",
    musicSrc: "/audio/wedding-music.mp3",
};

export type WeddingConfig = typeof weddingConfig;
