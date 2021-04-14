import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Articles from './documents/articles'
import MainArticles from './documents/mainPageArticles'
import MostRelevant from './documents/mostRelevant'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    //MainArticles,
  ]),
})
