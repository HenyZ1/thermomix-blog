import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Başlık',
      description: 'Blog yazısının başlığı',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL için slug formatı (SEO dostu URL)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Özet',
      description: 'Bu blog yazısı için kısa bir özet (liste görünümünde gösterilir)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Yazar',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Ana Görsel',
      description: 'Blog yazısı için ana görsel',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Görsel için alternatif metin (SEO için önemli)',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Kategoriler',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Yayınlanma Tarihi',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'İçerik',
    }),
    // İçeriğin hem blog sayfasında hem de anasayfada gösterilmesi için bir alan ekleyelim
    defineField({
      name: 'showOnHomepage',
      type: 'boolean',
      title: 'Ana Sayfada Göster',
      description: 'Bu yazı ana sayfadaki "Son Yazılarımız" bölümünde gösterilsin mi?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})