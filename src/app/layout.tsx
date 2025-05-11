// src/app/layout.tsx
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Thermomix Blog ve Satış',
  description: 'Thermomix mutfak robotu hakkında bilgiler ve satış',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 py-4">
          <Container>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}