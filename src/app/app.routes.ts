import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToDashboard)},
    { path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedInToDashboard)},
];
