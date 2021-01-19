import React from 'react';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from 'components/collection-preview/collection-preview.styles';
import CollectionItem from 'components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
