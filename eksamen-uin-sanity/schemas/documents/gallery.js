export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description:'Navn på bilde'
        },
        {
            title: 'beskrivelse',
            name: 'beskrivelse',
            type: 'string',
            description:'Beskrivelse av bildet'
        } 
    ]
    }


