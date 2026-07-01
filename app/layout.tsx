import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(
        "https://wedding-invitation-is5acftca-thuan-buis-projects.vercel.app",
    ),
    title: "Long Vũ & Thu Hiền | Thiệp Cưới",
    description:
        "Thiệp cưới online của Long Vũ & Thu Hiền - Trân trọng kính mời quý khách đến chung vui cùng gia đình chúng tôi.",
    openGraph: {
        title: "Thiệp cưới Long Vũ & Thu Hiền",
        description:
            "Trân trọng kính mời bạn đến chung vui cùng gia đình chúng tôi.",
        url: "/",
        type: "website",
        images: [
            {
                url: "/images/v2.jpg",
                width: 1200,
                height: 630,
                alt: "Thiệp cưới Long Vũ & Thu Hiền",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Thiệp cưới Long Vũ & Thu Hiền",
        description:
            "Trân trọng kính mời bạn đến chung vui cùng gia đình chúng tôi.",
        images: ["/images/v2.jpg"],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#5e0a14",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className="font-body antialiased bg-wine">
                <div className="auto-scroll">
                    <div className="auto-scroll__content">{children}</div>
                </div>
            </body>
        </html>
    );
}
