export const metadata = {
  title: 'Website Replica',
  description: 'Next.js replica shell for z2c.activ8.digital',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
