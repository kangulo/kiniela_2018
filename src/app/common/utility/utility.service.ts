import { Injectable } from '@angular/core';

import { User } from '../../classes/User';

@Injectable()
export class UtilityService {

  constructor() { }

  IsLogged(){
    if (typeof (Storage) !== 'undefined') {
      if (sessionStorage.getItem('name')){
        return true;
      }
    }
    return false;
  }

}
