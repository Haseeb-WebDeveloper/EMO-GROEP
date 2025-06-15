import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactPopupProvider } from "@/components/providers/contact-popup-provider";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Sustainable Energy Labels. Practical Advice. Smarter Homes.",
  description:
    "We assess your home’s energy performance and deliver custom solutions in insulation, installations & consumption. Get a greener home — faster, easier, tailored to you.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} body`}>
      <head>
        <meta
          name="google-site-verification"
          content="KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4"
        />
        
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTXBG1FJX6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag("config", "G-XTXBG1FJX6");
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ContactPopupProvider>
            <Header />
            {children}
            <Footer />
          </ContactPopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
