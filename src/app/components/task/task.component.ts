import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  styles: [
    `
      .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 30px 16px 0;
        float: left;
      }

      .header-menu {
        line-height: 64px;
      }

      .sider-menu {
        height: 100%;
        border-right: 0;
      }

      .inner-layout {
        padding: 0 24px 24px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
    `,
  ],
})
export class TaskComponent implements OnInit {
  loading = false;
  update_loading = false;
  pending: any[]=[];
  done: any[]=[];
  working: any[]=[];
  blocked: any[]=[];
  constructor(private message: NzMessageService) {}

  async ngOnInit() {
    var res = await this.getTask();

    this.pending = res.filter((task: any) => task.status === 'PENDING');
    this.done = res.filter((task: any) => task.status === 'DONE');
    this.working = res.filter((task: any) => task.status === 'WORKING');
    this.blocked = res.filter((task: any) => task.status === 'BLOCKED');
  }

  async getTask() {
    try {
      this.loading = true;
      const response = await axios.get(`${environment.apiURL}/Task`);
      this.loading = false;
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
  allowDrop(e: any) {
    e.preventDefault();
  }

  async drop(e: any, place: any) {
    e.preventDefault();
    const data = e.dataTransfer.getData('object');
    var obj = JSON.parse(data);
    var fromObj;
    if (obj.status == 'PENDING') {
      this.pending.splice(obj['index'], 1);
      fromObj = this.pending;
    } else if (obj.status == 'WORKING') {
      this.working.splice(obj['index'], 1);
      fromObj = this.working;
    } else if (obj.status == 'DONE') {
      this.done.splice(obj['index'], 1);
      fromObj = this.done;
    } else if (obj.status == 'BLOCKED') {
      this.blocked.splice(obj['index'], 1);
      fromObj = this.blocked;
    }
    delete obj['index'];
    
    if (place === 'pending') {
      obj['status'] = 'PENDING';
      await this.updateTask(obj, this.pending, fromObj);
      this.pending.push(obj);
    } else if (place === 'working') {
      obj['status'] = 'WORKING';
      this.working.push(obj);
      await this.updateTask(obj, this.working, fromObj);
    } else if (place === 'done') {
      obj['status'] = 'DONE';
      this.done.push(obj);
      await this.updateTask(obj, this.done, fromObj);
    } else if (place === 'blocked') {
      obj['status'] = 'BLOCKED';
      this.blocked.push(obj);
      await this.updateTask(obj, this.blocked, fromObj);
    }
  }
  async updateTask(task: any, obj: any, fromObj:any) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    try {
      this.update_loading = true;
      const response = await axios.put(
        `${environment.apiURL}/Task/`+task.id,
        task,
        { headers }
      );
      this.update_loading = false;
      this.message.create(
        'success',
        'Your Task Has been moved to ' + task.status + ' !'
      );
      return response.data.data;
    } catch (error) {
      console.error(error);
      fromObj.push(obj[obj.length-1]);
      obj.pop();
      
      this.update_loading = false;
      this.message.create('error', 'Task Could not be updated!');
    }
  }
}
