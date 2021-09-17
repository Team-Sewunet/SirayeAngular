import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listOfData: Person[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
    {
      id: 6,
      firstName: 'John',
      lastName: 'Brown',
      email: 'example@gmail.com'
    },
   
  ];
  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
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

}
