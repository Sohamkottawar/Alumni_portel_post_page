import { Poppins } from "next/font/google";

// components
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import BottomBar from "@/components/layout/BottomBar";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#FAFAFA] min-h-screen">
          <Navbar />

          {/* Sidebar */}
          <div className="flex">
            <div className="md:min-w-[20rem] md:flex flex-col min-h-screen bg-white hidden">
              <Sidebar />
            </div>
            {/* bottom bar  */}
            <BottomBar />

            <div className="flex-1">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
