import React from 'react';

import SHOP_DATA from 'pages/shop/shop.data';
import CollectionPreview from 'components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  renderCollectionPreview = () => {
    // console.log(this.state);
    const { collections } = this.state;
    // console.log(collections);
    return collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  };

  render() {
    return <div className="shop-page">{this.renderCollectionPreview()}</div>;
  }
}

export default ShopPage;
