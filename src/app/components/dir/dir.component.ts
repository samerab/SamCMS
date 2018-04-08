import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sam-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {

  dataArray: any[] = [
    {id: 1, name: 'front-end', parentId: 0},
    {id: 2, name: 'back-end', parentId: 0},
    {id: 3, name: 'nodejs', parentId: 2},
    {id: 4, name: 'Vue', parentId: 1},
    {id: 9, name: 'xxxxxxxxx', parentId: 8},
    {id: 5, name: 'php', parentId: 2},
    {id: 6, name: 'Angular', parentId: 1},
    {id: 7, name: 'express', parentId: 3},
    {id: 8, name: 'santro', parentId: 5}
  ];
  constructor() { }

  ngOnInit() {
  }

  getList(index, parentDivId, margin?){
    let leftMargin = 'margin-left: 40px';
    
    this.dataArray.forEach( item => {
      if( item.parentId == index){
          
          let childDivId = 'listItem-' + index + '-' + item.id;
          let hideClass = 'hide';
          if(index == 0){
            hideClass = '';
          }
          this.createDiv(parentDivId, childDivId, item.name, leftMargin, hideClass);
          
          this.getList(item.id, childDivId, leftMargin);
      }
    });
    
  }


  createDiv(parentDivId, divId, text, leftMargin, hideClass){
    let div = document.createElement('DIV');
    let node = document.createTextNode(text);
    let att = document.createAttribute('id');
    att.value = divId;
    div.setAttributeNode(att);

    let att2 = document.createAttribute('style');
    att2.value = leftMargin;
    div.setAttributeNode(att2);
    
    let att3 = document.createAttribute('class');
    att3.value = 'alert alert-warning ' + hideClass;
    div.setAttributeNode(att3);

    
    div.appendChild(node);
    
    let icon = document.createElement('DIV');
    let att4 = document.createAttribute('class');
    att4.value = 'fas fa-forward';
    icon.setAttributeNode(att4);

    div.addEventListener('click', () => {
      this.toggle(divId);
    });

    //document.getElementById(parentDivId).appendChild(icon);
    document.getElementById(parentDivId).appendChild(div);

  }

  appendDiv(parentDiv, className?, divId?){
    let div = document.createElement('DIV');

    // create id attribute
    if(divId){
      let att = document.createAttribute('id');
      att.value = divId;
      div.setAttributeNode(att);
    }

    // create class attribute
    if(className){
      let att2 = document.createAttribute('class');
      att2.value = className;
      div.setAttributeNode(att2);
    }

    parentDiv.appendChild(div);
    //document.getElementById(parentDivId).appendChild(div);
  }

  

  toggle(divId){
    let div = document.getElementById(divId);
    console.log('div: ',div);
    for( let i = 0; i < div.children.length; i++){
      console.log('child: ',div.children[i]);
        div.children[i].classList.toggle('hide');
         
    } 
    
  }



}
