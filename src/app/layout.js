import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from '../context/CartContext';


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "Skills Tune-UP | ABST Training Official Website",
  description:
    "Skills Tune-UP provides professional ABST training programs designed to help students develop practical skills, enhance career opportunities, and achieve long-term success.",
  keywords: [
    "ABST training",
    "Skills Tune-UP",
    "career training",
    "professional development",
    "skill building",
  ],
  openGraph: {
    title: "Skills Tune-UP | ABST Training",
    description:
      "Join Skills Tune-UP to access high-quality ABST training programs that boost your skills and career potential.",
    url: "https://skills-tune-up-project.vercel.app/",
    siteName: "Skills Tune-UP",
    images: [
      {
        url: "https://skills-tune-up-project.vercel.app/_next/image?url=%2Fhero.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Skills Tune-UP ABST Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills Tune-UP | ABST Training",
    description:
      "Professional ABST training programs designed to enhance your skills and career development.",
    images: ["https://skills-tune-up-project.vercel.app/_next/image?url=%2Fhero.png&w=1920&q=75"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  font-sans antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
