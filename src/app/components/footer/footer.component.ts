import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public msg = '我是子组件footer的一个msg';
  @Output() private outer = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  run() {
    alert('我是子组件的run方法');
  }
  sendParent() {
    this.outer.emit('msg from child');
  }
}
