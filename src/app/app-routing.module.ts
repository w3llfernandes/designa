import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SenderComponent } from './pages/sender/sender.component';
const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'sobre', component: AboutComponent },
//  { path:'cursos', component: CoursesIndexComponent, canActivate: [AuthGuard] },
  { path:'cursos/:slug', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path:'form', component: SenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
