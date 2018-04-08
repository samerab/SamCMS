import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ITreeNodeData } from '../../../interfaces/tree-node-data.interface';
import { TreeViewService } from '../../../services/tree-view.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'sam-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  animations: []
})
export class TreeNodeComponent implements OnInit, AfterViewInit {

  @Input() data: ITreeNodeData;
  @Input() openIcon: string = 'chevron_right';
  @Input() closeIcon: string = 'expand_more';
  @Input() icon: string = 'folder';
  @Input() level = 1;
  hidden: boolean;
  state: string = 'collapsed';
  selected: boolean = false;
  hasChildren: boolean = true;
  toggledIcon: string = this.openIcon;
  
  constructor(private tvService: TreeViewService) {
    
   }

  ngOnInit() {
    this.hidden = this.data.parentId == 0 ? false : true;
  }

  ngAfterViewInit(){}
  

  onclick(){
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
    this.toggleIcon();
    this.sendData();
  }

  sendData(){
    this.tvService.sendData({
      id: this.data.id,
      state: this.state, 
      hidden: this.hidden
    })
  }

  toggleIcon(){
    this.toggledIcon = this.toggledIcon == this.openIcon ? this.closeIcon : this.openIcon;
  }
  
}
