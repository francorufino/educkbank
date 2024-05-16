import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Montserrat_Alternates, Kumbh_Sans } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { AccountProvider } from "./context/AccountContext";

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
        <body className={`flex text-dgray flex-col h-screen justify-between`}>
          <AuthProvider>
            <AccountProvider>
              <CartProvider>
                <section className={`h-500 ${gfkum.className} `}>
                  <Header />
                </section>
                <section
                  className={`container mx-auto px-9 h-500 max-w-screen-xl ${gfmon.className}`}
                >
                  {children}
                </section>
                <Footer className={`h-500 ${gfkum.className}`} />
                <Toaster position="top-center" reverseOrder={false} />
              </CartProvider>
            </AccountProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
