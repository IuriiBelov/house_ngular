import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        return value.substring(0, 8) + (parseInt(value.substring(8, 10)) + 1).toString();
    }
}