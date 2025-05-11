// src/app/components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

// Ürün için tip tanımlaması
interface Product {
  title: string;
  description?: string;
  image?: {
    url: string;
  };
  slug: {
    current: string;
  };
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="glass-card overflow-hidden h-100 d-flex flex-column position-relative mb-4">
      <div className="position-relative" style={{ height: '250px' }}>
        <Image
          src={product.image?.url || '/images/placeholder.jpg'}
          alt={product.title}
          fill
          style={{objectFit: 'contain'}}
          className="p-3"
        />
      </div>
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="fs-5 fw-bold mb-2">
          <Link href={`/Urunler/${product.slug.current}`} className="text-dark text-decoration-none hover-text-primary">
            {product.title}
          </Link>
        </h3>
        <p className="text-muted mb-3 small" style={{minHeight: '40px'}}>
          {product.description && product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fs-4 fw-bold text-primary">
            {product.price.toLocaleString('tr-TR')} ₺
          </span>
          <Button 
            variant="primary"
            size="sm"
            href={`/Urunler/${product.slug.current}`}
          >
            Detaylar
          </Button>
        </div>
      </div>
    </div>
  );
}