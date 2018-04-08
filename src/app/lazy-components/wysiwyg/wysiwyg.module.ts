import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamWysiwygComponent } from './sam-wysiwyg/sam-wysiwyg.component';
import { SamToolbarComponent } from './sam-toolbar/sam-toolbar.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SamWysiwygComponent],
  declarations: [SamWysiwygComponent, SamToolbarComponent]

})
export class WysiwygModule { }
