import { Injectable } from '@angular/core';
import { Task } from '../models';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    const tasks: Task[] = [
      {
        id: '1',
        title: 'Przedstawić storybook',
        state: 'TASK_PINNED',
      },
      {
        id: '2',
        title: 'Przedstawić Chromatic',
        state: 'TASK_INBOX',
      },
      {
        id: '3',
        title: 'Figma + SB',
        state: 'TASK_INBOX',
      },
      {
        id: '4',
        title: 'UI tests',
        state: 'TASK_ARCHIVED',
      },
    ];

    return of(tasks).pipe(delay(1500));
  }
}
