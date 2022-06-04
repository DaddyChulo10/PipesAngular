import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "mayusculas"
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string, value2:boolean = true): string {
        /*
        if(value2){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        } */
        return (value2) ? value.toUpperCase() : value.toLowerCase();
    }
}