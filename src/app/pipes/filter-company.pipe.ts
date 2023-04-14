import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  transform(companie: any[], searchTerm: string, page = 0): any[] {
    if (searchTerm.length === 0)
      return companie.slice(page,page + 5)

    searchTerm = searchTerm.toLowerCase();
    const filteredUsers = companie.filter(company => {
      const searchStr = `${company.calle} ${company.numero} ${company.colonia} ${company.ciudad} ${company.estado} ${company.phone}`.toLowerCase();
      return company.name.toLowerCase().includes(searchTerm)
        || company.calle.toLowerCase().includes(searchTerm)
        || company.numero.toLowerCase().includes(searchTerm)
        || company.colonia.toLowerCase().includes(searchTerm)
        || company.ciudad.toLowerCase().includes(searchTerm)
        || company.estado.toLowerCase().includes(searchTerm)
        || company.phone.toLowerCase().includes(searchTerm)
    });

    return filteredUsers.slice(page,page + 5)
  }
}