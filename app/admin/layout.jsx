import AdminNav from "@/components/AdminNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
        <AdminNav/>
        {children}
    </div>
  );
}
