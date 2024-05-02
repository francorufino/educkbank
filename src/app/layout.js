import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Montserrat_Alternates, Kumbh_Sans } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

const gfkum = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable: "--font-gfbal"
});

const gfmon = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable: "--font-gfmon"
});

export const metadata = {
  title: "Create Next App",
  description:
    "EDuck Bank is a bank that came to change their clients's experience with banks",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`flex flex-col h-screen justify-between`}>
          <AuthProvider>
            <CartProvider>
              <div className={`h-500 ${gfkum.className} `}>
                <Header />
              </div>
              <div
                className={`container mx-auto px-9 h-500 max-w-screen-xl ${gfmon.className}`}
              >
                {children}
              </div>
              <Footer className={`h-500 ${gfkum.className}`} />
            </CartProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
