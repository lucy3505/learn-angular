## 1.事件

通过()写事件 vue 中是@

方法写在业务逻辑中

```js
<h1>事件</h1>
<strong>{{ title }}</strong>

<button (click)="run()">执行事件</button>
<br />
<button (click)="getData()">执行方法获取数据</button>
<br />
<button (click)="setData()">执行方法改变属性里面的数据</button>
```

```js
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {}
  run() {
    console.log("这是一个自定义方法");
  }
  getData() {
    alert(this.title);
  }
  setData() {
    this.title = "我是改变后的title";
  }
}
```

## 表单事件

```html
<h1>表单事件 事件对象</h1>
keydown:
<input type="text" (keydown)="keyDown($event)" />
<br />
keyup:
<input type="text" (keyup)="keyUp($event)" />
```

```js
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {}
  keyDown(e: any) {
    if (e.keyCode == 13) {
      console.log("按了回车");
    } else {
      //e.target 获取dom对象
      console.log(e.target);
      console.log(e.target.value);
    }
    console.log(e.keyCode);
  }
  keyUp(e: any) {
    if (e.keyCode == 13) {
      console.log(e.target.value);
      console.log("按了回车");
    } else {
      //e.target 获取dom对象
      console.log(e.target);
      console.log(e.target.value);
    }
  }

  runEvent(e: any) {
    var dom: any = e.target;
    dom.style.color = "red";
  }
}
```

## 双向数据绑定

要在 angular 使用 mvvm 需要引入 FormsModule

要在 app.module.ts 中引入 FormModule,猜可以使用

import {FormsModule} from '@angular/forms'

```html
<h1>
  双向数据绑定：MVVM(只针对表单) model改变会影响视图。视图改变会反过来改变model
</h1>
<h5>model:业务逻辑里的数据 视图：html代码</h5>
<h5>要在angular使用mvvm需要引入FormsModule</h5>
<input type="text" [(ngModel)]="keywords" />{{ keywords }}
<br />
<button (click)="changeKeywords()">改变keywords的值</button>
<br />
<button (click)="getKeywords()">获取keywords的值</button>
```

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public keywords: string = '这是默认值';

  changeKeywords() {
    this.keywords = '我是改变后的值';
  }
  getKeywords() {
    console.log(this.keywords);
  }
}

```
