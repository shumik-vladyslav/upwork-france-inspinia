import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';



import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SignupComponent } from "./components/signup/signup.component";
import { LoginUserComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CashComponent } from "./components/cash/cash.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { EditClientComponent } from "./components/clients/edit-client/edit-client.component";
import { ProductsComponent } from "./components/products/product.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { EditOrderComponent } from "./components/orders/edit-order/edit-order.component";

import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlotModule } from './components/charts/flotChart';
import { IboxtoolsModule } from './components/common/iboxtools/iboxtools.module';
import { PeityModule } from './components/charts/peity';
import { SparklineModule } from './components/charts/sparkline';
import { JVectorMapModule } from './components/map/jvectorMap';

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDV8ZIYD4c7rNFMdORcEFl-7TApLXZBxqE",
  authDomain: "inspinia-58904.firebaseapp.com",
  databaseURL: "https://inspinia-58904.firebaseio.com",
  projectId: "inspinia-58904",
  storageBucket: "inspinia-58904.appspot.com",
  messagingSenderId: "157737978226"
};

@NgModule({
  declarations: [
    Ng2Summernote,
    AppComponent,
    SignupComponent,
    LoginUserComponent,
    DashboardComponent,
    CashComponent,
    ClientsComponent,
    EditClientComponent,
    ProductsComponent,
    EditProductComponent,
    OrdersComponent,
    EditOrderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    ChartsModule, FlotModule,IboxtoolsModule,PeityModule,SparklineModule,JVectorMapModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
