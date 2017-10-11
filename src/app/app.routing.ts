import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { CoursesComponent } from './components/courses.component';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home',
        component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);