import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './documents/blockContent';
import post from './documents/post';
import author from './documents/author';
import navigationList from './navigationList';
import footeransatt from './footeransatt';
import footerkontakt from './footerkontakt';
import footernavigasjon from './footernavigasjon';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    blockContent,
    navigationList,
    footeransatt,
    footerkontakt,
    footernavigasjon,

  ]),
})