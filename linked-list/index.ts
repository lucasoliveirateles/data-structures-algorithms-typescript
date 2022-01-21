import { defaultEquals } from './util/index.ts';
import { Node } from './model/linked-list-models.ts';

export default class LinkedList {
  count: number;
  head: any;
  equalsFn: any;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: any) {
    const node = new Node(element);
    
    let current;
  
    if (this.head === null || this.head === undefined) {  
      this.head = node;
    } 
    else {
      current = this.head;
  
      while (current.next != null) {
        current = current.next;
      }
      
      current.next = node;
    }

    this.count++;
  }
}