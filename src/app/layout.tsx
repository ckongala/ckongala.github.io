import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CKK | Tech & Digi Portfolio",
  description: "Software Engineer II at Nike. Specializing in cloud-native development, DevOps, microservices architecture, and full-stack development.",
  icons: {
    icon: '/img/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={0.7}
            outerScale={1.5}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: '#3b82f6',
              mixBlendMode: 'exclusion'
            }}
            outerStyle={{
              border: '3px solid #3b82f6',
              mixBlendMode: 'exclusion'
            }}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
            trailingSpeed={8}
          />
        </Providers>
      </body>
    </html>
  );
}
