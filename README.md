rxjs 是 ReactiveX 编程历练的 js 版本。reactiveX 来自微软，他是一种针对异步数据流的编程。

简单来说，他将一切数据，包括 HTTP 请求，DOM 事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理，使你能以同步编程的当时处理异步数据，并组合不同的操作符来轻松优雅的实现你所需要的功能。

Rxjs 是一种针对异步数据流编程工具，或者叫响应式扩展编程：可不管如何解释 Rxjs 其目标 iu 是异步编程，angular 引入 Rxjs 为了就是让异步可控，更简单。

rxjs 里面提供了很多模块，这里我们主要讲 rxjs 里面最常用的 observable 和 fromEvent

#### 目前常见的异步编程的几种方法：

1.回调函数

2.事件监听/发布订阅

3.Promise

4.rxjs

![](C:\Users\86130\Pictures\react-ssr\rxjs.png)

rxjs 和 promise 用法类似。rxjs 相比 promise 要强大很多。比如 rxjs 中可以中途撤回，rxjs 可以发射多个值，rxjs 提供多种工具函数等

### Rxjs unsubscribe 取消订阅

promise 的创建之后，动作是无法撤回的。observable 不一样，动作可以通过 unsubscribe()方法中途撤回。而且 Observable 在内不做了只能的处理

```js
 //5.过一秒以后撤回刚才的操作
    var stream = this.request.getRxjsData();

    var d = stream.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      d.unsubscribe(); //取消订阅
    }, 1000);
  }
```

### rxjs 订阅后多次执行

这一点 promise 是做不到的，对于 prmise 来说，最终结果要么 resolve,要么 reject,而且都只能触发一次，如果在同一个 promise 对象上多次调用 resolve 方法，则会抛出异常。而 observable 不一样，他可以不断地触发下一个值，就像 next()这个方法名字所暗示地那样

```js
let promise = new Promise((resolve) => {
  setInterval(() => {
    resolve("---promise setInterval---");
  }, 2000);
});
promise.then((v) => console.log(v));

//rxjs
let stream =
  new Observable() <
  number >
  ((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
    }, 1000);
  });
stream.subscribe((value) => console.log("Observerable>" + value));
```

### rxjs 工具函数 map filter

```js
    streamNum
      .pipe(
        filter((value: any): any => value % 2 === 0),
        map((val) => val * val)
      )
      .subscribe((data) => console.log(data));
  }
```

Rxjs 延迟执行

```js
import { Obervable, formEvent } from "rxjs";
import { map, filter, throttleTime } from "rxjs/operators";
var button = document.querySelector("button");
formEvent(button, "click")
  .pipe(throttleTime(1000))
  .subscribe(() => console.log("clicked"));
```
