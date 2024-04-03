import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'wms';
  authService = inject(AuthService);
  router = inject(Router)

  ngOnInit(): void {
      this.authService.user$.subscribe(user => {
        if (user) {
          this.authService.currentUserSig.set({
            email: user.email!,
            username: user.displayName!
          })
        } else {
          this.authService.currentUserSig.set(null);
        }
      })
  }

  logout(): void {
    this.authService.logout().subscribe();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 200)
  }
}
