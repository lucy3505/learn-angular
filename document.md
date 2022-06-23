# 引入图片

## 1.本地图片

要放入 assets 文件下

<img src="assets/img/baidu.png" alt="" />

## 2.循环数据 显示数据的索引(key)

```js
<h1>循环数据 显示数据的索引(key)</h1>

<ul>
  <li *ngFor="let item of list; let key = index">
    {{ key }}---{{ item.title }}
  </li>
</ul>
```

#### 3.条件判断 \*ngIf

```js
<h1>条件判断语句 *ngIF</h1>
<div *ngIf="flag">
  <img src="assets/img/baidu.png" alt="" />
</div>
<div *ngIf="!flag">
  <img [src]="picUrl" alt="" />
</div>

<ul>
  <li *ngFor="let item of list; let key = index">
    <span *ngIf="key == 1" class="red"> {{ key }}---{{ item.title }}</span>
    <span *ngIf="key !== 1"> {{ key }}---{{ item.title }}</span>
  </li>
</ul>
```

#### 4.\*ngSwitch

```js
<h1>条件判断语句 *ngSwitch</h1>

<div [ngSwitch]="orderStatus">
  <div *ngSwitchCase="1">1表示已经支付</div>
  <div *ngSwitchCase="2">2支付且确认订单</div>
  <div *ngSwitchCase="3">3表示已经发货</div>
  <div *ngSwitchCase="4">4表示已经收获</div>
  <div *ngSwitchDefault>5无效</div>
</div>
```

#### 5 属性[ngClass],[ngStyle]

```js
<h1>属性[ngClass],[ngStyle]</h1>

<div class="red">ngClass演示 （尽量不要用dom来改变class）</div>

<div [ngClass]="{ blue: true, red: true }">ngClass演示</div>

<hr />
<div [ngClass]="{ blue: flag, red: !flag }">ngClass演示</div>
<p style="color: red">我是一个p标签</p>
<p [ngStyle]="{ color: 'blue' }">我是一个p标签</p>
<p [ngStyle]="{ color: attr }">我是一个p标签</p>
//变量不要加引号
```

## 2 管道

更多用来日期转换

http://bbs.itying.com/topic/5bf519657e9f5911d41f2a34

# angular 中的管道(pipe) 以及自定义管道-适用于 angular4 angualr5 angualr6 angular7

发布于 4 年前 作者 [vueper](http://bbs.itying.com/user/vueper) 6812 次浏览 最后一次编辑是 4 年前 来自 分享

angular 中的管道(pipe)是用来对输入的数据进行处理，如大小写转换、数值和日期格式化等。

**angular 中的管道(pipe) 以及自定义管道适用于 angular4 angualr5 angualr6 angular7**

常用的管道（pipe）有

### 1. 大小写转换

```
<p>{{str | uppercase}}</p>//转换成大写
<p>{{str | lowercase}}</p>//转换成小写
```

### 2. 日期格式转换

```
<p>{{today | date:'yyyy-MM-dd HH:mm:ss' }}</p>
```

### 3. 小数位数

//接收的参数格式为{最少整数位数}.{最少小数位数}-{最多小数位数} //保留 2~4 位小数

```
<p>{{p | number:'1.2-4'}}</p>
```

### 4. JavaScript 对象序列化

```
<p>{{ { name: 'semlinker' } | json }}</p> <!-- Output: { "name": "semlinker" } -->
```

### 5. slice

```
<p>{{ 'semlinker' | slice:0:3 }}</p> <!-- Output: sem -->
```

### 6. 管道链

```
<p>{{ 'semlinker' | slice:0:3 | uppercase }}</p> <!-- Output: SEM -->
```

### 7. 自定义管道

自定义管道的步骤：

使用 [@Pipe](http://bbs.itying.com/user/Pipe) 装饰器定义 Pipe 的 metadata 信息，如 Pipe 的名称 - 即 name 属性

实现 PipeTransform 接口中定义的 transform 方法

1.1 WelcomePipe 定义

```js
import { Pipe, PipeTransform } from '@angular/core';
[@Pipe](/user/Pipe)({ name: 'welcome' })
export class WelcomePipe implements PipeTransform {
  transform(value: string): string {
    if(!value) return value;
    if(typeof value !== 'string') {
      throw new Error('Invalid pipe argument for WelcomePipe');
    }
    return "Welcome to " + value;
  }
}
```

1.2 WelcomePipe 使用

```
<div>
   <p ngNonBindable>{{ 'semlinker' | welcome }}</p>
   <p>{{ 'semlinker' | welcome }}</p> <!-- Output: Welcome to semlinker -->
</div>
```

2.1 RepeatPipe 定义

```
import {Pipe, PipeTransform} from '@angular/core';
[@Pipe](/user/Pipe)({name: 'repeat'})
export class RepeatPipe implements PipeTransform {
    transform(value: any, times: number) {
        return value.repeat(times);
    }
}
```

2.2 RepeatPipe 使用

<div>
   <p ngNonBindable>{{ 'lo' | repeat:3 }}</p>
   <p>{{ 'lo' | repeat:3 }}</p> <!-- Output: lololo -->
</div>
