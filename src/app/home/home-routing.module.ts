import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CblolComponent } from '../cblol/cblol.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        redirectTo: 'app/home'
    },

    {
        path: 'app/home',
        component: HomeComponent
    },

    {
        path: 'app/cblol',
        component: CblolComponent
    }
];