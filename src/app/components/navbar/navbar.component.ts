import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  router = inject(Router);
  authService = inject(AuthService);

  isLoggedIn() : boolean {
    if (this.authService.currentUserSig()) {
      return true;
    } else {
      return false;
    }
  }

  async logout() : Promise<void> {
    this.authService.logout();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 200);
  }

  isOnMobileScreen() : boolean {
    if (window.innerWidth < 728) {
      return true;
    } else {
      return false;
    }
  }
}
