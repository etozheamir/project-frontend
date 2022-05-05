import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GenreDetailedComponent } from './components/genre-detailed/genre-detailed.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'genres/:id', component: GenreDetailedComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'manager-panel', component: AdminComponent},
  {path: 'edit/:id', component: EditItemComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
