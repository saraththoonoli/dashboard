import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpgradeToProComponent } from './upgrade-to-pro/upgrade-to-pro.component';
import { ElementsComponent } from './elements/elements.component';
import { ComponetsComponent } from './componets/componets.component';
import { DashboardBoxesComponent } from './dashboard-boxes/dashboard-boxes.component';
import { ControlsComponent } from './controls/controls.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationComponent } from './validation/validation.component';
import { ChatjsComponent } from './chatjs/chatjs.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'upgrade to pro', component:UpgradeToProComponent
  },
  {
    path:'dashboard example', component:DashboardComponent
  },
  {
    path:'elements', component:ElementsComponent
  },
  {
    path:'components', component:ComponetsComponent
  },
  {
    path:'dashboard boxes', component:DashboardBoxesComponent
  },
  {
    path:'control', component:ControlsComponent
  },
  {
    path:'layouts', component:LayoutsComponent
  },
  {
    path:'validation', component:ValidationComponent
  },
  {
    path:'chatjs', component:ChatjsComponent
  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
