import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(fullname: string, args?: any): any {
    const result = fullname
      .split(' ')
      .map((ele) => {
        return ele[0];
      })
      .join('');
    return result;
  }
}
