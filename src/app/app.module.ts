import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterialModule } from './modules/material/material.module';
import { WysiwygModule } from './lazy-components/wysiwyg/wysiwyg.module';

import { AppComponent } from './app.component';
import { ImgBrowserComponent } from './components/img-browser/img-browser.component';
import { DirComponent } from './components/dir/dir.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { TreeNodeComponent } from './components/tree-list/tree-node/tree-node.component';
import { MyExpandoCmp } from './components/xxx';


import { TreeViewService } from './services/tree-view.service';


@NgModule({
  declarations: [
    AppComponent,
    ImgBrowserComponent,
    DirComponent,
    TreeListComponent,
    TreeNodeComponent,
    MyExpandoCmp,
    
  ],
  imports: [
    BrowserModule,
    WysiwygModule,
    MaterialModule
  ],
  providers: [TreeViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
