import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {
  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): any {
    date = new Date(date);  // if orginal type was a string
    date.setDate(date.getDate()-day);
    return new DatePipe('en-US').transform(date, format); 
  }

}
