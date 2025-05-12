// src/app/Urunler/[slug]/page.tsx
"use client";
import Link from 'next/link';
import { getProductBySlug } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PhoneWidget from '@/app/components/PhoneWidget';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

// Tip tanımlamaları
interface Params {
  params: Promise<{ slug: string }>;
}

interface ProductImage {
  url: string;
}

interface Spec {
  name: string;
  value: string;
}

interface Product {
  title: string;
  description?: string;
  price: number;
  image?: ProductImage;
  galleryImages?: ProductImage[];
  features?: string[];
  specs?: Spec[];
  slug: {
    current: string;
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <>
      <Row className="product_title_top">
        {/* Ürün Görselleri */}
        <Col lg={6} className="mb-4 mb-lg-0">
          {/* Ana Görsel */}
          <div className="glass-card position-relative mb-4" style={{ height: '400px' }}>
            <img
              src={product.image?.url || '/images/Thermo_Logo.png'}
              alt={product.title}
              className="img-fluid product-detail-image p-4"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          
          {/* Galeri Görselleri */}
          {product.galleryImages && product.galleryImages.length > 0 && (
            <Row>
              {product.galleryImages.map((image: ProductImage, index: number) => (
                <Col key={index} xs={4}>
                  <div className="glass-card position-relative" style={{ height: '120px' }}>
                    <img
                      src={image.url}
                      alt={`${product.title} ${index + 1}`}
                      className="img-fluid product-gallery-image p-2"
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Col>
        
        {/* Ürün Bilgileri */}
        <Col lg={6}>
          <div className="glass-card p-4 h-100">
            <h1 className="h2 fw-bold mb-3">{product.title}</h1>
            
            <p className="text-muted mb-4">{product.description}</p>
            
            <div className="fs-2 fw-bold text-success mb-4">
              {product.price?.toLocaleString('tr-TR')} ₺
            </div>
            
            {/* Hızlı İletişim Butonları */}
            <div className="d-grid gap-3 d-md-flex mb-4">
              <Button 
                href="/https://wa.me/905062940969?text=Merhaba,%20ürüni%20satınk%20almak%20istiyorum" 
                variant="success" 
                className="px-4 py-2 fw-bold rounded-pill"
                size="lg"
              >
                <i className="bi bi-cart me-2"></i> Satın Alma Talebi
              </Button>
              <Button
                as="a"
                href={`tel:+905062940969`} 
                variant="outline-success"
                className="px-4 py-2 rounded-pill"
                size="lg"
              >
                <i className="bi bi-telephone me-2"></i> Hemen Ara
              </Button>
            </div>
            
            {/* Ürün Özellikleri */}
            {product.features && product.features.length > 0 && (
              <div className="mb-4">
                <h2 className="h4 fw-bold mb-3">Öne Çıkan Özellikler</h2>
                <ListGroup variant="flush" className="glass">
                  {product.features.map((feature: string, index: number) => (
                    <ListGroup.Item key={index} className="border-0 bg-transparent ps-0">
                      <div className="d-flex align-items-start">
                        <span className="text-success me-2">
                          <i className="bi bi-check-circle-fill"></i>
                        </span>
                        <span>{feature}</span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
            
            {/* Teknik Özellikler */}
            {product.specs && product.specs.length > 0 && (
              <div className="mb-4">
                <h2 className="h4 fw-bold mb-3">Teknik Özellikler</h2>
                <ListGroup variant="flush" className="glass">
                  {product.specs.map((spec: Spec, index: number) => (
                    <ListGroup.Item 
                      key={index} 
                      className={`d-flex justify-content-between align-items-center border-0 bg-transparent ${index % 2 === 0 ? 'bg-light bg-opacity-50' : ''}`}
                    >
                      <span className="fw-medium">{spec.name}</span>
                      <span className="text-muted">{spec.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
          </div>
        </Col>
      </Row>
      
      {/* Sipariş CTA */}
      <div className="mt-5 mb-4 glass-card cta-card p-5 text-center ">
        <h2 className="fw-bold mb-3">Sipariş Vermek İçin Hemen İletişime Geçin</h2>
        <p className="mb-4 mx-auto text-muted" style={{ maxWidth: '700px' }}>
          Thermomix ürünleri hakkında daha fazla bilgi almak ve sipariş vermek için müşteri temsilcilerimizle iletişime geçebilirsiniz.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button 
            href="/iletisim" 
            variant="success" 
            size="lg"
            className="fw-bold px-4 py-3 rounded-pill"
          >
            <i className="bi bi-envelope me-2"></i> İletişim Formu
          </Button>
          <Button 
            as="a" 
            href={`tel:+905062940969`} 
            variant="outline-success" 
            size="lg"
            className="px-4 py-3 rounded-pill d-flex align-items-center justify-content-center text-light"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            +90 506 294 0969
          </Button>
        </div>
      </div>
      
      <PhoneWidget phoneNumber="+905062940969" />
    </>
  );
}