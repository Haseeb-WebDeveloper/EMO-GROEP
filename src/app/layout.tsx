import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactPopupProvider } from "@/components/providers/contact-popup-provider";
import SmoothScrolling from "@/components/smooth-scrolling";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emw-groep.nl"),
  title: {
    default: "EMW Groep | Energielabel & Duurzaamheidsadvies",
    template: "%s | EMW Groep",
  },
  description:
    "EMW Groep biedt professionele diensten voor energielabels, NEN 2580 meetrapporten, WWS puntentelling en duurzaamheidsadvies. Maak uw woning energiezuinig en verhoog de waarde.",
  keywords: [
    "energielabel",
    "NEN 2580",
    "WWS puntentelling",
    "duurzaamheidsadvies",
    "isolatieadvies",
    "verkoopklaar maken woning",
    "energiezuinig",
    "duurzaam wonen",
    "woningwaarde",
    "energiebesparing",
  ],
  authors: [{ name: "EMW Groep" }],
  creator: "EMW Groep",
  publisher: "EMW Groep",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://emw-groep.nl",
    siteName: "EMW Groep",
    title: "EMW Groep | Energielabel & Duurzaamheidsadvies",
    description:
      "EMW Groep biedt professionele diensten voor energielabels, NEN 2580 meetrapporten, WWS puntentelling en duurzaamheidsadvies. Maak uw woning energiezuinig en verhoog de waarde.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EMW Groep - Energielabel & Duurzaamheidsadvies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMW Groep | Energielabel & Duurzaamheidsadvies",
    description:
      "EMW Groep biedt professionele diensten voor energielabels, NEN 2580 meetrapporten, WWS puntentelling en duurzaamheidsadvies.",
    images: ["/logo.jpg"],
    creator: "@emwgroep",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  alternates: {
    canonical: "https://emw-groep.nl",
    languages: {
      "nl-NL": "https://emw-groep.nl",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} body`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta name="google-site-verification" content="KTIrD1tKvxTnnR2CZg0TSFbMUsRcV7QhLOJZVjtOCW4" /> */}

        {/* Google Tag (gtag.js) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTXBG1FJX6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag("config", "G-XTXBG1FJX6");
            `,
          }}
        /> */}

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EMW Groep",
              url: "https://emw-groep.nl",
              logo: "https://emw-groep.nl/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31647198116",
                contactType: "customer service",
                email: "info@emw-groep.nl",
                availableLanguage: ["Dutch"],
              },
              sameAs: [
                "https://www.facebook.com/emwgroep",
                "https://www.linkedin.com/company/emw-groep",
                "https://twitter.com/emwgroep",
              ],
            }),
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
            <SmoothScrolling>
              <Header />
              {children}
            </SmoothScrolling>
            <Footer />
          </ContactPopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
