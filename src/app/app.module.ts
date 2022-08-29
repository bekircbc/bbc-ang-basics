import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Component1Component } from './component1/component1.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Component1Component,
    EmployeesPageComponent,
    InfoPageComponent,
    EmployeeDetailPageComponent,
    ShoppingListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
