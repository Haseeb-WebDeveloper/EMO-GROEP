"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Duradomi Logo"
              width={140}
              height={40}
              className="w-20"
            />
          </Link>

          {/* <div className="text-foreground/90">
            <p>Werkgebied: heel Nederland</p>
          </div> */}

          {/* Company Info */}
          <div className="text-foreground/90 space-y-2">
            <p>© 2025 Renodomi | KvK 94082286 | BTW NL866629191B01</p>
          </div>
          <div className="text-foreground/90">
            <p>Developed by
              <Link className="hover:underline hover:text-primary px-1" href="https://haseebkhan.online/" target="_blank" rel="noopener noreferrer">
                Haseeb Khan
              </Link>
              &
              <Link className="hover:underline hover:text-primary px-1" href="https://wasif-khan.netlify.app/" target="_blank" rel="noopener noreferrer">
                Wasif Ali
              </Link>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
} 