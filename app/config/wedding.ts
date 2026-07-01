// Central wedding data config — edit this file to customize all content on the invitation.

export const weddingConfig = {
    groom: {
        shortName: "Long Vũ",
        fullName: "Nguyễn Thanh Long Vũ",
        title: "Quý nam",
        father: "Nguyễn Thanh Giải",
        mother: "Trần Thị Vân",
        address: "Đội 5, TDP Vĩnh An, phường Phong Dinh, TP. Huế",
    },
    bride: {
        shortName: "Thu Hiền",
        fullName: "Huỳnh Thị Thu Hiền",
        title: "Thứ nữ",
        father: "Huỳnh Lưỡng",
        mother: "Nguyễn Thị Tình",
        address: "Tổ 7, thôn Hưng Mỹ, xã Thăng An, TP. Đà Nẵng",
    },
    ceremony: {
        location: "Lễ Thành Hôn được cử hành tại tư gia",
        time: "09:00",
        weekday: "Thứ Ba",
        day: "21",
        month: "07",

        year: "2026",
        lunarDate: "Tức ngày 8/6 năm Bính Ngọ",
    },
    reception: {
        welcomeTime: "10:30",
        partyTime: "11:00",
        weekday: "Thứ Ba",
        day: "21",
        month: "07",
        lunarDate: "Tức ngày 8/6 năm Bính Ngọ",
        venueName: "Đội 5, TDP Vĩnh An, phường Phong Dinh, TP. Huế",
        mapEmbedUrl:
            "https://www.google.com/maps?q=16.6798578,107.3362803&z=17&output=embed",
        mapLink:
            "https://www.google.com/maps/place/16%C2%B040'47.5%22N+107%C2%B020'10.6%22E/@16.6798578,107.3337054,1041m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d16.6798578!4d107.3362803!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",
    },
    //sss
    // ISO datetime used for the countdown timer — keep in sync with ceremony fields above
    eventDateTimeISO: "2026-07-21T10:30:00+07:00",
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
            bankName: "LB Bank",
            accountName: "HUỲNH MẠNH CƯỜNG",
            accountNumber: "0906438943",
            qrImage: "/images/qrtrai.png",
        },
        brideBank: {
            bankName: "MB Bank",
            accountName: "LÊ THỊ THANH THÚY",
            accountNumber: "0933594345",
            qrImage: "/images/qrgai.png",
        },
    },
    siteName: "trinhbuiwedding.com",
    musicSrc: "/audio/wedding-music.mp3",
};

export type WeddingConfig = typeof weddingConfig;
