import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './AddBook/AddBook.component';

import { BorrowBookComponent } from './Borrow/BorrowBook.component';




const routes: Routes = [
    {
        path: 'AddBook',
        component:AddBookComponent
    },
    {
      path: 'BorrowBook',
      component:BorrowBookComponent
  },
  {
    // path: 'BookCheckIn',
    // component:AlertComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRouting { }
