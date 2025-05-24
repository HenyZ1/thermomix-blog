import ContactForm from '../components/ContactForm';
import PhoneWidget from '../components/PhoneWidget';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const metadata = {
  title: 'İletişim | Thermo Lezzet Türkiye',
  description: 'Thermo Lezzet - Ayşen Yılmaz ile iletişime geçin',
};

export default function ContactPage() {
  return (
    <>
      {/* Sayfa Başlığı */}
      <div className="text-center product_title_top">
        <h1 className="display-5 fw-bold mb-3">İletişime Geçin</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Thermomix dünyasını keşfetmek ve size en uygun çözümü bulmak için bize ulaşın.
        </p>
      </div>
      
      <Row>
        {/* İletişim Formu */}
        <Col lg={6} className="mb-5 mb-lg-0">
          <div className="glass-card h-100 p-5">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="contact-icon text-success">
                  <i className="bi bi-chat-dots-fill"></i>
                </div>
                <h2 className="h3 fw-bold ms-3 mb-0">Mesaj Gönderin</h2>
              </div>
              <p className="text-muted">
                Sorularınız için bize ulaşın, en kısa sürede dönüş yapalım.
              </p>
            </div>
            <ContactForm />
          </div>
        </Col>
        
        {/* İletişim Bilgileri */}
        <Col lg={6}>
          {/* İletişim Detayları */}
          <div className="glass-card p-5 mb-4">
            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon text-success">
                <i className="bi bi-info-circle-fill"></i>
              </div>
              <h2 className="h3 fw-bold ms-3 mb-0">İletişim Bilgileri</h2>
            </div>
            
            <Row className="gy-4">
              <Col md={6}>
                <div className="contact-info-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="info-icon bg-success bg-opacity-10 text-success">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-1">Adres</h3>
                      <p className="text-muted small mb-0">
                        Manisa,Türkiye<br />
                        Manisa, Merkez
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              
              <Col md={6}>
                <div className="contact-info-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="info-icon bg-success bg-opacity-10 text-success">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-1">Telefon</h3>
                      <p className="mb-0">
                        <a href="tel:+905062940969" className="text-success text-decoration-none fw-semibold">+90 506 294 0969</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              
              <Col md={6}>
                <div className="contact-info-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="info-icon bg-success bg-opacity-10 text-success">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-1">E-Posta</h3>
                      <p className="mb-0">
                        <a href="mailto:bahadrefeylmaz4@gmail.com" className="text-success text-decoration-none fw-semibold">bahadrefeylmaz4@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              
              <Col md={6}>
                <div className="contact-info-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="info-icon bg-success bg-opacity-10 text-success">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-1">Çalışma Saatleri</h3>
                      <p className="text-muted small mb-0">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 10:00 - 14:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Sosyal Medya */}
          <div className="glass-card p-4 mb-4">
            <h3 className="h5 fw-bold mb-3">Sosyal Medya</h3>
            <div className="d-flex gap-3">
              <a href="https://www.instagram.com/aysenn_ylmazz/" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://wa.me/905062940969?text=Merhaba,%20Thermomix%20hakkında%20bilgi%20almak%20istiyorum." className="social-link">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Hızlı İletişim */}
          <div className="quick-contact-card glass-card p-4">
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h3 className="h5 fw-bold mb-2">Hemen Arayın</h3>
                <p className="text-muted small mb-0">
                  Thermomix uzmanlarımız sorularınızı yanıtlamak için hazır.
                </p>
              </div>
              <div className="ms-3">
                <a href="tel:+905062940969" className="btn btn-success btn-lg rounded-pill">
                  <i className="bi bi-telephone-fill me-2"></i> Ara
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Harita */}
      <div className="mt-5">
        <h2 className="h3 fw-bold text-center mb-4">Bizi Ziyaret Edin</h2>
        <div className="glass-card p-3 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d779.4218158170546!2d27.382965559121374!3d38.61006780452937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1747059541240!5m2!1str!2str" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded map-frame"
          ></iframe>
        </div>
      </div>
      
      {/* CTA Bölümü */}
      <div className="my-5 text-center">
        <div className="glass-card cta-card p-5">
          <h2 className="h3 fw-bold mb-3">Thermomix Deneyimine Hazır mısınız?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Size en uygun Thermomix modelini belirlemek ve özel fırsatlardan yararlanmak için hemen bizimle iletişime geçin.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a href="#form" className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-semibold">
              <i className="bi bi-envelope-fill me-2"></i> Form Doldur
            </a>
            <a href="https://wa.me/905062940969" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-semibold">
              <i className="bi bi-whatsapp me-2"></i> WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </div>
      
      <PhoneWidget phoneNumber="+90 506 294 0969" />
    </>
  );
}