//引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //使用这个组件的名称
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.scss'], //css
})
export class AppComponent {
  title = 'angulae0614'; //定义属性
  public flag = true;

  constructor() {
    //构造函数
  }

  changeTitle() {
    this.title = 'change title';
  }
  changeFlag() {
    this.flag = !this.flag;
  }
}
