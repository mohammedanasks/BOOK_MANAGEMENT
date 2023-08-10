import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertDatasComponent } from './InsertDatas.component';



const routes: Routes = [
    {
        path: 'AddData',
        component:InsertDatasComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InserDataRouting { }
