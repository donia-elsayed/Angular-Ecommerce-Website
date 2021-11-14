import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { WhishListComponent } from './whish-list/whish-list.component';
import { WhishListItemComponent } from './whish-list-item/whish-list-item.component';
import { WhishListReducer } from './store/whishList/whishList.reducer';
import { AddCounterReducer } from './store/counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RequestInterceptor } from './request.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CurrencyPipe } from './currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    WhishListComponent,
    WhishListItemComponent,
    ProductDetailsComponent,
    LoaderComponent,
    ShoppingCartComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot({ whishlist: WhishListReducer, counter: AddCounterReducer }),
    StoreDevtoolsModule.instrument({ name: 'NgRx Demo App' }),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:RequestInterceptor,multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
