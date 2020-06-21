import { Routes } from '@angular/router';

import { CblolComponent } from './cblol.component';

export const CblolRoutes: Routes = [
    {
        path: 'cblol',
        redirectTo: 'app/cblol'
    },

    {
        path: 'app/cblol',
        component: CblolComponent
    },
];