import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DiamondComponent } from './diamond/diamond.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path: 'diamond', component: DiamondComponent},
  {path: 'github', component: GithubComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
