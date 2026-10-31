import "./globals.css";

export const metadata = {
  title: {
    default: "NEXCRAFT – Digital Agency",
    template: "%s | NEXCRAFT",
  },
  description: "Crafting Digital Experiences. Building What's Next.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
