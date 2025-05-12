// src/app/blog/page.tsx
import { getAllPosts } from '@/lib/sanity';
import BlogList from '@/app/components/BlogList';

export const metadata = {
  title: 'Blog | Thermomix Türkiye',
  description: 'Thermomix mutfak robotu ve yemek tarifleri hakkında en güncel bilgiler',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="blog_title text-center ">
        <h1 className="display-5 fw-bold mb-3">Ayşen Yılmaz Blog</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Thermomix ile mutfaktaki yolculuğunuzu kolaylaştıracak ipuçları, tarifler ve ilham verici içerikler.
        </p>
        <hr />
      </div>

      {posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <div className="text-center py-5 bg-light rounded">
          <p className="text-muted">Henüz blog yazısı bulunmamaktadır.</p>
        </div>
      )}
    </>
  );
}