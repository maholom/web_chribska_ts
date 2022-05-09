import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CarouselElm } from '../components/Carousel';
import Image_house_carousel from '../pages/homefoto/Image_house_carousel.jpg';
import Image_natur_carousel from '../pages/homefoto/Image_natur_carousel.jpg';

const carousel = [Image_house_carousel, Image_natur_carousel];

export default {
  title: 'Example/CarouselElm',
  component: CarouselElm,
  argTypes: {
    indicators: { type: 'boolean' },
    navButtonsAlwaysVisible: { type: 'boolean' },
    autoPlay: { type: 'boolean' },
    duration: { type: 'number' },
  },
} as ComponentMeta<typeof CarouselElm>;

const Template: ComponentStory<typeof CarouselElm> = ({ ...args }) => (
  <div style={{ height: '200px', width: '200px' }}>
    {' '}
    <CarouselElm {...args} />
  </div>
);

export const CarouselVisible = Template.bind({});
CarouselVisible.args = { items: carousel, height: 200 };

export const CarouselAnimation = Template.bind({});
CarouselAnimation.args = {
  items: carousel,
  navButtonsAlwaysVisible: false,
  height: 200,
};
