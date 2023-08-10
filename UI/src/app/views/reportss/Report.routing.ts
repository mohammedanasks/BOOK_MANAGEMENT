import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookByAuthorComponent } from './BookByAuthore/BookByAuthor.component';

import { BookByCategoryComponent } from './BookByCategory/book-by-category.component';
import { BorrowedBookComponent } from './BorrowedBooks/BorrowedBooks.component';
import { DelayBookComponent } from './DelayBooks/DelayBook.component';





const routes: Routes = [
    {
        path: 'BookByAuthor',
        component:BookByAuthorComponent 
    },
  
    {
      path: 'BookByCategory',
      component:BookByCategoryComponent
  },
  {
    path: 'BorrowedBooks',
    component:BorrowedBookComponent
},

{
  path: 'DelayedBooks',
  component:DelayBookComponent
},



 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRouting { }
