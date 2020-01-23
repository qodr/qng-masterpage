import { Injectable } from '@angular/core';

@Injectable()
export class QNgMasterpageService {

  private masterpage = '';
  public beforeMasterpageChange: Function | undefined;
  public afterMasterpageChange: Function | undefined;

  setMasterpage(masterpage: string) {
    if (this.beforeMasterpageChange) {
      this.beforeMasterpageChange(masterpage);
    }

    this.masterpage = masterpage;

    if (this.afterMasterpageChange) {
      this.afterMasterpageChange(masterpage);
    }
  }

  getMasterpage(): string {
    return this.masterpage;
  }
}
