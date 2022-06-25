import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}

  //同步方法
  getData() {
    return `this is service data`;
  }
  getCallbackData(cb: any) {
    setTimeout(() => {
      var data = 'zhangsan ';
      cb(data);
      // return data;
    }, 1000);
  }
  //promise获取异步数据
  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello');
      }, 1000);
    });
  }
  //rxjs获取异步数据

  getRxjsData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next('rxjs data');
        // observer.error('失败的数据');
      }, 3000);
    });
  }

  //promise多次执行
  getPromiseIntervalData() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve('interval promise');
      }, 1000);
    });
  }
  //rxjs多次执行
  getRxjsIntervalData() {
    return new Observable<any>((observer) => {
      setInterval(() => {
        observer.next('interval rxjs data');
        // observer.error('失败的数据');
      }, 1000);
    });
  }

  getRxjsIntervalNum() {
    let count = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });
  }
}
