import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image_house_carousel from '../pages/homefoto/Image_house_carousel.jpg';
import Image_natur_carousel from '../pages/homefoto/Image_natur_carousel.jpg';

export const CarouselElm = (props: any) => {
  const items = [
    {
      src: Image_house_carousel,
    },
    {
      src: Image_natur_carousel,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props: any) => {
  return <img alt="images" src={props.item.src}></img>;
};
