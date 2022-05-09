import React from 'react';
import Carousel from 'react-material-ui-carousel';

interface CarouselElmProps {
  items?: string[];
  height?: number;
  animation?: 'fade' | 'slide';
  indicators?: boolean;
  navButtonsAlwaysVisible?: boolean;
  fullHeightHover?: boolean;
}

export const CarouselElm: React.FC<CarouselElmProps> = ({
  items,
  height,
  indicators,
  animation,
  navButtonsAlwaysVisible,
  fullHeightHover,
}) => {
  if (!items) {
    return null;
  }
  return (
    <Carousel
      fullHeightHover
      indicators={true}
      navButtonsAlwaysVisible={true}
      animation="slide"
      height={height || 400}
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
