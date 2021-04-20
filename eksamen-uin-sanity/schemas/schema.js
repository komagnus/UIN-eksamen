import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
<<<<<<< Updated upstream
import blockContent from './documents/blockContent';
import post from './documents/post';
import author from './documents/author';
import navigationList from './navigationList';
import footeransatt from './footeransatt';
import footerkontakt from './footerkontakt';
import footernavigasjon from './footernavigasjon';
import gallery from './documents/gallery';

=======
import Footer from "./documents/footer"
// Then we give our schema to the builder and provide the result to Sanity
>>>>>>> Stashed changes
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
<<<<<<< Updated upstream
    post,
    author,
    blockContent,
    navigationList,
    footeransatt,
    footerkontakt,
    footernavigasjon,

=======
    /* Your types here! */
    Footer
>>>>>>> Stashed changes
  ]),
})