import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { AvatarComponent } from './avatar/avatar.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [ProfileComponent, AvatarComponent, SettingComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
