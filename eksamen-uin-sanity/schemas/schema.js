import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './documents/blockContent';
import post from './documents/post';
import forfatter from './documents/forfatter';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    forfatter,
    blockContent,
  ]),
})