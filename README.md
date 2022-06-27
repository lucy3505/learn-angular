## Angular get 请求数据

angular5.x 以后 get,post 和服务器交互使用的是 HttpClientModule 模块

1.在 app.module.ts 中引入 HttpClientModule 并注入

//app.module.ts

```js
import {HttpClientModule} from '@angular/common/http'

 imports: [

  //配置当前模块运行依赖的其他模块

  BrowserModule,

  HttpClientModule,

 ],
```

//news.compoent.ts

```js
  import { HttpClient, HttpHeaders } from '@angular/common/http';

export class NewsComponent implements OnInit {
  public list: any[] = [];
  constructor(public http: HttpClient) {}

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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var api = '120.0.0.1:4000';
    this.http
      .post(api, { usrname: 'zhangsan' }, httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
  }
}

```

get 的话不需要用到 HttpHeaders,post 需要用到 HttpHeaders

### jsonp

1.在 app.module.ts 中引入 HttpClientModule,HttpClientJsonpModule 并注入

```js
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
```

```js
  getJsonpData() {
    //jsonp请求  服务器必须得支持jsonp
    //http://127.0.0.1:5000/manage/product/list?callback=xxx
    //http://127.0.0.1:5000/manage/product/list?cb=xxx
    var api = 'http://127.0.0.1:5000/manage/user/list';

    this.http.jsonp(api, 'callback').subscribe((data) => console.log(data));
  }
```

## angular 中使用 axios
