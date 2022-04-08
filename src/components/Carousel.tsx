import React from 'react';
import Carousel from 'react-material-ui-carousel';
import headliner_1 from '../pages/homefoto/headliner_1.jpg';
import headliner_2 from '../pages/homefoto/headliner_2.jpg';

export const CarouselElm = (props: any) => {
  const items = [
    {
      src: headliner_1,
    },
    {
      src: headliner_2,
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
