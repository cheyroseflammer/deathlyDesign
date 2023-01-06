import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Importing Schema Files
import product from './product';
import artist from './artist';
import gallery from './gallery';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, artist, gallery]),
});
