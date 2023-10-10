import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  #value: number = Math.floor(Math.random() * 150);
  @Input() set value(val: number) {
    this.#value = val;
  }

  get value(): number {
    return this.#value;
  }
}
