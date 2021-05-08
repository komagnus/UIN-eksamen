const subscribe = {
    name: 'subscribe',
    title: 'Abonner',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'E-post',
            type: 'string',
        }
    ],
    preview: {
        select: {
            name:'email',
            created: '_createdAt'
        },
        prepare({name,created}) {
            return{
                title: `E-post: ${name}`,
                subtitle: `Dato ${created ? new Date(created).toDateString() : null}`
            }
        }
    }
}
export default subscribe;