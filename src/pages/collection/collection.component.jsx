import React from 'react';

import CollectionItem from 'components/collection-item/collection-item.component';
import 'pages/collection/collection.styles.scss';

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

export default CategoryPage;
