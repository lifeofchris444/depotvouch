import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Home Depot Method",
  description: "Discover how to claim $750 in Home Depot rewards with our simple method. Join thousands of homeowners already saving on tools, appliances, and home improvement essentials.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    title: "Home Depot Method",
    description: "Claim $750 in Home Depot rewards with our simple method.",
    siteName: "Home Depot Method",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Depot Method",
    description: "Claim $750 in Home Depot rewards with our simple method.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
