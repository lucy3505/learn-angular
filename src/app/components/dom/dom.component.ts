import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss'],
})
export class DomComponent implements OnInit {
  public flag: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // 这个声明周期是组件和指令初始化完成，并不是真正的dom加载完成
    let oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'red';

    //获取不到dom节点  因为里面用了angular指令
    // let oBox1: any = document.getElementById('box1');
    // console.log(oBox1.innerHTML);
    // oBox1.style.color = 'blue';
  }

  ngAfterViewInit(): void {
    //视图加载完成后触发的方法 dom加载完成（建议把dom操作放在这个里面）
    let oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'blue';
  }
}
