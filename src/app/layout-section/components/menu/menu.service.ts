import { Injectable } from '@angular/core';

import { IMenuItem } from './menu-item';
import { MENUITEMS, LIVE_MENUITEMS } from './mock-menu-items';
import { MENU } from '../../../../settings/menu';
import { UserProfileService } from "app/core/user-profile.service";

@Injectable()
export class MenuService {

  constructor(private profile: UserProfileService){}

  getMenuItems(): Promise<IMenuItem[]> {
    return Promise.resolve(this.profile.isLiveMenu ? LIVE_MENUITEMS: MENUITEMS);
  }

}

