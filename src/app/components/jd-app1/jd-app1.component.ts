import { Component, OnInit } from '@angular/core';

//引入服务
import { StorageService } from 'src/app/services/storage.service';

//不推荐
var storage = new StorageService(); //不推荐这种用法，storage是能打印出来

@Component({
  selector: 'app-jd-app1',
  templateUrl: './jd-app1.component.html',
  styleUrls: ['./jd-app1.component.scss'],
})
export class JdApp1Component implements OnInit {
  public search_text: any = '';
  public searchList: any[] = [];

  constructor(public storage: StorageService) {
    // console.log(storage);
    //推荐用法:在constructor中指定变量名  且要加上public，:后面必须名字和引入的名字一样
    // console.log(this.storage.get('aa'));
  }

  ngOnInit(): void {
    console.log('页面刷新会促发这个函数');
    var searchList: any = this.storage.get('searchList');
    if (searchList) {
      this.searchList = searchList;
    }
  }

  search() {
    if (this.searchList.includes(this.search_text) || !this.search_text) {
      alert('已经添加或内容不能为空');
      this.search_text = '';

      return;
    }

    this.searchList.push(this.search_text);
    this.storage.set('searchList', this.searchList);
    this.search_text = '';
  }
  deleteHistory(key: any) {
    console.log(key);
    this.searchList.splice(key, 1);
    this.storage.set('searchList', this.searchList);
  }
}
