import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRequest'
})
export class FilterRequestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
