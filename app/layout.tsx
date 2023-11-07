import '@/app/ui/global.css'
import { inter } from './fonts';


type Props = {  
    children: React.ReactNode;
  } 

export default function RootLayout({children}: Props ) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
