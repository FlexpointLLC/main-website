// External Dependencies
import { Inter } from "next/font/google";

// Internal Dependencies
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalProvider from "@/components/global/global-providers/global-provider";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Flexpoint",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
