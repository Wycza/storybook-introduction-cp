import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  /**
   * The shape of the task object
   */
  @Input() task: Task | undefined;

  @Output() onPinTask = new EventEmitter<string>();
  @Output() onArchiveTask = new EventEmitter<string>();

  /**
   * @ignore
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: string) {
    this.onPinTask.emit(id);
  }
  /**
   * @ignore
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: string) {
    this.onArchiveTask.emit(id);
  }
}
