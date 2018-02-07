import { Component, OnInit } from '@angular/core';
import { StrengthService } from '../strength.service';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css'],
  providers: [StrengthService]
})  
export class PasswordFieldComponent implements OnInit {
  public passStrength: number;
  private value = '';
  constructor(private service: StrengthService) { }

  ngOnInit() {
    this.passStrength = 0;
  }

  setMyClasses(i: number) {
    const classes: any = {
      red: this.passStrength !== 0 && this.value.length !== 0 && i < 4,
      orange: this.passStrength >= 8 && this.value.length !== 0  && (i >= 4 && i < 8 ),
      green: this.passStrength >= 12 && this.value.length !== 0 && (i >= 8 && i < 12)
    };
    return classes;
  }

  onKey(value: string) {
    this.value = value;
    this.passStrength = this.service.getStrength(this.value);
  }

}
