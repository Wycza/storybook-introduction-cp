import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BtnComponent } from './btn.component';
import { IconModule } from '../icon';

const meta: Meta<BtnComponent> = {
  title: 'Components/Button',
  component: BtnComponent,
  tags: ['autodocs'],
  render: (args: BtnComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Cool button component description',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BtnComponent>;

export const Primary: Story = {
  args: {
    text: 'Primary button',
  },
};

export const Accent: Story = {
  args: {
    text: 'Accent button',
    color: 'accent',
  },
};

export const AccentWithIcon: Story = {
  args: {
    text: 'Accent button',
    color: 'accent',
    icon: 'heroBell',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of the button with icon',
      },
    },
  },
};
