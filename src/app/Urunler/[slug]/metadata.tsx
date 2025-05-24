// src/app/Urunler/[slug]/metadata.tsx
import { getProductBySlug } from '@/lib/sanity';

// Tip tanımlamaları
interface Params {
  params: Promise<{ slug: string }>;
}

interface Product {
  title: string;
  description?: string;
}

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı | Thermo Lezzet Türkiye',
    };
  }
  
  return {
    title: `${product.title} | Thermo Lezzet Türkiye`,
    description: product.description,
  };
}