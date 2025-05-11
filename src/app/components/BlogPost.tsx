import Image from 'next/image';
import { PortableText, PortableTextReactComponents, PortableTextComponentProps, PortableTextMarkComponentProps } from '@portabletext/react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactNode } from 'react';

// Tip tanımlamaları
interface Author {
  name: string;
  image?: {
    url: string;
  };
}

interface Post {
  title: string;
  author: Author;
  publishedAt: string;
  mainImage?: {
    url: string;
  };
  body: any; // Sanity içerik tipi için
}

interface BlogPostProps {
  post: Post;
}

// Varsayılan görsel için placeholder - değiştirildi
const DEFAULT_AUTHOR_IMG = '/images/Thermo_Logo.png'; // Daha iyi bir default avatar
const DEFAULT_POST_IMG = '/images/Thermo_Kampanya.jpg';

// Portable Text bileşenlerini özelleştirme
const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: PortableTextComponentProps<any>) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="position-relative w-100 my-4" style={{ height: '400px' }}>
          {value.url ? (
            <img
              src={value.url}
              alt={value.alt || ' '}
              className="rounded img-fluid"
              style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '400px'}}
            />
          ) : (
            <div className="bg-light rounded d-flex align-items-center justify-content-center h-100">
              <span className="text-muted">Görsel Bulunamadı</span>
            </div>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<any>) => {
      const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value?.href || '#'} rel={rel} className="text-primary text-decoration-none">
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: PortableTextComponentProps<any>) => (
      <h1 className="h2 fw-bold mt-4 mb-3">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<any>) => (
      <h2 className="h3 fw-bold mt-4 mb-3">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<any>) => (
      <h3 className="h4 fw-bold mt-3 mb-2">{children}</h3>
    ),
    normal: ({ children }: PortableTextComponentProps<any>) => (
      <p className="mb-3">{children}</p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<any>) => (
      <blockquote className="border-start border-3 border-primary ps-3 my-4 fst-italic text-muted">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="ps-4 mb-4">{children}</ul>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <ol className="ps-4 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <li className="mb-1">{children}</li>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <li className="mb-1">{children}</li>
    ),
  },
};

// BlogPost bileşeni 
export default function BlogPost({ post }: BlogPostProps) {
  // Null kontrolü
  if (!post) {
    return <div>İçerik yüklenemedi.</div>;
  }

  // Yazar adı ve tarihi formatla
  const authorName = post.author?.name || 'İsimsiz Yazar';
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <article className="blog-content "> {/* Margin top eklendi */}
      <header className="mb-5">
        <h1 className="display-5 fw-bold mb-3">{post.title}</h1>
        <div className="d-flex align-items-center text-muted mb-4">
          <div className="d-flex align-items-center me-4">
            {/* Avatar görünümü iyileştirildi */}
            <div className="avatar-wrapper me-2" 
                 style={{ 
                   width: '45px', 
                   height: '45px', 
                   borderRadius: '50%', 
                   overflow: 'hidden',
                   backgroundColor: '#f8f9fa', 
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   border: '2px solid #e9ecef'
                 }}>
              <img
                src={post.author?.image?.url || DEFAULT_AUTHOR_IMG}
                alt={authorName}
                style={{
                  objectFit: 'cover', 
                  width: '100%', 
                  height: '100%'
                }}
              />
            </div>
            <span className="fw-semibold">{authorName}</span>
          </div>
          <div className="text-secondary">
            <i className="bi bi-calendar3 me-1"></i> {formattedDate}
          </div>
        </div>
        
        <div className="position-relative rounded overflow-hidden mb-5" style={{ height: '450px' }}>
          {/* Blog görseli - yüksekliği artırıldı */}
          <img
            src={post.mainImage?.url || DEFAULT_POST_IMG}
            alt={post.title}
            className="img-fluid w-100 h-100"
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            loading="lazy"
          />
        </div>
      </header>

      <div className="blog-content">
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          <p className="text-muted">İçerik bulunamadı.</p>
        )}
      </div>
    </article>
  );
}