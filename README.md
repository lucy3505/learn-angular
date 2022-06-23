生命周期函数

组件创建，组建更新，组件销毁得时候会触发的一系列方法

当 angular 使用构造函数新建一个组件或指令后，就会按下面的顺序在特定时刻调用这些生命周期钩子方法。

https://angular.cn/guide/lifecycle-hooks

![](C:\Users\86130\Pictures\react-ssr\lifecycle-1.png)

```js
constructor() {
    console.log(
      '00构造函数执行了--除了使用简单的值对局部变量进行初始化之外，什么都不应该做'
    );
  }

  ngOnInit(): void {
    console.log('02ngOnInit执行了---请求数据一般放在这个里面');
  }
  ngDoCheck() {
    console.log(
      '03ngDoCheck执行了---检测，并在发生Angular无法或不愿意自己检测的变化时做出反应'
    );
  }

  ngAfterContentInit() {
    console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
  }
  ngAfterContentChecked() {
    console.log(
      '05ngAfterContentChecked执行了---每次完成被投影组件的内容的变更检测之后调用'
    );
  }
  ngAfterViewInit(): void {
    console.log(
      '06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）'
    );
  }
  ngAfterViewChecked() {
    console.log(
      '07ngAfterViewChecked执行了-----每次做完组件视图和子视图的变更检测之后调用'
    );
  }
  ngOnDestroy() {
    console.log('08ngOnDestroy执行了-----');
  }
```

## ng 触发时候执行

00 构造函数执行了--除了使用简单的值对局部变量进行初始化之外，什么都不应该做
02ngOnInit 执行了---请求数据一般放在这个里面
19 03ngDoCheck 执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时做出反应
04ngAfterContentInit 执行了---当把内容投影进组件之后调用
05ngAfterContentChecked 执行了---每次完成被投影组件的内容的变更检测之后调用
06 ngAfterViewInit 执行了----初始化完组件视图及其子视图之后调用（dom 操作放在这个里面）
07ngAfterViewChecked 执行了-----每次做完组件视图和子视图的变更检测之后调用

## 数据变化的时候会触发的

init 只会触发一次 ，check 函数只要数据改变一般都会触发

```
03ngDoCheck执行了---检测，并在发生Angular无法或不愿意自己检测的变化时做出反应
05ngAfterContentChecked执行了---每次完成被投影组件的内容的变更检测之后调用
07ngAfterViewChecked执行了-----每次做完组件视图和子视图的变更检测之后调用
```

ngOnChanges:父组件传值的时候会触发
