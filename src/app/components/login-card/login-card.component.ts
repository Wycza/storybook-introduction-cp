import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  protected loginField = '';
  protected passwordField = '';

  constructor(private readonly router: Router) {}

  protected login(): void {
    if (this.loginField !== '1' || this.passwordField !== '1') {
      return;
    }

    this.router.navigateByUrl('dashboard');
  }
}
