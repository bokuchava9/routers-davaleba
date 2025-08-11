import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path:"",component:Home
    },
    {
        path:"about", component:About
    },
    {
        path:"contact", component:Contact
    },
    {
        path:"products", component:Products
    },
    {
        path:"details", loadComponent: () => import('./details/details').then(m => m.Details)   
    }
];
