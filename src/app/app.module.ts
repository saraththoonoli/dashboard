import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TableComponent } from './table/table.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { UpgradeToProComponent } from './upgrade-to-pro/upgrade-to-pro.component';
import { DasboardExampleComponent } from './dasboard-example/dasboard-example.component';
import { ElementsComponent } from './elements/elements.component';
import { ComponetsComponent } from './componets/componets.component';
import { DashboardBoxesComponent } from './dashboard-boxes/dashboard-boxes.component';
import { ControlsComponent } from './controls/controls.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationComponent } from './validation/validation.component';
import { ChatjsComponent } from './chatjs/chatjs.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import {MatTableModule} from '@angular/material/table';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    PiechartComponent,
    TableComponent,
    UpgradeToProComponent,
    DasboardExampleComponent,
    ElementsComponent,
    ComponetsComponent,
    DashboardBoxesComponent,
    ControlsComponent,
    LayoutsComponent,
    ValidationComponent,
    ChatjsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
