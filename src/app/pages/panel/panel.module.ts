import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  imports: [
    PanelRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  declarations: [
    PanelComponent
  ],
  exports:[PanelComponent]
})
export class PanelModule { }
