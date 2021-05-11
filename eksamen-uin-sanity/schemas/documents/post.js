export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'ledetekst',
        title: 'Ledetekst',
        type: 'string',
      },
      {
  
        name: "typeartikkel",
        title: "Typeartikkel",
        type: "string",
        options: {
        list: [
        { value: "Nyheter", title: "Nyheter"},
        { value: "Tutorials", title: "Tutorials"},
        { value: "Tips/tricks", title: "Tips/tricks"},
        { value: "Helse", title: "Helse"},
        { value: "Profflag", title: "Profflag"},
        { value: "Inspirasjon", title: "Inspirasjon"},
        ],
        },
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
  
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'featured',
        title: 'Featured, remeber to undo current featured article befor choosing new.',
        type: 'boolean'
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
    },
  }
  