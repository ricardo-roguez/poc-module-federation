import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod1Feat2Component } from './mod1-feat2.component';

const routes: Routes = [{ path: '', component: Mod1Feat2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1FeatRoutingModule { }
