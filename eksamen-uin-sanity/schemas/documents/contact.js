const contact = {
    name: 'contact',
    title: 'Kontakt',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Overskrift',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Innhold',
            type: 'text',
        }
    ],
    preview: {
        select: {
            name:'title',
            created: '_createdAt'
        },
        prepare({name,created}) {
            return{
                title: `Tittel: ${name}`,
                subtitle: `Dato ${created ? new Date(created).toDateString() : null}`
            }
        }
    }
}
export default contact;