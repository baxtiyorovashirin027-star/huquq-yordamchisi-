import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"HuquqYordam — huquqiy xizmatlar", description:"O‘zbekiston fuqarolari uchun huquqiy xizmatlar va ariza tayyorlash." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}
