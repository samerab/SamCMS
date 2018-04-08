import { Component, OnInit,Input, ViewChildren, QueryList, ElementRef } from '@angular/core';


@Component({
  selector: 'sam-toolbar',
  templateUrl: './sam-toolbar.component.html',
  styleUrls: ['./sam-toolbar.component.css']
})
export class SamToolbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

  bold(){
    document.execCommand('bold',false,null); 
  }

  insertImage(){
    let imgSrc = prompt('Enter image url', '');
      if(imgSrc != null){
          //document.execCommand('insertimage', false, imgSrc); 
          document.execCommand('insertHTML', false, `<img src="${imgSrc}" width="500" >`);
      }
  }

}
