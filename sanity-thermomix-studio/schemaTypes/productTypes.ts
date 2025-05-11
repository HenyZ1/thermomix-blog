import {defineArrayMember, defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Ürün',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ürün Adı',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
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
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'price',
      title: 'Fiyat',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
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
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galeri Görselleri',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternatif Metin',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Öne Çıkan Özellikler',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Teknik Özellikler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Özellik Adı',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Değer',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Thermomix', value: 'thermomix'},
          {title: 'Aksesuar', value: 'accessory'},
          {title: 'Yedek Parça', value: 'spare-part'},
          {title: 'Diğer', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan Ürün',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      const {title, media, price} = selection;
      return {
        title,
        subtitle: price ? `${price.toLocaleString('tr-TR')} ₺` : 'Fiyat belirtilmemiş',
        media,
      };
    },
  },
});