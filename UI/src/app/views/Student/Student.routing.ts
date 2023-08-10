import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './AddStudent/Student.component';
import { EditStudentComponent } from './EditStudent/EditStudent.component';


const routes: Routes = [
    {
        path: 'AddStudent',
        component: StudentComponent,
    },
      {  path:"EditStudent/:id",
        component:EditStudentComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRouting { }
