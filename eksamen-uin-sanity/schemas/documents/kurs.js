export default {
    name: 'kurs',
    title: 'Kurs',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tittel',
        type: 'string',
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
        name: 'kursImage',
        title: 'Kurs bilde',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'previewBeskrivelse',
        title: 'Preview Beskrivelse',
        type: 'string',
      },
      {
        name: 'beskrivelse',
        title: 'Beskrivelse',
        type: 'blockContent',
      },
      {
        name: 'adresse',
        title: 'Full adresse med gatenavn, postnummer og poststed.',
        type: 'string',
      },
      {
        name: 'url',
        title: 'Link til kurs',
        type: 'url'
      },
      {
          name: 'dato',
          title: 'Startdato kurs',
          type: 'date',
      },
      {
        name: 'prisgratis',
        title: 'Pris om gratis',
        type: 'boolean',
      },
      {
          name: 'pris',
          title: 'Pris i kr (om gratis, skriv "gratis")',
          type: 'string',
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
    },
  }
  