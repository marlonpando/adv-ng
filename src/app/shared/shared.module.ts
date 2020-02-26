import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { TypeaheadDemoComponent } from './components/typeahead-demo/typeahead-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ToolHeaderComponent, TypeaheadDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ToolHeaderComponent,
    TypeaheadDemoComponent
  ]
})
export class SharedModule { }
