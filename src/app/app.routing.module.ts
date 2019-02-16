import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';

export const appRoutes: Routes = [
  {
    path : 'produit',
    component : ProduitComponent,
    resolve:{
      produits : ProduitResolver
    }
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
   }

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    )
  ],
  exports : [RouterModule],
  providers : [ProduitResolver]

})

export class AppRoutingModule{


}
