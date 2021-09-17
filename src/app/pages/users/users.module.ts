import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [CommonModule, UsersRoutingModule, NzTableModule, NzDividerModule, NzTagModule, NzButtonModule, NzModalModule],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
