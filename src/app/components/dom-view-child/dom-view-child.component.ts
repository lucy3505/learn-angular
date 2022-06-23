import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom-view-child',
  templateUrl: './dom-view-child.component.html',
  styleUrls: ['./dom-view-child.component.scss'],
})
export class DomViewChildComponent implements OnInit {
  //获取dom节点  把获取的节点赋值给一个变量  这里就叫myBox,并把他指定成为any类型
  @ViewChild('myBox') myBox: any;

  //获取一个组件
  @ViewChild('header') header: any;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width = '100px';
    this.myBox.nativeElement.style.height = '100px';
    this.myBox.nativeElement.style.background = 'red';
    console.log(this.myBox.nativeElement.innerHTML);
    //调用自主组件里面的方法
    this.header.run();
  }

  getChildRun() {
    this.header.run();
  }
}
