import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutTodoComponent } from './MyComponents/about-todo/about-todo.component';

const routes: Routes = [{ path: '', component: TodosComponent },
{ path: 'about', component: AboutTodoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
