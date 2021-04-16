// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
<<<<<<< HEAD

// We import object and document schemas
import blockContent from './blockContent';
import post from './post';
import author from './author';
=======
import blockContent from './documents/blockContent';
import post from './documents/post';
import author from './documents/author';
>>>>>>> main

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
<<<<<<< HEAD
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
=======
>>>>>>> main
    blockContent,
  ]),
})
