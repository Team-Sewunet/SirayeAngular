import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from '../../../environments/environment';

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading = false;
  listOfData: Person[] = [
    
   
  ];
  constructor(private modal: NzModalService) {}

  async ngOnInit() {

    this.listOfData = await this.getUser();
  }
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to delete this user?',
      nzContent: '<b style="color: red;">Once you delete the user you can not undo it! Please check before action.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  async getUser(){
    
    try {
      this.loading = true;
      const response = await axios.get(`${environment.accountApi}/Account/all-users`);
      this.loading = false;
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  

}
