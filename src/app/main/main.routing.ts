import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
    { path: 'app', component: MainComponent, children:[
        { path: '', component: DashboardComponent},
        { path: 'contact', component: ContactUsComponent},
        // { path: 'men', component: ContactUsComponent, children:[

        //     { path: 'tshurt', component: ContactUsComponent},
        //     { path: '', redirectTo:'tshurt',pathMatch:'full'},
        // ]},
        { path: '', redirectTo:'',pathMatch:'full'},
        { path: '**', component: PageNotFoundComponent}
    ]},
];

export const MainRoutes = RouterModule.forChild(routes);


