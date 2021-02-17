import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any): unknown {
    let i = 0;
    const pattern = '####-##-##';
    const date = value.toString();
    return pattern.replace(/#/g, (_) => date[i++]);
  }
}
