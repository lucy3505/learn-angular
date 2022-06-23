import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '1',
    cityList: ['北京', '上海', '深圳'],
    city: '北京',
    hobby: [
      {
        title: '吃饭',
        checked: true,
      },
      {
        title: '睡觉',
        checked: false,
      },
      {
        title: '敲代码',
        checked: false,
      },
    ],
    mark: '',
  };
  constructor() {}

  ngOnInit(): void {}
  doSubmit() {
    // 获取表单值的方式
    // 1.dom操作获取表单数据 jquery
    // let username: any = document.getElementById('username');
    // console.log(username.value);

    //2.通过双向数据绑定

    console.log(this.peopleInfo);
  }
}
