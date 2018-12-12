import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country.model';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: Country[], args?: string): any {
    let searchText = new RegExp(args, 'ig');

    if (value) {
      return value.filter((country: Country) => country.name.search(searchText) !== -1);
    }
  }

}
