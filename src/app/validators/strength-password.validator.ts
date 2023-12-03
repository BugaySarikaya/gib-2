import { AbstractControl, ValidatorFn } from '@angular/forms';

export function strengthPassword(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value || '';
    const length = 5;

    // const hasUpperCase = /[A-Z]+/.test(value); //regex-> regular expression
    // const hasLowerCase = /[a-z]+/.test(value);
    // const hasNumeric = /[0-9]+/.test(value);
    // const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

   if (value) {
      const isValid = value.length >= length;

      return isValid ? null : { strengthPassword: { value: length, actualLength: value.length } };
    } else {
      return null;
    }
  };
}
