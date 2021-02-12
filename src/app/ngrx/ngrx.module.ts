import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailModule } from './detail/detail.module';
import { ListModule } from './list/list.module';
import { VersionModule } from './version/version.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ListModule, VersionModule, DetailModule],
})
export class NGRXModule {}
