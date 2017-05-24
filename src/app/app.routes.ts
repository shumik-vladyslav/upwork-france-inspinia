import {Routes} from "@angular/router";

import {Dashboard1Component} from "./views/dashboards/dashboard1.component";
import {Dashboard2Component} from "./views/dashboards/dashboard2.component";
import {Dashboard3Component} from "./views/dashboards/dashboard3.component";
import {Dashboard4Component} from "./views/dashboards/dashboard4.component";
import {Dashboard41Component} from "./views/dashboards/dashboard41.component";
import {Dashboard5Component} from "./views/dashboards/dashboard5.component";

import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./views/appviews/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

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
import { PreferencesComponent } from "./components/preferences/preferences.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProfilComponent } from "./components/profil/profil.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { MessagesComponent } from "./components/messages/messages.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dashboards/main-view', pathMatch: 'full'},


  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'main-view', component: DashboardComponent},
      {path: 'cash', component: CashComponent},
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'preferences', component: BasicLayoutComponent,
    children: [
      {path: 'profil', component: ProfilComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent},
      {path: 'clients', component: ClientsComponent},
      {path: 'clients/:id', component: EditClientComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/:id', component: EditProductComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'orders/:id', component: EditOrderComponent},
      {path: 'preferences', component: PreferencesComponent},
      {path: 'projects', component: ProjectsComponent},
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginUserComponent },
      { path: 'register', component: SignupComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'dashboards/main-view'}
];
