import type { Meta, StoryObj } from '@storybook/angular';

import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

import { CommonModule } from '@angular/common';

import * as TaskStories from '../../components/task/task.stories';
import { DashboardPageComponent } from './dashboard-page.component';
import {
  BtnComponent,
  CardComponent,
  IconModule,
  NotificationComponent,
  TaskComponent,
  TaskListComponent,
  ToolbarComponent,
} from 'src/app/components';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from 'src/app/state';
import { AppComponent } from 'src/app/app.component';
import { of } from 'rxjs';

const meta: Meta<DashboardPageComponent> = {
  component: DashboardPageComponent,
  title: 'Pages/Dashboard',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      // 👇 imports both components to allow component composition with Storybook
      declarations: [
        AppComponent,
        TaskListComponent,
        TaskComponent,
        CardComponent,
        ToolbarComponent,
        BtnComponent,
        NotificationComponent,
      ],
      imports: [CommonModule, IconModule],
    }),
    // 👇 wraps our stories with a decorator
    componentWrapperDecorator((story) => {
      const htmlTags = document.getElementsByTagName(
        'html'
      ) as HTMLCollectionOf<HTMLElement>;
      Array.from(htmlTags).forEach((tag) => {
        tag.classList.remove('dark');
      });

      return `<div style="margin: 3em">${story}</div>`;
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          NgxsModule.forRoot([TasksState], {
            developmentMode: true,
          })
        ),
      ],
    }),
  ],
  render: (args: DashboardPageComponent) => ({
    props: {
      ...args,
      onPinTask: TaskStories.actionsData.onPinTask,
      onArchiveTask: TaskStories.actionsData.onArchiveTask,
    },
  }),
};
export default meta;
type Story = StoryObj<DashboardPageComponent>;

export const Default: Story = {};

export const DefaultDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    componentWrapperDecorator((story) => {
      setTimeout(() => {
        const isPreview = document.querySelector(
          '#storybook-root:not([hidden])'
        );

        if (isPreview) {
          const htmlTag = document.querySelector(
            '#storybook-preview-wrapper, html'
          ) as HTMLElement;
          htmlTag.classList.add('dark');
        }
      });
      return `<div style="margin: 3em" class="dark">${story}</div>`;
    }),
  ],
};

export const DefaultNoTasks: Story = {
  decorators: [
    moduleMetadata({
      providers: [{ provide: Store, useValue: { select: () => of([]) } }],
    }),
  ],
};

export const DefaultMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
};
