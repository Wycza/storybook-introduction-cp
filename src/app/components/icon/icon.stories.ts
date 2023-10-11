import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { IconModule } from './icon.module';

const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  render: (args: IconComponent) => ({
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
};

export default meta;
type Story = StoryObj<IconComponent>;

export const heroUsers: Story = {
  args: { name: 'heroUsers' },
  tags: ['isHidden'],
};

export const heroCalculator: Story = {
  args: { name: 'heroCalculator' },
  tags: ['isHidden'],
};

export const heroArrowLeftOnRectangle: Story = {
  args: { name: 'heroArrowLeftOnRectangle' },
  tags: ['isHidden'],
};

export const heroMoon: Story = {
  args: { name: 'heroMoon' },
  tags: ['isHidden'],
};

export const heroSun: Story = {
  args: { name: 'heroSun' },
  tags: ['isHidden'],
};

export const heroBell: Story = {
  args: { name: 'heroBell' },
  tags: ['isHidden'],
};
