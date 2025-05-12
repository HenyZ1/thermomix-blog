import { getAllProducts } from '@/lib/sanity';
import ProductCard from '@/app/components/ProductCard';
import { Row, Col, Container, Button } from 'react-bootstrap';
import PhoneWidget from '@/app/components/PhoneWidget';

// Ürün için tip tanımlaması
interface Product {
  _id: string;
  title: string;
  description?: string;
  price: number;
  image?: {
    url: string;
  };
  slug: {
    current: string;
  };
}

export const metadata = {
  title: 'Ürünler | Thermomix Türkiye',
  description: 'Thermomix mutfak robotları ve aksesuarları',
};

export default async function ProductsPage() {
  // Sanity'den ürünleri çek
  let products = [];
  
  try {
    products = await getAllProducts();
    console.log("Çekilen ürünler:", JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Ürünler çekilirken hata oluştu:", error);
    products = [];
  }

  return (
    <>
      {/* Sayfa Başlığı */}
      <div className="product_title_top text-center ">
        <h1 className="display-5 fw-bold mb-3">Thermomix Ürünleri</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Mutfağınızı dönüştürecek Thermomix ürünleri ve aksesuarları ile tanışın.
        </p>
      </div>

      {/* Ürün Kategorileri */}
      <div className="product-categories glass-section mb-5 py-3">
        <Container>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button variant="light" className="category-btn active">
              Tüm Ürünler
            </Button>
            <Button variant="light" className="category-btn">
              Thermomix
            </Button>
          </div>
        </Container>
      </div>

      {/* Ürün Listesi */}
      {products && products.length > 0 ? (
        <Row>
          {products.map((product: Product) => (
            <Col key={product._id} md={6} lg={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="glass-card1 text-center py-5">
          <i className="bi bi-box fs-1 text-muted mb-3"></i>
          <p className="text-muted mb-0">Henüz ürün bulunmamaktadır.</p>
          <p className="text-muted small mt-2">Ürünlerimiz çok yakında burada olacak.</p>
        </div>
      )}

      {/* İletişim CTA */}
      <div className="my-5 glass-card1 cta-card1 p-5 text-center">
        <h2 className="h3 fw-bold mb-3">Thermomix Hakkında Bilgi Almak İster misiniz?</h2>
        <p className="text-muted mb-4">
          Thermomix'in mutfağınıza katacağı değeri keşfetmek için bizimle iletişime geçin.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button 
            href="/iletisim" 
            variant="success" 
            size="lg"
            className="px-4 py-3 fw-semibold rounded-pill"
          >
            <i className="bi bi-envelope me-2"></i> İletişim Formu
          </Button>
          <Button 
            as="a" 
            href="tel:+905062940969"
            variant="outline-success" 
            size="lg"
            className="px-4 py-3 rounded-pill"
          >
            <i className="bi bi-telephone-fill me-2"></i> Hemen Ara
          </Button>
        </div>
      </div>

      {/* Telefon Widget */}
      <PhoneWidget phoneNumber="+905062940969" />
    </>
  );
}