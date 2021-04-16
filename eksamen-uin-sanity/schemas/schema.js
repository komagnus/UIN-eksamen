// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './documents/blockContent';
import Footer_ansatt from './documents/Footer_ansatt';
import Footer_kontakt from './documents/Footer_kontakt';
import Footer_navigasjon from './documents/Footer_navigasjon';
import post from './documents/post';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    Footer_ansatt,
    Footer_kontakt,
    Footer_navigasjon,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})