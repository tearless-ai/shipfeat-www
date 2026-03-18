import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EarlyAccessProvider } from "@/components/EarlyAccessContext";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

export const metadata: Metadata = {
  title: "ShipFeat — Your users ask. AI ships.",
  description:
    "Drop a widget in your app. Users submit enhancement requests. AI reads your codebase, writes the code, opens a PR with a live preview. You just approve.",
  metadataBase: new URL("https://shipfeat.ai"),
  openGraph: {
    title: "ShipFeat — Your users ask. AI ships.",
    description:
      "Enhancement requests from your users turn into pull requests. Automatically.",
    url: "https://shipfeat.ai",
    siteName: "ShipFeat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipFeat — Your users ask. AI ships.",
    description:
      "Enhancement requests from your users turn into pull requests. Automatically.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-[#0B0F19] text-gray-100 antialiased"
        suppressHydrationWarning
      >
        <EarlyAccessProvider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <EarlyAccessModal />
        </EarlyAccessProvider>
      </body>
    </html>
  );
}
