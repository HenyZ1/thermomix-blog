"use client";
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

interface Post {
  _id: string;
  title: string;
  slug?: {
    current?: string;
  };
  mainImage?: {
    url: string;
  };
  excerpt?: string;
  publishedAt: string;
}

interface BlogListProps {
  posts: Post[];
}

// Varsayılan görsel yolu
const DEFAULT_IMAGE = '/images/Thermo_Kampanya.jpg';

export default function BlogList({ posts }: BlogListProps) {
  // Güvenlik kontrolü
  if (!posts || !Array.isArray(posts)) {
    return (
      <Row>
        <Col>
          <div className="glass-card text-center py-4">
            <p className="text-muted mb-0">Blog yazıları yüklenirken bir hata oluştu.</p>
          </div>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      {posts.length > 0 ? (
        posts.map((post) => {
          // Post öğesinin geçerli olup olmadığını kontrol edelim
          if (!post || !post._id || !post.title) {
            return null; // Geçersiz post öğelerini atlayalım
          }

          // Slug kontrolü yapalım
          const slugPath = post.slug && post.slug.current ? `/Blog/${post.slug.current}` : '/Blog';

          return (
            <Col key={post._id} md={4} className="mb-4">
              <div className="glass-card h-100">
                <div className="position-relative mb-3" style={{ height: '180px' }}>
                  <div className="h-100 w-100 bg-light rounded d-flex align-items-center justify-content-center">
                    {post.mainImage?.url ? (
                      <img 
                        src={post.mainImage.url}
                        alt={post.title} 
                        className="img-fluid rounded" 
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                      />
                    ) : (
                      <img 
                        src={DEFAULT_IMAGE}
                        alt={post.title} 
                        className="img-fluid rounded" 
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
                <div className="text-muted small mb-2">
                  {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <h5 className="mb-2">
                  <Link href={slugPath} className="text-decoration-none text-dark">
                    {post.title}
                  </Link>
                </h5>
                <p className="text-muted small">{post.excerpt || 'İçerik özeti bulunmuyor.'}</p>
                <div className="mt-auto">
                  <Link href={slugPath} className="text-primary text-decoration-none">
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </Col>
          );
        })
      ) : (
        <Col>
          <div className="glass-card text-center py-4">
            <p className="text-muted mb-0">Henüz blog yazısı bulunmamaktadır.</p>
          </div>
        </Col>
      )}
    </Row>
  );
}