import React from 'react';
import Carousel from 'react-material-ui-carousel';

interface CarouselProps {
  items?: string[];
  height?: number;
}

export const CarouselElm: React.FC<CarouselProps> = ({ items, height }) => {
  if (!items) {
    return null;
  }
  return (
    <Carousel
      height={height || 400}
      animation="slide"
      duration={500}
      navButtonsAlwaysVisible
      indicators
      autoPlay
    >
      {items.map((item) => (
        <Item key={item} item={{ src: item }} />
      ))}
    </Carousel>
  );
};

const Item = (props: any) => {
  return <img alt="images" src={props.item.src}></img>;
};
