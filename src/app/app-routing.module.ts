import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { LoginComponent } from './components/login/login.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,
    children: [{
      path: 'jobs', children: [
        {
          path: '', pathMatch: 'full',
          component: JobsListComponent
        },
        { path: ':id', pathMatch: 'full', component: JobComponent }]
    },
    { path: 'login', component: LoginComponent },]
  }
  //{path: 'new-costumes', component:CostumeNewComponent},
  // {path: '**', component:PageNotFoundComponent},
  // {path:'**', redirectTo:'/notfound'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
