import PoppinsFont from "@/utils/PoppinsFont";
import "./globals.css";

export const metadata = {
  title: "TEDxIPSA Indore",
  description: "TEDxIPSA Indore event at IPS Academy, Indore, Madhya Pradesh, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body className="selection:bg-red selection:text-white">{children}</body>
    </html>
  );
}
