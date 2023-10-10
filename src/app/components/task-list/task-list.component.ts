import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Task } from 'src/app/models';
import { ArchiveTask, PinTask } from 'src/app/state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  tasksInOrder: Task[] = [];

  @Input() loading = false;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input() set tasks(arr: Task[] | null) {
    if (!arr?.length) {
      return;
    }

    const initialTasks = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];

    // const filteredTasks = initialTasks.filter(
    //   (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    // );

    this.tasksInOrder = initialTasks;
  }

  constructor(private readonly store: Store) {}

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
