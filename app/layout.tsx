import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Mạnh Cường & Thanh Thúy | Thiệp Cưới",
    description:
        "Thiệp cưới online của Mạnh Cường & Thanh Thúy - Trân trọng kính mời quý khách đến chung vui cùng gia đình chúng tôi.",
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
