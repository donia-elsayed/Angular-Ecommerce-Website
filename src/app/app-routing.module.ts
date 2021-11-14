import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WhishListComponent } from './whish-list/whish-list.component';

const routes: Routes = [
  {
    path:"",component:ProductsListComponent
  },
  {
    path:"auth",loadChildren:()=> import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:"shoppingCart",component:ShoppingCartComponent
  },
  {
    path: "productDetails",component: ProductDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "whishlist",
    component: WhishListComponent,
  },
  {
    path:"product/:id",component:ProductDetailsComponent
  },
  { path: "**", component: ProductsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
