import { NgModule } from '@angular/core';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from 'src/app/components/task/task.component';
import { TasksListComponent } from 'src/app/components/tasks-list/tasks-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { MomentModule } from 'ngx-moment';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { CommonModule } from '@angular/common';  



@NgModule({
  declarations: [TasksComponent, TaskComponent, TasksListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    NzGridModule,
    NzCardModule,
    NzDescriptionsModule,
    NzListModule,
    NzSpinModule,
    NzBadgeModule,
    NzTagModule,
    NzSpaceModule,
    MomentModule,
    NzButtonModule,
    NzAvatarModule,
    NzModalModule,
    NzMessageModule,
    NzEmptyModule,
    NzTableModule,
    NzDrawerModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule],
  exports: [TasksComponent]
})
export class TasksModule { }
