import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";

//Parametresiz 
export function startsWithZeroValidator (control:AbstractControl):ValidationErrors |null{
      let value:string = control.value;
    if (value.startsWith("0")) {
        return {startsWithZeroValidator:true}
    }
    return null
}
//gelen string arrayi içerisindeki karakterleri  içermiyorsa true dön
export function validatorWithParameter(value:string[]):ValidatorFn{
return (control:AbstractControl):ValidationErrors|null=>{
    const _value:string = control.value;
    for (let index = 0; index < value.length; index++) {
        if (!_value.includes(value[index])) {
            return {validatorWithParameter:true}
        }
        
    }
    return null
}
}

// verilen iki string eşleşiyor mu kontrol etme
export function checkMatch(firstValue:string,secondValue:string):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        const _firstValue= control.get(firstValue).value;
        const _secondValue = control.get(secondValue).value;
        if (_firstValue!=_secondValue) {
            return {"match":false}
        }

        return null
    }
    }

//rxjs sonrası buraya tekrar gel...
