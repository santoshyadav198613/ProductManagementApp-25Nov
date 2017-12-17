import { Directive } from '@angular/core';

import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordVaidatorDirective, multi: true }]
})
export class PasswordVaidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null && control.value !== undefined) {
      if (control.value.length > 6) {
        return { passwordValid: false }
      }
      return null;
    }
  }
}
