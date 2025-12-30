import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor() { }
 private storageKey = 'userType';

  setUserType(type: 'student' | 'tutor') {
    localStorage.setItem(this.storageKey, type);   // overwrite old value
  }

  getUserType(): 'student' | 'tutor' | null {
    return localStorage.getItem(this.storageKey) as 'student' | 'tutor' | null;
  }

  clearUserType() {
    localStorage.removeItem(this.storageKey);
  }


  hasUserType(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }
}
