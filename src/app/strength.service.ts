import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable()
export class StrengthService {
  private strength = 0;
  constructor(private service: BackendService) { }

  getStrength(password: string) {

    this.service.getStrength(password).then((result: number) => this.strength = result);
    return this.strength;
  }
}
