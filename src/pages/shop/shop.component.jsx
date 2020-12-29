import React from 'react';
import { Route } from 'react-router-dom';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from 'firebase/firebase.utils';

import CollectionOverview from 'components/collection-overview/collection-overview.component';
import CollectionPage from 'pages/collection/collection.component';

class ShopPage extends React.Component {
  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
