import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TextProps {
  text?: string;
}
const Text: React.FC<TextProps> = ({ text }) => {
  if (!text || text.trim().length === 0) {
    return <div>Dobrý den</div>;
  }
  return <div>Nazdar text: {text}</div>;
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const WithText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithText.args = { text: 'ahoj' };

export const WithEmptyText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEmptyText.args = { text: '   ' };
