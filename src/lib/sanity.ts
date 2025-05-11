import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ugxlpgbg', // Sanity Dashboard'dan alınız
  dataset: 'production',
  apiVersion: '2025-05-03',
  useCdn: process.env.NODE_ENV === 'production',
});

// Resim URL oluşturucu
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Blog yazıları için sorgular
export async function getAllPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "mainImage": mainImage {
        "url": asset->url
      },
      publishedAt
    }`
  );
}

// Blog yazıları için son yazıları getiren sorgu
// Ana sayfada gösterilmek istenen yazıları filtreleyen bir seçenek ekleyelim
export async function getLatestPosts(limit = 3, onlyShowOnHomepage = true) {
  let query = `*[_type == "post"`;
  
  // Eğer sadece ana sayfada gösterilecek yazıları istiyorsak, filtreleme ekleyelim
  if (onlyShowOnHomepage) {
    query += ` && (showOnHomepage == true || !defined(showOnHomepage))`;
  }
  
  query += `] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage {
      "url": asset->url
    },
    publishedAt
  }`;
  
  return await client.fetch(query);
}

export async function getPostBySlug(slug: string) {
  const result = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      excerpt,
      "mainImage": mainImage {
        "url": asset->url
      },
      publishedAt,
      "author": author-> {
        name,
        "image": image {
          "url": asset->url
        }
      }
    }`,
    { slug }
  );
  
  return result;
}

// Ürünler için sorgular
export async function getAllProducts() {
  const products = await client.fetch(
    `*[_type == "product"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      price,
      "image": image {
        "url": asset->url
      }
    }`
  );
  console.log('Çekilen ürünler:', products); // Terminalde kontrol edin
  return products;
}

export async function getProductBySlug(slug: string) {
  const result = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      price,
      features,
      specs,
      "image": image {
        "url": asset->url
      },
      "galleryImages": galleryImages[] {
        "url": asset->url
      }
    }`,
    { slug }
  );
  
  return result;
}