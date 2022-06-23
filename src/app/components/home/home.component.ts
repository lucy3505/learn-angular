import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public picUrl = 'https://www.baidu.com/img/flexible/logo/pc/result.png';

  public list: any[] = [
    {
      title: '我是新闻1',
    },
    {
      title: '我是新闻2',
    },
    {
      title: '我是新闻3',
    },
    {
      title: '我是新闻4',
    },
  ];

  public title: string = '我是title';

  public flag: boolean = true;
  public attr: string = 'red';
  public today: any = new Date();
  public keywords: string = '这是默认值';

  public orderStatus: number = 1;
  //1表示已经支付  2支付且确认订单 3表示已经发货 4表示已经收获 5无效
  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {}
  run() {
    console.log('这是一个自定义方法');
  }
  getData() {
    alert(this.title);
  }
  setData() {
    this.title = '我是改变后的title';
  }
  keyDown(e: any) {
    if (e.keyCode == 13) {
      console.log('按了回车');
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
      console.log('按了回车');
    } else {
      //e.target 获取dom对象
      console.log(e.target);
      console.log(e.target.value);
    }
  }

  runEvent(e: any) {
    var dom: any = e.target;
    dom.style.color = 'red';
  }
  changeKeywords() {
    this.keywords = '我是改变后的值';
  }
  getKeywords() {
    console.log(this.keywords);
  }
}
