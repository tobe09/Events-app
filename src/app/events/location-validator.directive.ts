import { Directive } from '@angular/core';
import { Validator, FormGroup, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        const formGroup = <FormGroup>control;
        const addressControl = formGroup.controls['address'];
        const cityControl = formGroup.controls['city'];
        const countryControl = formGroup.controls['country'];
        const onlineUrlControl = (<FormGroup>control.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) ||
        (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { message: 'Please Enter the Full Location or Online Url' };
        }
    }
}