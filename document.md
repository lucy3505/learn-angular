## 父组件获取子组件数据

#### 1 父组件通过@ViewChild 主动获取子组件的数据和方法

1.调用子组件给子组件定义一个名称

<app-footer #footerChild></app-footer>

#### 2.子组件通过@Output 触发父组件的方法

##### 1.子组件引入 Output 和 EventEmitter

import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core'

##### 2.子组件中实例化 EventEmitter

@Output() private outer=new EventEmitter<string>()

##### 3.子组件通过 EventEmitter 对象 outer 实例广播数据

sendParent(){

​ this.outer.emit("msg from child")

}

##### 4.父组件调用子组件的时候，定义接收事件，outer 就是子组件的 EventEmitter 对象 outer

<app-header (outer)="runParent($event)"></app-header>
