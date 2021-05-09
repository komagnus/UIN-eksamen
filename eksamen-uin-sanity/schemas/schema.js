import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './documents/blockContent';
import post from './documents/post';
import author from './documents/author';
import navigationList from './navigationList';
import footerkontakt from './footerkontakt';
import footernavigasjon from './footernavigasjon';
import gallery from './documents/gallery';
import navigationListHeader from './navigationListHeader';
import contact from './documents/contact';
import contactimg from './documents/contactimg'
import paamelding from './documents/paamelding';
import kurs from './documents/kurs';
import contactimg from './documents/contacting';
import subscribe from './documents/subscribe';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    blockContent,
    navigationList,
    footerkontakt,
    footernavigasjon,
    gallery,
    navigationListHeader,
    contact,
    contactimg,
    paamelding,
    kurs,
    subscribe
  ]),
})