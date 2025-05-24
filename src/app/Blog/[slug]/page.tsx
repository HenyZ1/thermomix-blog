import { getPostBySlug } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import BlogPost from '@/app/components/BlogPost';
import { Row, Col } from 'react-bootstrap';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | Thermo Lezzet Türkiye',
    };
  }
  
  return {
    title: `${post.title} | Thermo Lezzet Türkiye Blog`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="blog-post-container py-4"> {/* Ekstra padding ekledik */}
      <Row>
        <Col lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
          <BlogPost post={post} />
        </Col>
      </Row>
    </div>
  );
}