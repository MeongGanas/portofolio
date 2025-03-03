import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
    title: "Farrel Jaohari",
    description: "Farrel Jaohari's portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${outfit.className} transition-colors duration-500`}
            >
                <Navbar />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
