import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/newHeader/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booksey",
  description: "Buy newest books and find some fine deals !",
};

export default function RootLayout({ modal, children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen flex flex-col bg-gradient-to-r font-serif">
        <Header />

        <main className="flex-grow mt-[52px]">
          {children}
          {modal}
        </main>
        <Footer />
      </body>
    </html>
  );
}
