import "./globals.css";

export const metadata = {
  title: "TODO_WEBSITE_DAY_SITE_TITLE",
  description: "TODO_WEBSITE_DAY_SITE_DESCRIPTION"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
