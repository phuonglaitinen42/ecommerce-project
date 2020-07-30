import React from "react";
import "../../styles/CollectionPreview.scss";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preiew">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
