import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeComponent } from './recipe/recipe.component';

export const routes: Routes = [
    { 
        path: 'dashboard', 
        component: DashboardComponent 
    },
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },
    {
        path:'recipe/:id',
        component: RecipeComponent
    }
];
