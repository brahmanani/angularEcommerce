import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    
    { path: '', redirectTo:'/', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent },
];

export const AppRoutes = RouterModule.forRoot(routes,{useHash:true});


