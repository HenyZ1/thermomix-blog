import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import BlogList from '@/app/components/BlogList';
import PhoneWidget from '@/app/components/PhoneWidget';
import { getLatestPosts } from '@/lib/sanity'; // Sanity client'tan getLatestPosts fonksiyonunu import ediyoruz

// Ana sayfa için metadata tanımlayalım
export const metadata = {
  title: 'Thermomix Türkiye - Mutfağınızın Yeni Teknolojisi',
  description: 'Thermomix ile mutfakta geçirdiğiniz zamanı keyifli ve verimli hale getirin.',
};

export default async function Home() {
  // Sanity'den son blog yazılarını çekelim (getLatestPosts fonksiyonu ile)
  const latestPosts = await getLatestPosts(3); // Son 3 blog yazısını getir
  
  return (
    <>
      {/* Hero Section */}
      <section className="glass-hero position-relative py-5 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern"></div>
        <Container className="py-5 position-relative">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="position-relative z-2">
                <span className="badge bg-success bg-opacity-10 text-success fs-6 mb-3 px-3 py-2">
                  Mutfağın Yeni Nesil Teknolojisi
                </span>
                <h1 className="display-4 fw-bold mb-4 text-gradient">
                  Mutfağınızın Yeni Yıldızı: <br/> Thermomix
                </h1>
                <p className="lead mb-4 text-dark-emphasis">
                  Tek bir cihazla yemek pişirme, karıştırma, doğrama, tartma ve daha fazlası. 
                  Thermomix ile mutfakta geçirdiğiniz zamanı keyifli ve verimli hale getirin.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Button 
                    href="/Urunler" 
                    variant="primary" 
                    size="lg"
                    className="fw-semibold px-4 py-3 rounded-pill btn-hover-lift"
                  >
                    <i className="bi bi-grid-3x3-gap-fill me-2"></i> Ürünleri Keşfet
                  </Button>
                  <Button 
                    href="/Blog" 
                    variant="outline-primary"
                    size="lg"
                    className="fw-semibold px-4 py-3 rounded-pill btn-hover-lift"
                  >
                    <i className="bi bi-journal-text me-2"></i> Blog'u Oku
                  </Button>
                </div>
                
                <div className="mt-5 d-flex align-items-center">
                  <div className="ms-3">
                    <div className="d-flex align-items-center text-warning">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p className="mb-0 small"><span className="fw-semibold">500+</span> mutlu müşteri</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="position-relative">
              <div className="iphone-mockup-wrapper position-relative ms-lg-5">
                <div className="blob-shape position-absolute"></div>
                <div className="iphone-frame-modern">
                  <div className="iphone-screen-modern">
                    <div className="thermomix-app-screen bg-white">
                      <div className="iphone-status-bar">
                        <div className="iphone-time">09:41</div>
                        <div className="iphone-icons">
                          <span><i className="bi bi-reception-4"></i></span>
                          <span><i className="bi bi-wifi"></i></span>
                          <span><i className="bi bi-battery-full"></i></span>
                        </div>
                      </div>
                      
                      {/* iPhone içeriği */}
                      <div className="iphone-content">
                        {/* Thermomix uygulaması ana ekranı */}
                        <div className="thermomix-app">
                          <div className="app-header">
                            <img 
                              src="/images/Thermo_Logo.png" 
                              alt="Thermomix Logo" 
                              className="app-logo" 
                            />
                            <h4 className="app-title">Thermomix</h4>
                          </div>
                          
                          <div className="app-content">
                            <img 
                              src="/images/Thermo_Kampanya.jpg" 
                              alt="Thermomix Uygulaması" 
                              className="app-screenshot" 
                            />
                          </div>
                          
                          <div className="app-buttons">
                            <button className="app-button">Keşfet</button>
                            <button className="app-button">Tarifler</button>
                          </div>
                        </div>
                        
                        {/* Sosyal medya ikonları */}
                        <div className="app-icons-row">
                          <div className="app-icon facebook">
                            <i className="bi bi-facebook"></i>
                          </div>
                          <div className="app-icon instagram">
                            <i className="bi bi-instagram"></i>
                          </div>
                          <div className="app-icon google">
                            <i className="bi bi-google"></i>
                          </div>
                          <div className="app-icon thermomix">
                            <img src="/images/Thermo_Logo2.webp" alt="Thermomix" />
                          </div>
                        </div>
                      </div>
                      
                      {/* iPhone dock */}
                      <div className="iphone-dock">
                        <div className="dock-icon phone">
                          <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="dock-icon messages">
                          <i className="bi bi-chat-fill"></i>
                        </div>
                        <div className="dock-icon safari">
                          <i className="bi bi-compass-fill"></i>
                        </div>
                        <div className="dock-icon music">
                          <i className="bi bi-music-note-beamed"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iphone-notch"></div>
                  <div className="iphone-buttons"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Öne Çıkan Özellikler */}
      <section className="my-5 py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="badge bg-success bg-opacity-10 text-success fs-6 mb-3 px-3 py-2">
              Neden Thermomix?
            </span>
            <h2 className="display-6 fw-bold text-gradient mb-4">
              Öne Çıkan Özellikler
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
              Thermomix, mutfakta geçirdiğiniz zamanı verimli ve keyifli hale getiren özellikleriyle öne çıkıyor.
            </p>
          </div>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="glass-card h-100 feature-card">
                <div className="feature-icon bg-success bg-opacity-10 text-success mb-4">
                  <i className="bi bi-clock"></i>
                </div>
                <h3 className="h4 mb-3">Zaman Tasarrufu</h3>
                <p className="text-muted mb-0">
                  Birden fazla işlemi tek bir cihazda yaparak mutfakta geçirdiğiniz zamanı azaltın.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="glass-card h-100 feature-card">
                <div className="feature-icon bg-success bg-opacity-10 text-success mb-4">
                  <i className="bi bi-book"></i>
                </div>
                <h3 className="h4 mb-3">Yüzlerce Tarif</h3>
                <p className="text-muted mb-0">
                  Entegre tarif platformuyla binlerce tarife anında erişim sağlayın.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="glass-card h-100 feature-card">
                <div className="feature-icon bg-success bg-opacity-10 text-success mb-4">
                  <i className="bi bi-gear"></i>
                </div>
                <h3 className="h4 mb-3">Çok Fonksiyonlu</h3>
                <p className="text-muted mb-0">
                  Doğrama, karıştırma, pişirme, tartma ve daha fazlası için tek cihaz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Son Blog Yazıları */}
      <section className="my-5 py-5 glass-section">
        <Container>
          <div className="text-center mb-5">
            <span className="badge bg-success bg-opacity-10 text-success fs-6 mb-3 px-3 py-2">
              Blog
            </span>
            <h2 className="display-6 fw-bold text-gradient mb-4">
              Son Yazılarımız
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
              Thermomix ile ilgili en son haberleri, tarifleri ve ipuçlarını keşfedin.
            </p>
          </div>
          
          {latestPosts.length > 0 ? (
            <BlogList posts={latestPosts} />
          ) : (
            <div className="text-center py-5 bg-light rounded">
              <p className="text-muted">Henüz blog yazısı bulunmamaktadır.</p>
            </div>
          )}
          
          <div className="text-center mt-5">
            <Button 
              href="/Blog" 
              variant="outline-primary"
              className="rounded-pill px-4 py-2 btn-hover-lift"
            >
              <i className="bi bi-arrow-right-circle me-2"></i> Tüm Yazıları Görüntüle
            </Button>
          </div>
        </Container>
      </section>

      {/* Çağrı Butonu */}
      <section className="my-5 cta-section">
        <Container>
          <div className="glass-card cta-card text-center p-5">
            <div className="position-relative z-2">
              <div className="cta-icon bg-white rounded-circle text-success mx-auto mb-4">
                <i className="bi bi-headset"></i>
              </div>
              <h2 className="display-5 fw-bold mb-3 text-gradient">Thermomix'i Keşfetmeye Hazır mısınız?</h2>
              <p className="lead mb-4">Bir Thermomix uzmanıyla görüşün ve tüm sorularınızı yanıtlayalım.</p>
              <Button 
                href="/iletisim" 
                variant="light" 
                size="lg" 
                className="rounded-pill fw-bold px-5 py-3 btn-hover-lift"
              >
                <i className="bi bi-chat-dots-fill me-2"></i> Hemen İletişime Geçin
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Telefon Widget */}
      <PhoneWidget phoneNumber="+90 506 294 0969" />
    </>
  );
}