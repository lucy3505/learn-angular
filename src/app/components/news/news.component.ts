import { Component, OnInit } from '@angular/core';
//当作一个服务
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public list: any[] = [];
  constructor(
    public http: HttpClient,
    public httpService: HttpserviceService
  ) {}

  ngOnInit(): void {}
  getData() {
    // alert('get data');
    let api = 'http://a.itying.com/api/productlist';
    //rxjs
    this.http.get(api).subscribe((data: any) => {
      console.log(data);
      this.list = data.result;
    });
  }
  doLogin() {
    //手动设置请求类型
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    //https://github.com/lucy3505/client-server-react/tree/master/server
    var api = 'http://127.0.0.1:5000/manage/user/add';
    this.http
      .post(api, { username: 'zhangsan', password: '123' }, httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getJsonpData() {
    //jsonp请求  服务器必须得支持jsonp
    //http://127.0.0.1:5000/manage/product/list?callback=xxx
    //http://127.0.0.1:5000/manage/product/list?cb=xxx
    var api = 'http://127.0.0.1:5000/manage/user/list';

    this.http.jsonp(api, 'callback').subscribe((data) => console.log(data));
  }
  getAxiosData() {
    var api = 'http://127.0.0.1:5000/manage/user/list';
    this.httpService.axiosGet(api).then((res) => console.log(res));
  }
}
