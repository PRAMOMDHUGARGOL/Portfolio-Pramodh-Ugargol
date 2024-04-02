import "./globals.css";
import { poppinsStyle } from "./styles/font";

export const metadata = {
  title: "Portfolio | Pramodh Ugargol",
  description: "Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppinsStyle.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
