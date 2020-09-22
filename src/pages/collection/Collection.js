import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import "../../styles/Collection.scss";
const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
