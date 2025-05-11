import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
      description: 'Blog yazısı için kısa bir özet (liste görünümlerinde gösterilir)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'author',
      title: 'Yazar',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'İsim',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Resim',
          type: 'image',
          options: {
            hotspot: true,
          },
        })
      ]
    }),
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
        })
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Kategoriler',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        })
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Başlık',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternatif metin',
            })
          ]
        })
      ],
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Ana Sayfada Göster',
      type: 'boolean',
      description: 'Bu yazıyı ana sayfada göstermek istiyorsanız işaretleyin',
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
      return {...selection, subtitle: author && `Yazar: ${author}`}
    },
  },
})