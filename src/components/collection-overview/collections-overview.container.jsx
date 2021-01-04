import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from 'redux/shop/shop.selector';
import withSpinner from 'components/with-spinner/with-spinner.component';
import CollectionsOverView from 'components/collection-overview/collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverView);

export default CollectionsOverViewContainer;
