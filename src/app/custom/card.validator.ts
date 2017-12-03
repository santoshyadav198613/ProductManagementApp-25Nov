
import { AbstractControl } from '@angular/forms';

export function cardValidtor(control: AbstractControl) {
    if (control.value.toString().length > 19 || control.value.toString().length < 16) {
        return { cardValid: false };
    }
    return null;
}
