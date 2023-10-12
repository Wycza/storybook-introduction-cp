import type { Meta, StoryObj } from '@storybook/angular';

import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

import { CommonModule } from '@angular/common';

import * as TaskStories from '../task/task.stories';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { CardComponent } from '../card';
import { NgxsModule } from '@ngxs/store';

const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  title: 'Components/TaskList',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      // 👇 imports both components to allow component composition with Storybook
      declarations: [TaskListComponent, TaskComponent, CardComponent],
      imports: [CommonModule],
    }),
    // 👇 wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
    applicationConfig({
      providers: [
        importProvidersFrom(
          NgxsModule.forRoot([], {
            developmentMode: true,
          })
        ),
      ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'facebook',
    },
  },
  render: (args: TaskListComponent) => ({
    props: {
      ...args,
      onPinTask: TaskStories.actionsData.onPinTask,
      onArchiveTask: TaskStories.actionsData.onArchiveTask,
    },
  }),
};
export default meta;
type Story = StoryObj<TaskListComponent>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: '1',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a bibendum mauris, ac scelerisque ex. Donec non convallis quam, non viverra augue. Pellentesque eget fermentum ante, a eleifend nisi.',
      },
      { id: '2', title: 'Task 2' },
      { id: '3', title: 'Task 3' },
      { id: '4', title: 'Task 4' },
      { id: '5', title: 'Task 5' },
      { id: '6', title: 'Task 6' },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      // Shaping the stories through args composition.
      // Inherited data coming from the Default story.
      ...(Default.args?.tasks?.slice(0, 4) || []),
      { id: '5', title: 'Task 5 (archived)', state: 'TASK_ARCHIVED' },
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
