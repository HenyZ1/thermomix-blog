// components/Footer.jsx
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="position-relative pt-5 pb-4 mt-5 overflow-hidden">
      {/* Background elements */}
      <div className="bg-pattern position-absolute top-0 left-0 w-100 h-100 z-index-0"></div>
      <div className="blob-shape position-absolute" style={{top: '-100px', right: '-100px', opacity: '0.2'}}></div>
      <div className="blob-shape position-absolute" style={{bottom: '-150px', left: '-150px', opacity: '0.1'}}></div>
      
      <Container className="position-relative z-index-1">
        <div className="glass-card mb-5 border-0">
          <Row className="align-items-center">
            <Col lg={7} className="mb-4 mb-lg-0">
              <h3 className="text-gradient fw-bold mb-3">Mutfakta Devrim: Thermomix</h3>
              <p className="mb-0">
                Mutfağınızda bir asistan, bir şef ve bir dost. Thermomix ile tanışın ve mutfaktaki zamanınızı 
                keyifli ve verimli geçirin.
              </p>
            </Col>
            <Col lg={5} className="text-lg-end">
              <a href="https://wa.me/905062940969?text=Merhaba,%20bilgi%20almak%20istiyorum" className="btn btn-primary btn-hover-lift py-2 px-4 rounded-pill">
                <i className="bi bi-whatsapp me-2"></i>
                Hemen Bilgi Alın
              </a>
            </Col>
          </Row>
        </div>
        
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-4">
              <div className="feature-icon bg-gradient-primary text-white rounded-3 me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                <i className="bi bi-house-heart"></i>
              </div>
              <h3 className="h5 fw-bold mb-0 text-gradient">Thermo Lezzet Türkiye</h3>
            </div>
            <p className="mb-4">
              Thermomix, mutfaktaki iş yükünüzü azaltan, zamandan tasarruf ettiren ve sağlıklı yemekler hazırlamanıza 
              yardımcı olan çok fonksiyonlu bir mutfak robotudur.
            </p>
            
            <div className="d-flex gap-3 mb-3">
              <a target='blank' href="https://wa.me/905062940969?text=Merhaba,%20Thermomix%20hakkında%20bilgi%20almak%20istiyorum." className="btn-hover-lift" style={{
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <i className="bi bi-whatsapp"></i>
              </a>
              <a target='blank' href="https://www.instagram.com/aysenn_ylmazz/" className="btn-hover-lift" style={{
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h3 className="h5 fw-bold mb-4 text-gradient">Hızlı Linkler</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/" className="d-flex align-items-center text-decoration-none btn-hover-lift">
                  <i className="bi bi-chevron-right text-primary me-2"></i>
                  <span>Ana Sayfa</span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/Urunler" className="d-flex align-items-center text-decoration-none btn-hover-lift">
                  <i className="bi bi-chevron-right text-primary me-2"></i>
                  <span>Ürünler</span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/Blog" className="d-flex align-items-center text-decoration-none btn-hover-lift">
                  <i className="bi bi-chevron-right text-primary me-2"></i>
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="d-flex align-items-center text-decoration-none btn-hover-lift">
                  <i className="bi bi-chevron-right text-primary me-2"></i>
                  <span>İletişim</span>
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={5} md={6}>
            <h3 className="h5 fw-bold mb-4 text-gradient">İletişim</h3>
            <div className="glass-card mb-3 p-3 d-flex align-items-center">
              <div className="feature-icon bg-gradient-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <span>Manisa, Türkiye</span>
            </div>
            <div className="glass-card mb-3 p-3 d-flex align-items-center">
              <div className="feature-icon bg-gradient-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                <i className="bi bi-telephone"></i>
              </div>
              <span>+90 506 294 0969</span>
            </div>
            <div className="glass-card p-3 d-flex align-items-center">
              <div className="feature-icon bg-gradient-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                <i className="bi bi-envelope"></i>
              </div>
              <span>bahadrefeylmaz4@gmail.com</span>
            </div>
          </Col>
        </Row>
        
        <div className="text-center mt-5 pt-4 border-top">
          <p className="mb-0">&copy; {new Date().getFullYear()} Thermo Lezzet Türkiye. Tüm hakları saklıdır.</p>
          <p className="mb-0 ">Designed By <a target='blank' className='text-primary' href="https://www.linkedin.com/in/bahad%C4%B1r-y%C4%B1lmaz-a45851222/">Bahadır Efe Yılmaz</a></p> 
        </div>
      </Container>
    </footer>
  );
}