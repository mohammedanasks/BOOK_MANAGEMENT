import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { SearchModule } from "app/shared/search/search.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule } from "@angular/forms";

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InserDataRouting } from "./InsertData.routing";
import { InsertDatasComponent } from "./InsertDatas.component";





@NgModule({
  declarations: [InsertDatasComponent],
  imports: [MatCardModule,MatInputModule,FlexLayoutModule, MatSelectModule,
     MatSlideToggleModule,MatFormFieldModule ,CommonModule, NgxDatatableModule, 
     InserDataRouting, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class InsertDataModule {}
