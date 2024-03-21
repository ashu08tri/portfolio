import { Inter } from "next/font/google";
import "./globals.css";

import AnimateWrapper from "./components/AnimateWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Ashutosh Tripathi: FrontEnd Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimateWrapper children={children} />
        </body>
    </html>
  );
}
