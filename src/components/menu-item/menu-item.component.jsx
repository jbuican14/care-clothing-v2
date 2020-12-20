import React from 'react';

import 'components/menu-item/menu-item.styles.scss';

const MenuItem = ({ title, img, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        background: ` url(${img})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
