import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

// Sitenin detaylı metadata ayarları
export const metadata: Metadata = {
  // Site URL ayarı (deploy sonrası güncellenmeli)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  
  // Temel bilgiler
  title: {
    default: 'Thermomix Türkiye | Resmi Satış Danışmanı - Ayşen Yılmaz',
    template: '%s | Thermomix Türkiye'
  },
  description: 'Thermomix TM6 resmi satış danışmanı Ayşen Yılmaz. Mutfağınızın yeni yıldızı Thermomix ile tanışın. Ücretsiz demo, uygun fiyat ve taksit seçenekleri. İstanbul\'da hizmet vermekteyiz.',
  
  // Anahtar kelimeler - SEO için önemli
  keywords: [
    'Thermomix',
    'Thermomix TM6',
    'Thermomix Türkiye',
    'Thermomix satış',
    'Thermomix fiyat',
    'mutfak robotu',
    'yemek makinesi',
    'Thermomix Istanbul',
    'Thermomix demo',
    'Thermomix tarif',
    'Ayşen Yılmaz'
  ],
  
  // Yazar bilgisi
  authors: [{ name: 'Ayşen Yılmaz' }],
  creator: 'Ayşen Yılmaz',
  publisher: 'Thermomix Türkiye',
  
  // Robot ayarları
  robots: {
    index: true,
    follow: true,
  },
  
  // Open Graph (Facebook, LinkedIn) meta tagları
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Thermomix Türkiye',
    title: 'Thermomix Türkiye | Resmi Satış Danışmanı',
    description: 'Mutfağınızın yeni yıldızı Thermomix TM6 ile tanışın. Ücretsiz demo ve uygun fiyat seçenekleri.',
    images: [
      {
        url: '/images/thermomix-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM6 Mutfak Robotu',
      }
    ],
  },
  
  // Twitter Card meta tagları
  twitter: {
    card: 'summary_large_image',
    site: '@thermomixtr',
    creator: '@aysenyilmaz',
    title: 'Thermomix Türkiye | Resmi Satış Danışmanı',
    description: 'Mutfağınızın yeni yıldızı Thermomix TM6 ile tanışın. Ücretsiz demo ve uygun fiyat seçenekleri.',
    images: ['/images/thermomix-twitter-card.jpg'],
  },
  
  // Ek meta tagları
  other: {
    // PWA meta tagları
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
    
    // Genel meta taglar
    'theme-color': '#198754',
    'color-scheme': 'light',
  },
};

// JSON-LD Structured Data (SEO için çok önemli)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Thermomix Türkiye - Ayşen Yılmaz',
  description: 'Thermomix TM6 resmi satış danışmanı',
  url: 'https://thermomixturkiye.com',
  telephone: '+905062940969',
  email: 'info@thermomixturkiye.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ataşehir İş Merkezi, D:10-11-12',
    addressLocality: 'Ataşehir',
    addressRegion: 'İstanbul',
    postalCode: '34758',
    addressCountry: 'TR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.9923,
    longitude: 29.1183
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00'
    }
  ],
  priceRange: '₺₺₺',
  image: '/images/thermomix-store.jpg',
  sameAs: [
    'https://www.facebook.com/thermomixturkiye',
    'https://www.instagram.com/thermomixturkiye',
    'https://www.youtube.com/thermomixturkiye'
  ]
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Ek font ve stil optimizasyonları */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon ve app ikonları */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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