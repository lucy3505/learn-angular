import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public request: RequestService) {}

  ngOnInit(): void {
    //同步方法
    let data = this.request.getData();
    console.log(data);
    //callback获取异步数据
    this.request.getCallbackData((data: any) => {
      console.log(data);
    });
    this.request.getPromiseData().then((res) => {
      console.log(res);
    });

    // //4。rxjs获取异步方法里面的数据
    // var rxjsData = this.request.getRxjsData();
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // });

    //5.过一秒以后撤回刚才的操作
    var stream = this.request.getRxjsData();

    var d = stream.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      d.unsubscribe(); //取消订阅
    }, 1000);

    //promise没有这个能里  多次执行异步
    this.request.getPromiseIntervalData().then((res) => {
      console.log(res);
    });

    //7.rxjs自行多次

    this.request.getRxjsIntervalData().subscribe((res) => console.log(res));

    //8.用工具方法对返回的数据进行封站处理
    var streamNum = this.request.getRxjsIntervalNum();
    // streamNum
    //   .pipe(
    //     filter((value: any): any => {
    //       if (value % 2 == 0) {
    //         return true;
    //       }
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // streamNum
    //   .pipe(
    //     map((value: any): any => {
    //       if (value) {
    //         return value * value;
    //       }
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    streamNum
      .pipe(
        filter((value: any): any => value % 2 === 0),
        map((val) => val * val)
      )
      .subscribe((data) => console.log(data));
  }
}
