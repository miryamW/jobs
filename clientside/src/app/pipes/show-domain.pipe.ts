import { Pipe, PipeTransform } from '@angular/core';
import { Domains } from '../models/Domains';

@Pipe({
  name: 'showDomain'
})
export class ShowDomainPipe implements PipeTransform {

  transform(value: Domains | string,): string {
    if (typeof value === 'string')
      return value.toString()
    else
      return Domains[value]

  }

}
