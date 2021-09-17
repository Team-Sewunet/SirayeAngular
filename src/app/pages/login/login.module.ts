import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginImageComponent } from '../../components/login-image/login-image.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule, NzButtonModule,NzInputModule, NzFormModule,NzMessageModule, NzModalModule,NzSpinModule ],
  declarations: [LoginComponent,LoginImageComponent,LogoComponent ],
  exports: [LoginComponent]
})
export class LoginModule { }
