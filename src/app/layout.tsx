import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Virgin Atlantic | Front End Coding Test",
  description: "Created by Virgin Atlantic Digital Team",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-gb">
      <body>
        <header>
          <div className={`wrapper`}>
            <Link href="/">
              <Image
                src="/vah-logo.svg"
                alt="Virgin Atlantic Holidays logo"
                width={130}
                height={50}
                priority={true}
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
