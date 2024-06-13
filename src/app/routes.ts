import { Routes } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { DetailsComponent } from './details/details.component';
 
const routeConfig:Routes=[
 
    {
        path:'',
        component: HomesComponent,
        title: 'Home Page'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title:'Details Page'
    },
];
export default routeConfig;
 