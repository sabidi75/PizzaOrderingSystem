import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'pizza',
        loadChildren: () => import('./pizza-order/pizza-order.module').then(m => m.PizzaOrderModule)
    },
    {
        path: 'offer',
        loadChildren: () => import('./pizza-offer/pizza-offer.module').then(m => m.PizzaOfferModule)
    },    
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }