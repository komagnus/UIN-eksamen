
const Footer ={
    title: 'Footer',
  name: 'footer',
  type: 'document',

  fields: [
    {
      title: 'Footer_Ansatte',
      name: 'ansatte',
      type: 'string',
      description:'Navnet på de ansatte i bedriften'
    },
    {
        title: 'Footer_Kontaktinfo',
        name: 'kontaktinfo',
        type: 'string',
        description:'Kontaktinformasjon på bedriften'
    },
    {
        title: 'Footer_Navigation',
        name: 'nav',
        type: 'string',
        description:'Navigasjon i footer'
    } 
    ]
}

export default Footer