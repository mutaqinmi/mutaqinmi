import { montserrat } from './fonts';
import './globals.css';

export const metadata = {
  title: 'Muhammad Ilham Mutaqin',
  description: "Hi, everyone! I'm Muhammad Ilham Mutaqin a web developer.",
  keywords: 'ilham, Ilham, Muhammad Ilham, Muhammad ilham, muhammad Ilham, muhammad ilham, Muhammad Ilham Mutaqin, Muhammad ilham mutaqin, muhammad Ilham mutaqin, muhammad ilham Mutaqin, Muhammad Ilham mutaqin, muhammad Ilham Mutaqin, muhammad Ilham mutaqin, Muhammad ilham Mutaqin, muhammad ilham mutaqin, mutaqin, Mutaqin, mutaqinmi, Mutaqinmi',
  author: 'Muhammad Ilham Mutaqin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`snap-y snap-mandatory ${montserrat.className}`}>
      <body>{children}</body>
    </html>
  )
}
