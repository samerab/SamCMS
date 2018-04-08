import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeViewService } from '../../services/tree-view.service';
import { ITreeNodeData } from '../../interfaces/tree-node-data.interface';
import { slideDown, slideDown3 } from '../../animations/consts/slide';
import { samo } from '../../sam-library/samo';

@Component({
  selector: 'sam-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
  animations: [slideDown, slideDown3]
})
export class TreeListComponent implements OnInit, AfterViewInit {

  @ViewChildren(TreeNodeComponent) treeNodes: QueryList<TreeNodeComponent>
  clickedNodeData: any;
  treeNodesData: any = [];
  state: string = '';

  x = [
    {id: 9,name: 'c5',src: '',parentId: 7},
    {id: 1,name: 'parenr1',src: '',parentId: 0},
    {id: 2,name: 'parenr2',src: '',parentId: 0},
    {id: 3,name: 'c11',src: '',parentId: 1},
    {id: 10,name: 'uuu',src: '',parentId: 1},
    {id: 5,name: 'c12',src: '',parentId: 2},
    {id: 6,name: 'c111',src: '',parentId: 3},
    {id: 4,name: 'c121',src: '',parentId: 5},
    {id: 7,name: 'c1111',src: '',parentId: 6}

  ];

  

  constructor(private tvService: TreeViewService) { }

  ngOnInit() {
    this.sortDescent(this.x);
    
  }

  ngAfterViewInit(){
    this.tvService.TreeNodeData.subscribe( data => {
      this.clickedNodeData = data;
      this.changeChildrenVisibility();
      this.changeState(data);
   
    });
    
    setTimeout(() => {
      this.checkParents();
    },0) 

  }

  changeChildrenVisibility(){
    this.treeNodes.forEach( item => {
      //  if(!item.data.parentId){
      //    throw 'Data in TreeNodeComponent must contain a parentId property';
      //  }
      if(item.data.parentId == this.clickedNodeData.id){
        if(this.clickedNodeData.state === 'collapsed'){
          item.hidden = true;
        }
        else {
          item.hidden = false;
          item.state = 'collapsed';
          item.toggledIcon = item.openIcon;
        }
        
        this.hideAll(item.data.id);
      }
    });
  }

  hideAll(senderId){
    this.treeNodes.forEach( item => {
        if(item.data.parentId == senderId){
          item.hidden = true;
          this.hideAll(item.data.id);
        }
    });
  }

  sortDescent(data,startId = 0, level = -1){
    let newItem;
    data.forEach( item => {
      
      if( item.parentId == startId){
        newItem = {...item, level: level + 1};
        this.treeNodesData.push(newItem);
        
        this.sortDescent(data, item.id, newItem.level);
        
      }
    });

  }

  checkParents(){
    let parentsIds = [];
    this.treeNodesData.forEach(item => {
      parentsIds.push(item.parentId);
    });
    
    this.treeNodes.forEach( item => {
      if(parentsIds.indexOf(item.data.id) == -1){
        item.hasChildren = false;
      }
    });
  }

  test(){
    
  }

  changeState(data){
    if(data.state == 'collapsed'){
      this.state = 'collapsed';
    }
    else {
      this.state = 'expanded';
    }
  }

  animationDone(){
    this.state = '';
  }

  createDiv(){
    let sam = ['a', 'b' , 'c'];
    console.log(sam.join('-- '));
  }


}
