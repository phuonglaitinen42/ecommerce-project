import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "../../styles/Collection.scss";
const Collection = ({ match }) => {
  console.log(match);
  return (
    <div className="collection">
      <h2>Collection</h2>
    </div>
  );
};

export default Collection;
