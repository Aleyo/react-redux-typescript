import * as React from 'react';
import SortLink from '../../containers/sortLink';

export const SortGroup = () => (
  <div className='btn-group' role='group'>
    <SortLink sorting='SORT_TODOS' order="ASC">ASC</SortLink>
    <SortLink sorting='SORT_TODOS' order="DESC">DESC</SortLink>
  </div>
);
