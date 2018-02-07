import { Injectable } from '@angular/core';


@Injectable()
export class BackendService {

  constructor() { }

  getStrength(pass: string): PromiseLike<number> {
    if (pass) {
      const passLength = pass.length;
      if ( passLength < 13) {
        return Promise.resolve<number>(passLength);
      } else if (passLength > 12) {
        return Promise.resolve<number>(12);
      } else {
        return Promise.resolve<number>(0);
      }
    }

    return Promise.resolve<number>(0);
  }
}
