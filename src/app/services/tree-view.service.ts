import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TreeViewService {

  
  private bsTreeNodeData = new BehaviorSubject<any>({});
  TreeNodeData = this.bsTreeNodeData.asObservable();

  constructor() { }


  sendData(data: any){
    this.bsTreeNodeData.next(data);
  }

  

}
