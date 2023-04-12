import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  hasta = 0
  transform(users: any[], searchTerm: string, desde = 0, pageSize = 0): any[] {
    if(searchTerm === "" || searchTerm.length < 3) return users
    if (!users) {
      return [];
    }
    if (!searchTerm) {
      return users;
    }
    searchTerm = searchTerm.toLowerCase();
    this.hasta = desde + pageSize
    return [users.filter(user => {
      const fullName = user.name.toLowerCase() + ' ' + user.ap_paterno.toLowerCase() + ' ' + user.ap_materno.toLowerCase();
      return fullName.includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm)
        || user.phone_number.toLowerCase().includes(searchTerm)
        || user.rol.toLowerCase().includes(searchTerm);
    })]
  }
  
}
