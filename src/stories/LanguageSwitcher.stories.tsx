import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LanguageSwitcher from '../LanguageSwitcher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LanguageSwitcher',
  component: LanguageSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LanguageSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LanguageSwitcher> = ({ ...args }) => (
  <LanguageSwitcher {...args} />
);

export const EnLS = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnLS.args = {};
