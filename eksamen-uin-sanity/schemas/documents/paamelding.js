const paamelding = {
    name: 'paamelding',
    title: 'Påmelding kurs',
    type: 'document',
    fields: [
        {
            name: 'kursnavn',
            title: 'Kurs:',
            type: 'string',
        },
        {
            name: 'epost',
            title: 'Epost',
            type: 'string',
        },
        {
            name: 'tlf',
            title: 'Telefon',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
        }
    ],
    preview: {
        select: {
            name:'epost',
            created: '_createdAt'
        },
        prepare({name,created}) {
            return{
                title: `${name}`,
                subtitle: `Dato: ${created ? new Date(created).toDateString() : null}`
            }
        }
    }
}
export default paamelding;