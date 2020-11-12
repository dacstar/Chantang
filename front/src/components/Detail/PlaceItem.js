import React from 'react';

const PlaceItem = ({ place }) => {
  const {
    content,
    detail_content: detailContent,
    service_area: serviceArea,
    theme_type: themeType,
    title,
    views,
  } = place;

  return (
    <div>
      <div>{content}</div>
      <div>{detailContent}</div>
      <div>{serviceArea}</div>
      <div>{themeType}</div>
      <div>{title}</div>
      <div>{views}</div>
    </div>
  );
};

export default PlaceItem;
