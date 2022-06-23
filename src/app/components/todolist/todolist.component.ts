import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  public search_text: string = '';
  public todoList: any[] = [];
  constructor(public storage: StorageService) {}

  ngOnInit(): void {
    var todoList: any = this.storage.get('todoList');
    if (todoList) {
      this.todoList = todoList;
    }
  }
  doAdd(e: any) {
    if (e.keyCode === 13) {
      if (this.todolistHasKeyword() || !this.search_text) {
        alert('已经添加过');
        return;
      }
      this.todoList.push({ title: this.search_text, status: true });
      this.storage.set('todoList', this.todoList);
      this.search_text = '';
    }
  }

  deleteHistory(key: any) {
    this.todoList.splice(key, 1);
    this.storage.set('todoList', this.todoList);
  }
  todolistHasKeyword() {
    return this.todoList.find((item) => item.title === this.search_text);
  }
  checkboxChange() {
    console.log('事件促发');
    this.storage.set('todoList', this.todoList);
  }
}
