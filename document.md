#### 1。绑定数据

news.component.ts 中定义数据，在 news.html 中进行绑定

{{}}

[]绑定属性

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  //声明属性的几种方式
  // public  共有 *(默认) 可以在这个类里面使用，也可以在类外面使用
  // protected 保护类型  只有在当前类和他的子类里面可以访问
  // private 私有   只有在当前类猜可以访问这个属性

  //定义普通数据
  public title = '我是新闻组件';

  msg = '我是一个新闻组件的msg'; //没写public 默认就是public

  username: string = '张三';

  public student: string = '我是一个学生的属性'; //推荐用这种方式

  public message: any; //只定义属性  不赋值，可以在构造函数里面赋值

  public content = '<h2>我是一个html标签<h2>';

  //定义数据
  public arr = ['111', '222'];
  public userinfo: any = {
    username: 'zhangsan',
    age: 18,
  };

  constructor() {
    this.message = '这是给属性赋值--（改变属性的值）';
    console.log(this.msg); //获取属性的值

    //改变属性的值
    this.msg = '我是改变后的msg的值';
  }

  ngOnInit(): void {}
}

```

news.component.html

```js
<p>{{ userinfo.age }}</p>
<app-home></app-home>

<h1>angular模板里面绑定属性</h1>

<div title="我是一个div">鼠标瞄上去看一下</div>

<div [title]="student">张三</div> //属性绑定
<br />

<div>{{ content }}</div>
<br />
<span [innerHTML]="content" class="red"></span>
<h1>angular模板里面允许做简单的运算</h1>
1+2={{ 1 + 2 }}
```

#### 2.数据循环 \*ngFor

##### 1.\*ngFor 普通循环
