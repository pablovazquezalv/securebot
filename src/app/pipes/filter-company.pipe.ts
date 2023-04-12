import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  hasta = 0
  transform(company: any[], searchTerm: string, desde = 0, pageSize = 0): any[] {
    if(searchTerm === "" || searchTerm.length < 3) return company
    if (!company) {
      return [];
    }
    if (!searchTerm) {
      return company;
    }
    searchTerm = searchTerm.toLowerCase();
    this.hasta = desde + pageSize
    return company.slice(desde,this.hasta).filter(user => {
      const fullAddress = user.calle.toLowerCase() + ' ' + user.numero.toLowerCase() + ', ' + user.colonia.toLowerCase() + ', ' + user.ciudad.toLowerCase() + ', ' + user.estado.toLowerCase();
      return user.name.toLowerCase().includes(searchTerm)
        || fullAddress.includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm)
        || user.phone.toLowerCase().includes(searchTerm);
    });
  }

}
