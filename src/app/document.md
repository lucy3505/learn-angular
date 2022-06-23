## 1.原生方法调用 dom

angular 中可用原生 js 调用 dom，也可以用 Viewchild 这个装饰器来操作 dom

ngOnInit(){

​ 这个声明周期是组件和指令初始化完成，并不是真正的 dom 加载完成

}

ngAfterViewInit():void{

//视图加载完成后触发的方法 dom 加载完成（建议把 dom 操作放在这个里面）

}

## 2.view-child 调用 view

1。要在 div 上加# 给 dom 起一个名字

```html
<div #myBox>我是一个dom节点</div>
```

2.在 ts 中引入模块 ViewChild

```js
import { Component, OnInit, ViewChild，ElementRef } from '@angular/core';

export class DomViewChildComponent implements OnInit {
  //获取dom节点  把获取的节点赋值给一个变量  这里就叫myBox,并把他指定成为any类型
  @ViewChild('myBox') myBox: any;

  constructor() {}

  ngOnInit(): void {}
}

```

3.写在类里面

@ViewChild('myBox') myBox:any

4.ngAfterViewInit 声明周期函数里面获取 dom

this.myBox.nativeElement

## 三、父子组件中通过 ViewChild 调用子组件的方法

#### 1.调用子组件给子组件定义一个名称

<app-footer #footerChild></app-footer>

## angular 执行 css3 动画
