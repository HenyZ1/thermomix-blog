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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://thermolezzet.com'),
  
  // Temel bilgiler
  title: {
    default: 'Thermo Lezzet Türkiye | Resmi Satış Danışmanı - Ayşen Yılmaz',
    template: '%s | Thermo Lezzet Türkiye'
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
  publisher: 'Thermo Lezzet',
  
  // Robot ayarları
  robots: {
    index: true,
    follow: true,
  },
  
  // Open Graph (Facebook, LinkedIn) meta tagları
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Thermo Lezzet | Resmi Satış Danışmanı',
    title: 'Thermo Lezzet  | Resmi Satış Danışmanı',
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
    title: 'Thermo Lezzet | Resmi Satış Danışmanı',
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
  name: 'Thermo Lezzet - Ayşen Yılmaz',
  description: 'Thermomix TM6 resmi satış danışmanı',
  url: 'https://thermolezzet.com',
  telephone: '+905062940969',
  email: 'bahadrefelymaz4@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Manisa, Türkiye',
    addressLocality: 'Manisa',
    addressRegion: 'Türkiye',
    postalCode: '45000',
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

        {/* Favicon ve Uygulama İkonları */}
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-96x96.png" sizes="96x96" />
        
        {/* Apple Touch Icon'lar (farklı boyutlar için) */}
        <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-icon-precomposed.png" />
        
        {/* Android ve PWA İkonları */}
        <link rel="icon" sizes="36x36" href="/icons/android-icon-36x36.png" />
        <link rel="icon" sizes="48x48" href="/icons/android-icon-48x48.png" />
        <link rel="icon" sizes="72x72" href="/icons/android-icon-72x72.png" />
        <link rel="icon" sizes="96x96" href="/icons/android-icon-96x96.png" />
        <link rel="icon" sizes="144x144" href="/icons/android-icon-144x144.png" />
        <link rel="icon" sizes="192x192" href="/icons/android-icon-192x192.png" />
        
        {/* Microsoft İkonları (Windows PWA desteği) */}
        <link rel="icon" sizes="70x70" href="/icons/ms-icon-70x70.png" />
        <link rel="icon" sizes="150x150" href="/icons/ms-icon-150x150.png" />
        <link rel="icon" sizes="310x310" href="/icons/ms-icon-310x310.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/icons/manifest.json" />
        
        {/* Browserconfig.xml (IE ve Microsoft PWA için) */}
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        
        {/* PWA için ek meta tag'lar */}
        <meta name="theme-color" content="#198754" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
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
