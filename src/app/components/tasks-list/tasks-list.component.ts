import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  @Input() title: string;
  @Input() contents: any[];
  @Input() loading: boolean;
  @Input() classVal: string;
  date: any;

  constructor() {
    this.title = '';
    this.contents = [];
    this.loading = false;
    this.classVal = '';
  }

  ngOnInit(): void {
    this.date = new Date().toISOString();
    
  }
  allowDrop(e: any) {
    e.preventDefault();
  }

  drag(e: any, content: any, i: number) {
    var obj = Object.assign({ index: i }, content);
    var data = JSON.stringify(obj);
    e.dataTransfer.setData('object', data);
  }
}
