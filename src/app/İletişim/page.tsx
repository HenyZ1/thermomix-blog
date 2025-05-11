// src/app/İletişim/page.tsx (veya iletisim/page.tsx)
import ContactForm from '../components/ContactForm'; // Yol düzeltmesi
import PhoneWidget from '../components/PhoneWidget'; // Yol düzeltmesi
import { Container, Row, Col, Card } from 'react-bootstrap';

export const metadata = {
  title: 'İletişim | Thermomix Türkiye',
  description: 'Thermomix Türkiye ile iletişime geçin',
};

export default function ContactPage() {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">İletişim</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Thermomix ürünleri hakkında bilgi almak veya sipariş vermek için bize ulaşın.
        </p>
      </div>
      
      <Row>
        <Col lg={6} className="mb-5 mb-lg-0">
          <h2 className="h3 fw-bold mb-4">Bize Yazın</h2>
          <div className="glass-card p-4">
            <ContactForm />
          </div>
        </Col>
        
        <Col lg={6}>
          <div className="mb-5">
            <h2 className="h3 fw-bold mb-4">İletişim Bilgileri</h2>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Row className="gy-4">
                  <Col md={6}>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 text-primary">
                          <i className="bi bi-geo-alt fs-4"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold">Adres</h3>
                        <p className="text-muted mb-0">
                          Ataşehir İş Merkezi, D:10-11-12,<br />
                          Ataşehir/İstanbul, 34758
                        </p>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 text-primary">
                          <i className="bi bi-telephone fs-4"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold">Telefon</h3>
                        <p className="text-muted mb-0">
                          <a href="tel:+901234567890" className="text-decoration-none text-muted">+90 123 456 7890</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 text-primary">
                          <i className="bi bi-envelope fs-4"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold">E-Posta</h3>
                        <p className="text-muted mb-0">
                          <a href="mailto:info@thermomixturkiye.com" className="text-decoration-none text-muted">info@thermomixturkiye.com</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 text-primary">
                          <i className="bi bi-clock fs-4"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold">Çalışma Saatleri</h3>
                        <p className="text-muted mb-0">
                          Pazartesi - Cuma: 09:00 - 18:00<br />
                          Cumartesi: 10:00 - 14:00<br />
                          Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          
          {/* Harita */}
          <div>
            <h2 className="h3 fw-bold mb-4">Konum</h2>
            <div className="glass-card p-2 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1036676497!2d29.1183!3d40.9923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI4LjMiTiAyOcKwMDcnMDUuOSJF!5e0!3m2!1str!2str!4v1620741268395!5m2!1str!2str" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen={true} // boolean değere dönüştürdüm
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
      
      <PhoneWidget phoneNumber="+90 506 294 0969" />
    </>
  );
}