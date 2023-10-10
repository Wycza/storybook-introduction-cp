import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnComponent {
  /**
   * Text to display
   */
  @Input() text: string = '';

  /**
   * Icon to include
   */
  @Input() icon: string = '';

  /**
   * What color should the button use?
   */
  @Input() color: 'primary' | 'accent' = 'primary';
}
