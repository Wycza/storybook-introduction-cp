import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, delay, tap } from 'rxjs';
import { Task } from 'src/app/models';
import { TaskStateModel } from 'src/app/state';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
  tasks$: Observable<Task[]>;
  isLoading: boolean = true;

  constructor(readonly store: Store) {
    this.tasks$ = store
      .select((state: { taskbox: TaskStateModel }) => state.taskbox.tasks)
      .pipe(
        delay(500),
        tap(() => (this.isLoading = false))
      );
  }
}
