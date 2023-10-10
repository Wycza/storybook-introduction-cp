import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input({ required: true }) text = '';
  @Input() loginButton = '';

  protected darkMode = false;

  constructor(private readonly router: Router) {}

  protected logout(): void {
    this.router.navigateByUrl('');
  }

  protected toggleDarkMode(value: boolean): void {
    this.darkMode = value;

    this.darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }
}
