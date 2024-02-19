import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KidzWear - Kids Clothing Store',
  description:
    'KidzWear is a kids clothing store that offers affordable and stylish clothing for kids. We offer a wide range of kids clothing, including dresses, shirts, pants, and more. Shop now and get free shipping on orders over $50!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
