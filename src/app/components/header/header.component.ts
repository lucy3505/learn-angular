import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //接收父组件传递过来的数据
  @Input() title: any;
  @Input() msg: any;
  @Input() run: any;
  @Input() home: any;
  @Output() private outer = new EventEmitter<string>();
  //用EventEmitter和output装饰器配合使用  <string>指定类型变量
  constructor() {}

  ngOnInit(): void {}

  getParentMsg() {
    //获取父组件数据
    alert(this.msg);
  }
  getParentRun() {
    //获取父组件方法
    // this.run();

    //this.home拿到的是真个父组件实例
    this.home.run();
  }
  sendParent() {
    this.outer.emit('msg from child');
  }
}
